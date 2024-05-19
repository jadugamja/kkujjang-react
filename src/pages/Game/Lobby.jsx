import React, { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useLocation } from "react-router-dom";

import { roomInfoState } from "@/recoil/roomState";
import GameHeader from "@/components/Game/Shared/GameHeader";
import { ContentWrapper, WideContent, Box } from "@/styles/CommonStyle";
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
  SpacingWrapper,
  Main
} from "@/components/Game/Shared/Layout";
import {
  loadRoomList,
  onLoadNewRoom,
  onDestroyRoom,
  onUpdateCurrentPlayerCount,
  onUpdateRoomConfig,
  onError
} from "@/services/socket";

const Lobby = () => {
  const [rooms, setRooms] = useState([]);
  const setRoomInfo = useSetRecoilState(roomInfoState);
  const [modalType, setModalType] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();
  const path = location.pathname;

  let isMounted = false;

  useEffect(() => {
    if (!isMounted && path === "/game") {
      loadRoomList((roomList) => {
        setRooms([...roomList].reverse());
      });

      onLoadNewRoom((newRoom) => {
        setRooms((prev) => [newRoom, ...prev]);
        setRoomInfo(null);
      });

      onDestroyRoom(({ roomId }) => {
        setRooms((prev) => prev.filter((room) => room.id !== roomId));
      });

      onUpdateCurrentPlayerCount((data) => {
        const { roomId, currentPlayerCount } = data;
        setRooms((prev) =>
          prev.map((room) =>
            room.id === roomId ? { ...room, currentPlayerCount } : room
          )
        );
      });

      onUpdateRoomConfig((newRoom) => {
        setRooms((prev) =>
          prev.map((room) => (room.id === newRoom.id ? { ...room, ...newRoom } : room))
        );
      });

      onError((error) => {
        setModalType("error");
        setErrorMessage(error);
        setIsModalOpen(true);
        return;
      });
    }

    isMounted = true;
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
      <WideContent dir="col" row="center">
        <GameHeader />
        <Main width="100%">
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
