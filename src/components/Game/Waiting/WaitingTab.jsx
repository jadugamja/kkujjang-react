import { useState } from "react";
import { useSetRecoilState } from "recoil";
import PropTypes from "prop-types";
import styled from "styled-components";
import { roomIdState, isPlayingRoomState } from "@/recoil/roomState";
import { FlexBox } from "@/styles/FlexStyle";
import { MainTab } from "@/components/Game/Shared/Tab";
import GameModal from "../Shared/GameModal";

const WaitingTab = ({ isHost, roomId, playerCount }) => {
  const [modalType, setModalType] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  return (
    <>
      <TabWrapper>
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
          <MainTab
            bgColor={isReady ? "#cdeba1" : "#676767"}
            color={!isReady && "#fff"}
            onClick={() => setIsReady(!isReady)}
          >
            {isReady ? "준비" : "대기"}
          </MainTab>
        )}
      </TabWrapper>
      {isModalOpen ? (
        <GameModal
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

const TabWrapper = styled(FlexBox)`
  & > * + * {
    margin-left: 5px;
  }
`;

export default WaitingTab;
