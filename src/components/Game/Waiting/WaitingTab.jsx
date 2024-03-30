import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import PropTypes from "prop-types";

import { gameStart, switchReadyState } from "@/services/socket";
import { roomIdState } from "@/recoil/roomState";
import { waitingPlayerListState } from "@/recoil/userState";
import { userNameState } from "@/recoil/userState";
import { SpacingWrapper } from "../Shared/Layout";
import { MainTab, Tab } from "../Shared/Tab";
import Modal from "../Shared/GameModal";

const WaitingTab = ({ isHost, roomId, setIsPlaying }) => {
  const [modalType, setModalType] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const userName = useRecoilValue(userNameState);
  const setRoomId = useSetRecoilState(roomIdState);
  const [waitingPlayerList, setWaitingPlayerList] =
    useRecoilState(waitingPlayerListState);

  const onStartGame = () => {
    if (waitingPlayerList.length < 2) {
      setModalType("alert");
      setModalMessage("2명 이상의 플레이어가 필요합니다.");
      setIsModalOpen(true);
    } else {
      gameStart();
    }
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
          height={modalType === "alert" && "14rem"}
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
  roomId: PropTypes.string,
  setIsPlaying: PropTypes.func
};

export default WaitingTab;
