import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { roomInfoState, roomIdState } from "@/recoil/roomState";
import { userInfoState } from "@/recoil/userState";
import FlexBox from "@/styles/FlexStyle";
import Modal from "../Shared/GameModal";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { joinRoom, loadRoom } from "../../../services/socket";

const LobbyRoomItem = ({
  roomInfo: {
    id,
    roomNumber,
    title,
    isSecure,
    maxRound,
    roundTimeLimit,
    currentUserCount,
    maxUserCount,
    state
  }
}) => {
  const setRoomInfo = useSetRecoilState(roomInfoState);
  const setUser = useSetRecoilState(userInfoState);
  const [modalType, setModalType] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const onEnterRoom = (roomId) => {
    if (state === "playing") {
      setModalType("alert");
      setModalMessage("게임이 진행 중인 방입니다.");
      setIsModalOpen(true);
      return;
    }

    if (currentUserCount === maxUserCount) {
      setModalType("alert");
      setModalMessage("방이 찼습니다.");
      setIsModalOpen(true);
      return;
    }

    if (state !== "playing" && isSecure === true) {
      setModalType("password");
      setIsModalOpen(true);
      return;
    }

    joinRoom(
      { roomId, password: "" },
      () => {
        loadRoom((room) => {
          setRoomInfo(room);
          setUser((prev) => ({
            userId: room.userList[room.userList.length - 1].userId,
            ...prev
          }));
          navigate(`/game/${room.roomNumber.toString()}`);
        });
      },
      (error) => {
        setModalType("error");
        setModalMessage(error);
        setIsModalOpen(true);
      }
    );
  };

  return (
    <>
      <RoomItem key={id} isPlaying={state === "playing"} onClick={() => onEnterRoom(id)}>
        <RoomPlayingShadowText isPlaying={state === "playing"}>
          {state === "playing" ? "PLAYING" : "WAITING"}
        </RoomPlayingShadowText>
        <RoomItemInfoWrapper row="between">
          <LeftInfoWrapper row="center" col="center">
            <RoomNumber>{roomNumber}</RoomNumber>
          </LeftInfoWrapper>
          <CenterInfoWrapper dir="col" row="center">
            <RoomName>{title}</RoomName>
            <CenterBottomInfoWrapper>
              <RoomSubText>{`라운드 ${maxRound}`}</RoomSubText>
              <RoomSubText>{`${roundTimeLimit / 1000}초`}</RoomSubText>
            </CenterBottomInfoWrapper>
          </CenterInfoWrapper>
          <RightInfoWrapper dir="col" row="evenly" col="center">
            <PlayerCount>{`${currentUserCount}/${maxUserCount}`}</PlayerCount>
            <FlexBox row="center" col="center">
              <LockIcon icon={isSecure === true ? faLock : faLockOpen} />
            </FlexBox>
          </RightInfoWrapper>
        </RoomItemInfoWrapper>
      </RoomItem>
      {isModalOpen ? (
        <Modal
          type={modalType}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          roomId={id}
        >
          {modalMessage}
        </Modal>
      ) : null}
    </>
  );
};

LobbyRoomItem.propTypes = {
  roomInfo: PropTypes.shape({
    id: PropTypes.string,
    roomNumber: PropTypes.number,
    title: PropTypes.string,
    isSecure: PropTypes.bool,
    maxRound: PropTypes.number,
    roundTimeLimit: PropTypes.number,
    currentUserCount: PropTypes.number,
    maxUserCount: PropTypes.number,
    state: PropTypes.oneOf(["preparing", "playing"]).isRequired
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
  width: 5rem;
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
