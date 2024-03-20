import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import { userInfoState, userNameState } from "@/recoil/userState";
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
  onUserLeaveRoom,
  onSwitchReadyState,
  onGameStart
} from "../../services/socket";
import { waitingPlayerListState, playingPlayerListState } from "@/recoil/userState";
import { roomInfoState } from "@/recoil/roomState";
import Modal from "../../components/Game/Shared/GameModal";
import { getWaitingPlayerInfoByUserId } from "@/services/user";
import {
  currentRoundState,
  randomWordState,
  initialCharacterState
} from "../../recoil/gameState";

const GameRoom = () => {
  const userName = useRecoilValue(userNameState);
  const user = useRecoilValue(userInfoState);
  const [roomInfo, setRoomInfo] = useRecoilState(roomInfoState);
  const [waitingPlayerList, setWaitingPlayerList] =
    useRecoilState(waitingPlayerListState);
  const setPlayingPlayerList = useSetRecoilState(playingPlayerListState);
  const setCurrRound = useSetRecoilState(currentRoundState);
  const setRandomWord = useSetRecoilState(randomWordState);
  const setInitialCharacter = useSetRecoilState(initialCharacterState);

  const [isPlaying, setIsPlaying] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDataFetched, setIsDataFetched] = useState(false);

  let newOwnerIndex = null;

  // 경로의 roomId값 추출
  const { roomId } = useParams();

  // useEffect(() => {
  //   setWaitingPlayerList(roomInfo?.userList);
  //   setIsPlaying(roomInfo?.state === "playing" ? true : false);
  // }, [roomInfo]);

  // useEffect(() => {
  //   initSocket((error) => {
  //     setErrorMessage(error);
  //     setIsModalOpen(true);
  //   });

  //   return () => disconnectSocket();
  // }, []);
  let isMounted = false;

  useEffect(() => {
    //   if (isMounted) return;

    setWaitingPlayerList(roomInfo?.userList);
    setIsPlaying(roomInfo?.state === "playing" ? true : false);

    //   initSocket(
    //     () => {

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
      setRoomInfo((prev) => ({ ...prev, currentUserCount }));
      setWaitingPlayerList((prev) =>
        prev.filter((user) => userList.some(({ userId }) => userId === user.userId))
      );

      if (newOwnerIndex !== null) {
        setWaitingPlayerList((prev) => {
          const updatedList = prev.map((user, idx) => {
            return { ...user, isHost: idx === newOwnerIndex };
          });
          return updatedList;
        });
        newOwnerIndex = null;
      }
    });

    // 방장 변경
    onChangeRoomOwner((newOwnerIdx) => {
      // setWaitingPlayerList((prev) => {
      //   const updatedList = prev.map((user, idx) => {
      //     return { ...user, isHost: idx === newOwnerIdx };
      //   });
      //   return updatedList;
      // });
      newOwnerIndex = newOwnerIdx;
    });

    // 게임 시작
    onGameStart(
      (room) => {
        const updatedPlayerList = room.usersSequence.map((user, idx) => ({
          id: user.userId,
          score: user.score,
          myTurn: idx === 0
        }));
        // setMyTurnPlayerIndex(room.currentTurnUserIndex);
        setPlayingPlayerList(updatedPlayerList);
        setCurrRound(room.currentRound);
        setRandomWord(room.roundWord);
        setInitialCharacter(room.roundWord[0]);
        setIsPlaying(true);
      },
      (error) => {
        // setModalType("alert");
        // setModalMessage(error?.slice(1, -1));
        setErrorMessage(error?.slice(1, -1));
        setIsModalOpen(true);
      }
    );

    //     },
    //     (error) => {
    //       setErrorMessage(error);
    //       setIsModalOpen(true);
    //       return;
    //     }
    //   );

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

    //   isMounted = true;
    //   return () => disconnectSocket();
  }, []);

  useEffect(() => {
    if (waitingPlayerList && waitingPlayerList?.length !== 0 && !isDataFetched) {
      const fetchAllUsers = async () => {
        const updatedPlayerList = await Promise.all(
          waitingPlayerList.map(async (user, idx) => {
            const response = await getWaitingPlayerInfoByUserId(user.userId);
            const isHost = roomInfo.roomOwnerUserId === user.userId;
            // const isHost = idx === 0;
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
    const userInfo = await getWaitingPlayerInfoByUserId(userId);
    return setWaitingPlayerList((prev) => {
      if (prev.some((user) => user.userId === userId)) return prev;
      return [...prev, { userId, isHost: false, isReady: false, ...userInfo }];
    });
  };

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
                  <WaitingTab roomId={roomInfo?.id} setIsPlaying={setIsPlaying} />
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
