import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import PropTypes from "prop-types";

import { roomIdState, isPlayingRoomState } from "@/recoil/roomState";
import { waitingPlayerListState } from "@/recoil/userState";
import { userNameState } from "@/recoil/userState";
import { SpacingWrapper } from "../Shared/Layout";
import { MainTab, Tab } from "../Shared/Tab";
import Modal from "../Shared/GameModal";

const WaitingTab = ({ isHost, roomId, playerCount }) => {
  const [modalType, setModalType] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userName = useRecoilValue(userNameState);
  const setPlayerList = useSetRecoilState(waitingPlayerListState);
  const [isReady, setIsReady] = useState(false);

  const setRoomId = useSetRecoilState(roomIdState);
  const setIsPlaying = useSetRecoilState(isPlayingRoomState);

  const onStartGame = () => {
    if (playerCount === 1) {
      setIsPlaying(true);
    }

    // 모든 플레이어가 준비 상태인지 확인
    // if (isReady.every((ready) => ready)) {
    //   setIsPlaying(true);
    // } else {
    //   setModalType("alert");
    //   setModalMessage("모든 플레이어가 준비 상태여야 합니다.");
    //   setIsModalOpen(true);
    // }
  };

  const onUpdateRoomConfig = () => {
    setRoomId(roomId);
    setModalType("room");
    setIsModalOpen(true);
  };

  const onReadyToggle = () => {
    setIsReady(!isReady);
    setPlayerList((prevList) => {
      return prevList?.map((player) =>
        // player.id === userName ? { ...player, isReady: !player.isReady } : player
        // 임시
        player.id === 3 ? { ...player, isReady: !player.isReady } : player
      );
    });

    // 준비 상태 변경 PUT api 호출
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
          message={modalMessage}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          roomId={roomId}
        />
      ) : null}
    </>
  );
};

WaitingTab.propTypes = {
  isHost: PropTypes.bool,
  isReady: PropTypes.bool,
  setIsReady: PropTypes.func,
  roomId: PropTypes.number,
  playerCount: PropTypes.number
};

export default WaitingTab;
