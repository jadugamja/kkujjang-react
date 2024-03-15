import React, { useRef, useState, useEffect, useCallback } from "react";
import { useRecoilValue } from "recoil";
import io from "socket.io-client";
import { Cookies } from "react-cookie";

import { SOCKET_URL } from "@/services/const";
import GameHeader from "@/components/Game/Shared/GameHeader";
import { ContentWrapper, WideContent, Main, Box } from "@/styles/CommonStyle";
import Ranking from "@/components/Game/Lobby/Ranking";
import Profile from "@/components/Game/Shared/Profile";
import LobbyRoomList from "@/components/Game/Lobby/LobbyRoomList";
import { Tab } from "@/components/Game/Shared/Tab";
import { Button } from "@/components/Game/Shared/Button";
import Footer from "@/components/Web/Shared/Layout/Footer";
import Modal from "@/components/Game/Shared/GameModal";
import {
  SideContentWrapper,
  MainContentWrapper,
  SpacingWrapper
} from "@/components/Game/Shared/Layout";
import {
  initSocket,
  disconnectSocket,
  loadRoomList,
  onLoadNewRoom,
  onDestroyRoom,
  onUpdateCurrentPlayerCount,
  onUpdateRoomConfig
} from "@/services/socket";
import { getCurrentUserInfo } from "../../services/user";
import { userInfoState } from "../../recoil/userState";

const Lobby = () => {
  const [rooms, setRooms] = useState([]);
  const [modalType, setModalType] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useRecoilValue(userInfoState);
  const cookies = new Cookies();
  const [socket, setSocket] = useState();

  let onMount = false;

  useEffect(() => {
    if (!onMount) {
      let isErrorOccured = false;

      const clientSocket = io(SOCKET_URL, {
        path: "/game/socket.io/",
        reconnection: false,
        extraHeaders: {
          sessionId: cookies.get("sessionId")
        }
      });

      clientSocket.on("connect", () => {
        console.log("[log] Connect to the Server...");
      });

      clientSocket.on("error", (error) => {
        console.log(`[Error]: ${error}`);
        isErrorOccured = true;
        setModalType("error");
        setErrorMessage(error);
        setIsModalOpen(true);
        return;
      });

      clientSocket.emit("load room list");

      clientSocket.on("complete load room list", (roomList) => {
        console.log("[log] Complete Load Room List: ", roomList);
        setRooms(roomList);
      });

      clientSocket.on("load new room", (newRoom) => {
        console.log("[log] Load New Room: ", newRoom);
        setRooms((prev) => [newRoom, ...prev]);
      });

      clientSocket.on("destroy room", (roomId) => {
        console.log("[log] Destroy Room: ", roomId);
        setRooms((prev) => prev.filter((room) => room.id !== roomId));
      });

      clientSocket.on("update room member count", (data) => {
        console.log("[log] update room member count: ", data);
        const { roomId, currentPlayerCount } = data;
        setRooms((prev) =>
          prev.map((room) =>
            room.id === roomId ? { ...room, currentPlayerCount } : room
          )
        );
      });

      clientSocket.on("update room config", (newRoom) => {
        console.log("[log] update room config: ", newRoom);
        setRooms((prev) =>
          prev.map((room) => (room.id === newRoom.id ? { ...room, ...newRoom } : room))
        );
      });

      setSocket(clientSocket);

      if (!isErrorOccured) {
        // getUserInfo();
      }
    }

    onMount = true;
  }, []);

  useEffect(() => {
    return () => {
      if (socket) {
        socket.disconnect("[log] Disconnected from the Server...");
      }
    };
  }, [socket]);

  const getUserInfo = useCallback(async () => {
    const userInfo = await getCurrentUserInfo();

    // 아바타 설정되어 있지 않은 경우 아바타 선택 모달 띄우기
    if (userInfo.avatarAccessoryIndex === 0) {
      setModalType("avatar");
      setIsModalOpen(true);
    } else {
      setModalType(null);
      setIsModalOpen(false);
    }
  }, []);

  return (
    <ContentWrapper row="center" col="center">
      {isModalOpen && (
        <Modal
          type={modalType}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          height="14rem"
        >
          {modalType === "error" && errorMessage}
        </Modal>
      )}
      <WideContent dir="col">
        <GameHeader />
        <Main>
          <Box>
            <SideContentWrapper dir="col">
              <Tab type="ranking">랭킹</Tab>
              <Ranking />
              <Profile />
            </SideContentWrapper>
            <MainContentWrapper dir="col">
              <SpacingWrapper row="between" col="end">
                <SpacingWrapper spacingX="5px">
                  <Tab type="list">방 목록</Tab>
                  <Tab type="create">방 만들기</Tab>
                  <Tab type="enter" rooms={rooms}>
                    바로 입장
                  </Tab>
                </SpacingWrapper>
                <div>
                  <Button type="help" />
                  <Button type="setting" />
                </div>
              </SpacingWrapper>
              <LobbyRoomList rooms={rooms} roomId={null} />
            </MainContentWrapper>
          </Box>
        </Main>
        <Footer />
      </WideContent>
    </ContentWrapper>
  );
};

export default Lobby;
