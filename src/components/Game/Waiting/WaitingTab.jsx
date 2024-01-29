import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import { MainTab } from "@/components/Game/Shared/Tab";
import GameModal from "../Shared/GameModal";

const WaitingTab = ({ isHost, isReady, setIsReady, roomInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <TabWrapper>
        <MainTab bgColor="#f3f3f3">대기실</MainTab>
        {isHost ? (
          <>
            <MainTab bgColor="#cdeba1">시작</MainTab>
            <MainTab bgColor="#FFC67F" onClick={() => setIsModalOpen(true)}>
              방 설정
            </MainTab>
          </>
        ) : isReady ? (
          <MainTab bgColor="#676767" color="#fff" onClick={() => setIsReady(!isReady)}>
            대기
          </MainTab>
        ) : (
          <MainTab bgColor="#cdeba1" onClick={() => setIsReady(!isReady)}>
            준비
          </MainTab>
        )}
      </TabWrapper>
      {isModalOpen ? (
        <GameModal
          type="room"
          roomInfo={roomInfo}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      ) : null}
    </>
  );
};

WaitingTab.propTypes = {
  isHost: PropTypes.bool,
  isReady: PropTypes.bool,
  setIsReady: PropTypes.func,
  roomInfo: PropTypes.object
};

const TabWrapper = styled(FlexBox)`
  & > * + * {
    margin-left: 5px;
  }
`;

export default WaitingTab;
