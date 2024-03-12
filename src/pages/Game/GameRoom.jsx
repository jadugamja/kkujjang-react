import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import { userNameState } from "@/recoil/userState";
import { ContentWrapper, WideContent, Main, Box } from "@/styles/CommonStyle";
import GameHeader from "@/components/Game/Shared/GameHeader";
import { MainContentWrapper, Wrapper } from "@/components/Game/Shared/Layout";
import { Button } from "@/components/Game/Shared/Button";
import WaitingTab from "@/components/Game/Waiting/WaitingTab";
import PlayingTab from "@/components/Game/Playing/PlayingTab";
import WaitingContainer from "@/components/Game/Waiting/WaitingContainer";
import PlayingContainer from "@/components/Game/Playing/PlayingContainer";
import {
  initSocket,
  disconnectSocket,
  loadRoom,
  onChangeRoomOwner,
  onUserJoinRoom,
  onUserLeaveRoom
} from "../../services/socket";
import { waitingPlayerListState } from "../../recoil/userState";
import Modal from "../../components/Game/Shared/GameModal";
import useAxios from "@/hooks/useAxios";

const GameRoom = () => {
  const userName = useRecoilValue(userNameState);
  const [waitingPlayerList, setWaitingPlayerList] =
    useRecoilState(waitingPlayerListState);
  const [roomInfo, setRoomInfo] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [apiConfig, setApiConfig] = useState(null);
  const { response, loading, error, fetchData } = useAxios(apiConfig, false);

  // 경로의 roomId값 추출
  const { roomId } = useParams();

  useEffect(() => {
    initSocket((error) => {
      setErrorMessage(error);
      setIsModalOpen(true);
    });

    return () => disconnectSocket();
  }, []);

  useEffect(() => {
    // 방 조회
    loadRoom(roomId, (room) => {
      debugger;
      setRoomInfo(room);
      setIsPlaying(room.state === "playing" ? true : false);

      // 방장
      setWaitingPlayerList((prev) => [
        { userId: room.roomOwnerUserId, isHost: true, isReady: true },
        ...prev
      ]);

      // 방장이 아닌 플레이어
      room.userList?.forEach((user) => {
        setWaitingPlayerList((prev) => [...prev, user]);
      });
    });

    // 타 플레이어 입장 알림
    onUserJoinRoom((user) => {
      setWaitingPlayerList((prev) => [...prev, user]);
    });

    // 타 플레이어 퇴장 알림
    onUserLeaveRoom((userId) => {
      setWaitingPlayerList((prev) => prev.filter((user) => user.id !== userId));
    });

    // 방장 변경
    onChangeRoomOwner((newOwnerIdx) => {
      setWaitingPlayerList((prev) => {
        const updatedList = [...prev];
        updatedList[newOwnerIdx].isHost = true;
        return updatedList;
      });
    });

    // 임시
    const tmp = {
      id: roomId,
      title: "테스트123",
      password: "", // 비밀번호 X
      currentUserCount: 1,
      maxUserCount: 8,
      maxRound: 5,
      roundTimeLimit: 90,
      roomOwnerUserId: "abcd1234",
      state: "playing"
    };

    setRoomInfo(tmp);
    setIsPlaying(tmp.state === "playing" ? true : false);
  }, []);

  useEffect(() => {
    if (apiConfig === null) return;
    fetchData();
  }, [apiConfig]);

  useEffect(() => {
    // 유저 정보
    waitingPlayerList.forEach((user) => {
      setApiConfig({
        method: "get",
        url: `/user/${user?.username}`
      });
    });
  }, [waitingPlayerList]);

  useEffect(() => {
    if (response !== null) {
      setWaitingPlayerList((prev) => {
        const userIndex = prev.findIndex(
          (user) => user.userId === apiConfig.url.split("/").pop()
        );
        if (userIndex !== -1) {
          const updatedUser = { ...prev[userIndex], ...response };
          return [...prev.slice(0, userIndex), updatedUser, ...prev.slice(userIndex + 1)];
        }
        return prev;
      });
    }
  }, [response]);

  return (
    <ContentWrapper row="center" col="center">
      {isModalOpen && (
        <Modal type="error" isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          {errorMessage}
        </Modal>
      )}
      <WideContent dir="col">
        <GameHeader />
        <Main>
          <Box bgColor={isPlaying && "#000"}>
            <MainContentWrapper dir="col">
              <Wrapper row="between" col="end">
                {isPlaying ? (
                  <PlayingTab />
                ) : (
                  <WaitingTab
                    isHost={roomInfo.roomOwnerUserId === userName ? true : false}
                    roomId={roomInfo.id}
                    setIsPlaying={setIsPlaying}
                  />
                )}
                <div>
                  <Button type="help" />
                  <Button type="setting" />
                  <Button type="exit" location={isPlaying ? "playing" : "waiting"} />
                </div>
              </Wrapper>
              {isPlaying ? (
                <PlayingContainer roomInfo={roomInfo} setIsPlaying={setIsPlaying} />
              ) : (
                <WaitingContainer
                  isHost={roomInfo.roomOwnerUserId === userName ? true : false}
                  roomInfo={roomInfo}
                />
              )}
            </MainContentWrapper>
          </Box>
        </Main>
      </WideContent>
    </ContentWrapper>
  );
};

export default GameRoom;
