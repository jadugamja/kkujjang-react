import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FlexBox from "@/styles/FlexStyle";
import Modal from "../Shared/GameModal";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

const LobbyRoomItem = ({
  roomInfo: {
    id,
    title,
    password,
    roundCount,
    roundTime,
    playerCount,
    maxPlayerCount,
    isPlaying
  }
}) => {
  const [modalType, setModalType] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const onEnterRoom = (roomId) => {
    if (isPlaying) {
      setModalType("alert");
      setModalMessage("게임이 진행 중인 방입니다.");
      setIsModalOpen(true);
      return;
    }

    if (playerCount === maxPlayerCount) {
      setModalType("alert");
      setModalMessage("방이 찼습니다.");
      setIsModalOpen(true);
      return;
    }

    if (!isPlaying && password !== "") {
      setModalType("password");
      setIsModalOpen(true);
      return;
    }

    navigate(`/game/${roomId}`);
  };

  return (
    <>
      <RoomItem key={id} isPlaying={isPlaying} onClick={() => onEnterRoom(id)}>
        <RoomPlayingShadowText isPlaying={isPlaying}>
          {isPlaying ? "PLAYING" : "WAITING"}
        </RoomPlayingShadowText>
        <RoomItemInfoWrapper row="between">
          <LeftInfoWrapper row="center" col="center">
            <RoomNumber>{id}</RoomNumber>
          </LeftInfoWrapper>
          <CenterInfoWrapper dir="col" row="center">
            <RoomName>{title}</RoomName>
            <CenterBottomInfoWrapper>
              <RoomSubText>{`라운드 ${roundCount}`}</RoomSubText>
              <RoomSubText>{`${roundTime}초`}</RoomSubText>
            </CenterBottomInfoWrapper>
          </CenterInfoWrapper>
          <RightInfoWrapper dir="col" row="evenly" col="center">
            <PlayerCount>{`${playerCount}/${maxPlayerCount}`}</PlayerCount>
            <FlexBox row="center" col="center">
              <LockIcon icon={password !== "" ? faLock : faLockOpen} />
            </FlexBox>
          </RightInfoWrapper>
        </RoomItemInfoWrapper>
      </RoomItem>
      {isModalOpen ? (
        <Modal
          type={modalType}
          message={modalMessage}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          roomId={id}
        />
      ) : null}
    </>
  );
};

LobbyRoomItem.propTypes = {
  roomInfo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    password: PropTypes.string,
    roundCount: PropTypes.number,
    roundTime: PropTypes.number,
    playerCount: PropTypes.number,
    maxPlayerCount: PropTypes.number,
    isPlaying: PropTypes.bool
  }).isRequired
};

const RoomItem = styled.div`
  width: calc(50% - 1rem);
  height: 7rem;
  background-color: ${({ isPlaying }) => (isPlaying ? "#737373" : "#EBEBEB")};
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  margin: 8px 4px;
  padding: 15px 18px 15px 10px;

  &:hover {
    cursor: pointer;
  }
`;

const RoomPlayingShadowText = styled.span`
  position: absolute;
  margin-top: ${({ isPlaying }) => (isPlaying ? "8px" : "9.5px")};
  transform: rotate(338deg);
  font-family: "DNFBitBitv2";
  font-size: 41px;
  font-weight: 900;
  z-index: 1;
  opacity: ${({ isPlaying }) => (isPlaying ? "0.15" : "0.1")};
`;

const RoomItemInfoWrapper = styled(FlexBox)`
  height: 100%;
`;

const LeftInfoWrapper = styled(FlexBox)`
  width: 4rem;
`;

const CenterInfoWrapper = styled(FlexBox)`
  flex-grow: 1;

  & > * + * {
    margin-top: 8px;
  }
`;

const CenterBottomInfoWrapper = styled(FlexBox)`
  & > * + * {
    margin-left: 15px;
  }
`;

const RightInfoWrapper = styled(FlexBox)`
  width: 4.2rem;
`;

const RoomNumber = styled.span`
  font-family: "AlfaSlabOne";
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 800;
  padding-bottom: 4px;
`;

const RoomName = styled.span`
  font-family: "Hanna";
  font-size: 23px;
  font-weight: 500;
`;

const RoomSubText = styled.span`
  font-family: "Hanna";
  font-size: 18px;
  font-weight: 400;
`;

const PlayerCount = styled.span`
  font-family: "ZenDots";
  font-size: 27px;
  font-weight: 600;
`;

const LockIcon = styled(FontAwesomeIcon)`
  font-size: 28px;
`;

export default LobbyRoomItem;
