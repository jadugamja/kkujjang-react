import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import PropTypes from "prop-types";

import { gameStart, switchReadyState } from "@/services/socket";
import { roomIdState, isPlayingRoomState } from "@/recoil/roomState";
import { waitingPlayerListState, playingPlayerListState } from "@/recoil/userState";
import { userNameState } from "@/recoil/userState";
import { SpacingWrapper } from "../Shared/Layout";
import { MainTab, Tab } from "../Shared/Tab";
import Modal from "../Shared/GameModal";
import {
  randomWordState,
  initialCharacterState,
  currentRoundState,
  myTurnPlayerIndexState
} from "../../../recoil/gameState";

const WaitingTab = ({ isHost, roomId, setIsPlaying }) => {
  const [modalType, setModalType] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const userName = useRecoilValue(userNameState);
  const setRoomId = useSetRecoilState(roomIdState);
  const setWaitingPlayerList = useSetRecoilState(waitingPlayerListState);
  const setPlayingPlayerList = useSetRecoilState(playingPlayerListState);
  const setRandomWord = useSetRecoilState(randomWordState);
  const setInitialCharacter = useSetRecoilState(initialCharacterState);
  const setCurrRound = useSetRecoilState(currentRoundState);
  const setMyTurnPlayerIndex = useSetRecoilState(myTurnPlayerIndexState);

  const onStartGame = () => {
    gameStart(
      (room) => {
        const updatedPlayerList = room.usersSequence.map((user, idx) => ({
          id: user.userId,
          score: user.score,
          myTurn: idx === room.currentTurnUserIndex
        }));
        setMyTurnPlayerIndex(room.currentTurnUserIndex);
        setPlayingPlayerList(updatedPlayerList);
        setCurrRound(room.currentRound);
        setRandomWord(room.roundWord);
        setInitialCharacter(room.roundWord[0]);
        setIsPlaying(true);
      },
      (error) => {
        setModalType("alert");
        setModalMessage(error);
        setIsModalOpen(true);
      }
    );
  };

  const onUpdateRoomConfig = () => {
    setRoomId(roomId);
    setModalType("room");
    setIsModalOpen(true);
  };

  const onReadyToggle = () => {
    switchReadyState(!isReady, (data) => {
      const { index, state } = data;
      setIsReady(state);
      setWaitingPlayerList((prevList) => {
        return prevList?.map((player, idx) =>
          idx === index ? { ...player, isReady: state } : player
        );
      });
    });
  };

  return (
    <>
      <SpacingWrapper spacingX="5px">
        <MainTab bgColor="#f3f3f3">대기실</MainTab>
        {isHost ? (
          <>
            <MainTab bgColor="#cdeba1" onClick={onStartGame}>
              시작
            </MainTab>
            <MainTab bgColor="#FFC67F" onClick={onUpdateRoomConfig}>
              방 설정
            </MainTab>
          </>
        ) : (
          <Tab type={isReady ? "ready" : "wait"} onClick={onReadyToggle}>
            {isReady ? "대기" : "준비"}
          </Tab>
        )}
      </SpacingWrapper>
      {isModalOpen ? (
        <Modal
          type={modalType}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          roomId={roomId}
        >
          {modalMessage}
        </Modal>
      ) : null}
    </>
  );
};

WaitingTab.propTypes = {
  isHost: PropTypes.bool,
  isReady: PropTypes.bool,
  setIsReady: PropTypes.func,
  roomId: PropTypes.number,
  setIsPlaying: PropTypes.func
};

export default WaitingTab;
