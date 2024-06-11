import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import { ContentWrapper, WideContent, Box } from "@/styles/CommonStyle";
import GameHeader from "@/components/Game/Shared/GameHeader";
import { MainContentWrapper, Wrapper, Main } from "@/components/Game/Shared/Layout";
import { Button } from "@/components/Game/Shared/Button";
import WaitingTab from "@/components/Game/Waiting/WaitingTab";
import PlayingTab from "@/components/Game/Playing/PlayingTab";
import WaitingContainer from "@/components/Game/Waiting/WaitingContainer";
import PlayingContainer from "@/components/Game/Playing/PlayingContainer";
import Modal from "@/components/Game/Shared/GameModal";
import {
  userInfoState,
  waitingPlayerListState,
  playingPlayerListState
} from "@/recoil/userState";
import { roomInfoState } from "@/recoil/roomState";
import {
  currentRoundState,
  randomWordState,
  initialCharacterState,
  currentPointsState
} from "@/recoil/gameState";
import {
  onLoadRoom,
  onChangeRoomConfig,
  onChangeRoomOwner,
  onUserJoinRoom,
  onUserLeaveRoom,
  onSwitchReadyState,
  onGameStart
} from "@/services/socket";
import { getPlayerInfoByUserId } from "@/services/user";

const GameRoom = () => {
  const user = useRecoilValue(userInfoState);
  const [roomInfo, setRoomInfo] = useRecoilState(roomInfoState);
  const [waitingPlayerList, setWaitingPlayerList] =
    useRecoilState(waitingPlayerListState);
  const setPlayingPlayerList = useSetRecoilState(playingPlayerListState);
  const setCurrRound = useSetRecoilState(currentRoundState);
  const setRandomWord = useSetRecoilState(randomWordState);
  const setInitialCharacter = useSetRecoilState(initialCharacterState);
  const setCurrPoints = useSetRecoilState(currentPointsState);

  const [isPlaying, setIsPlaying] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDataFetched, setIsDataFetched] = useState(false);

  let newOwnerIndex = null;

  useEffect(() => {
    setWaitingPlayerList(roomInfo?.userList);

    setWaitingPlayerList((prev) => {
      const updatedList = prev?.map((player, idx) => {
        return { isHost: idx === roomInfo?.roomOwnerUserIndex, ...player };
      });
      return updatedList;
    });

    setIsPlaying(roomInfo?.state === "playing" ? true : false);

    // 방 설정 변경
    onChangeRoomConfig((newRoom) => {
      setRoomInfo(newRoom);
    });

    // 타 플레이어 입장 알림
    onUserJoinRoom((userId) => {
      getUserInfoByUserId(userId);
    });

    // 타 플레이어 준비 여부 알림
    onSwitchReadyState((data) => {
      const { index, state } = data;
      setWaitingPlayerList((prevList) => {
        return prevList?.map((player, idx) =>
          idx === index ? { ...player, isReady: state } : player
        );
      });
    });

    // 타 플레이어 퇴장 알림
    onUserLeaveRoom((roomStatus) => {
      const { userList, currentUserCount } = roomStatus;
      setRoomInfo((prev) => ({ ...prev, userList }));
      setIsDataFetched(false);
      setWaitingPlayerList((prev) =>
        prev.filter((user) => userList.some(({ userId }) => userId === user.userId))
      );

      if (newOwnerIndex !== null) {
        setWaitingPlayerList((prev) => {
          const updatedList = prev.map((player, idx) => {
            return { ...player, isHost: idx === newOwnerIndex };
          });
          return updatedList;
        });
        newOwnerIndex = null;
      }
    });

    // 방장 변경
    onChangeRoomOwner((newOwnerIdx) => {
      newOwnerIndex = newOwnerIdx;
    });

    // 게임 시작
    onGameStart(
      (room) => {
        setCurrRound(room.currentRound);
        setRandomWord(room.roundWord);
        setInitialCharacter(room.roundWord[0]);
        setCurrPoints(0);
        setIsPlaying(true);
      },
      (error) => {
        setModalType("alert");
        setErrorMessage(error);
        setIsModalOpen(true);
      }
    );

    // 방 조회
    // loadRoom((room) => {
    //   setRoomInfo(room);
    //   setIsPlaying(room.state === "playing" ? true : false);

    //   // 방장
    //   setWaitingPlayerList((prev) => [
    //     { userId: room.roomOwnerUserId, isHost: true, isReady: true },
    //     ...prev
    //   ]);

    //   // 방장이 아닌 플레이어
    //   room.userList?.forEach((user) => {
    //     setWaitingPlayerList((prev) => [...prev, user]);
    //   });
    // });
  }, []);

  useEffect(() => {
    if (!isPlaying) {
      setIsDataFetched(false);
      onLoadRoom(
        (room) => {
          setRoomInfo(room);
          setWaitingPlayerList(room.userList);
        },
        (error) => {
          setModalType("alert");
          setErrorMessage(error);
          setIsModalOpen(true);
        }
      );
    }
  }, [isPlaying]);

  // Add Waiting Players Info
  useEffect(() => {
    // if (waitingPlayerList && waitingPlayerList?.length !== 0 && !isDataFetched) {
    if (waitingPlayerList && waitingPlayerList?.length !== 0 && !isDataFetched) {
      const fetchAllUsers = async () => {
        const updatedPlayerList = await Promise.all(
          waitingPlayerList.map(async (user, idx) => {
            const response = await getPlayerInfoByUserId(user.userId);
            const isHost = idx === roomInfo?.roomOwnerUserIndex;
            return { ...user, isHost, ...response };
          })
        );
        setWaitingPlayerList(updatedPlayerList);
        setIsDataFetched(true);
      };
      fetchAllUsers();
    }
  }, [waitingPlayerList]);

  const getUserInfoByUserId = async (userId) => {
    const userInfo = await getPlayerInfoByUserId(userId);
    return setWaitingPlayerList((prev, idx) => {
      if (prev.some((user) => user.userId === userId)) return prev;
      return [
        ...prev,
        {
          userId,
          isHost: idx === roomInfo?.roomOwnerUserIndex,
          isReady: false,
          ...userInfo
        }
      ];
    });
  };

  return (
    <ContentWrapper row="center" col="center">
      {isModalOpen && (
        <Modal
          type={modalType}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          setIsDataFetched={setIsDataFetched}
          height="14.5rem"
        >
          {errorMessage}
        </Modal>
      )}
      <WideContent dir="col" row="center">
        <GameHeader />
        <Main width="100%">
          <Box bgColor={isPlaying && "#000"}>
            <MainContentWrapper dir="col">
              <Wrapper row="between" col="end">
                {isPlaying ? (
                  <PlayingTab />
                ) : (
                  <WaitingTab
                    isHost={
                      waitingPlayerList?.find((_user) => _user.userId === user?.userId)
                        ?.isHost
                    }
                    roomId={roomInfo?.id}
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
                <WaitingContainer roomInfo={roomInfo} />
              )}
            </MainContentWrapper>
          </Box>
        </Main>
      </WideContent>
    </ContentWrapper>
  );
};

export default GameRoom;
