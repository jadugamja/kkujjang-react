import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { roomIdState } from "@/recoil/roomState";
import { isHostUserState } from "@/recoil/userState";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FlexBox } from "@/styles/FlexStyle";
import Modal from "./GameModal";

// ========= Side 탭 =========
export const SideTab = () => (
  <Tab row="center" col="center" bgColor="#f3f3f3">
    <TabIcon icon={faTrophy} />
    <TabSpan>랭킹</TabSpan>
  </Tab>
);

// ========= Main 탭 =========
export const MainTab = ({ children, bgColor, color, onClick }) => (
  <Tab row="center" col="center" bgColor={bgColor} color={color} onClick={onClick}>
    <TabSpan>{children}</TabSpan>
  </Tab>
);

MainTab.propTypes = {
  children: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
};

// ========= 방 만들기 버튼 =========
export const CreateRoomButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Tab
        as="button"
        row="center"
        col="center"
        bgColor="#B0D3F3"
        onClick={() => setIsModalOpen(true)}
      >
        <TabSpan>방 만들기</TabSpan>
      </Tab>
      {isModalOpen ? (
        <Modal type="room" isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      ) : null}
    </>
  );
};

// ========= 바로 입장 버튼 =========
export const EnterRoomButton = ({ rooms }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const setRoomId = useSetRecoilState(roomIdState);
  const setIsHost = useSetRecoilState(isHostUserState);

  const navigate = useNavigate();

  const onTryEnterRoom = () => {
    const availableRooms = rooms?.filter(
      (room) =>
        !room.isPlaying && room.password === "" && room.playerCount < room.maxPlayerCount
    );

    if (availableRooms.length === 0) {
      setIsModalOpen(true);
    } else {
      const pickedRoom =
        availableRooms[Math.floor(Math.random() * availableRooms.length)];

      setRoomId(pickedRoom.id);
      setIsHost(false);
      navigate(`/game/${pickedRoom.id}`);
    }
  };

  return (
    <>
      <Tab
        as="button"
        row="center"
        col="center"
        bgColor="#E6EEB4"
        onClick={onTryEnterRoom}
      >
        <TabSpan>바로 입장</TabSpan>
      </Tab>
      {isModalOpen ? (
        <Modal
          type="alert"
          message="입장 가능한 방이 없습니다."
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      ) : null}
    </>
  );
};

EnterRoomButton.propTypes = {
  rooms: PropTypes.array
};

const Tab = styled(FlexBox)`
  position: relative;
  top: ${({ bgColor }) =>
    bgColor === "#779DC5" || bgColor === "#f3f3f3" || bgColor === "#889E7D"
      ? "1px"
      : "0"};
  z-index: 9;
  width: 8.75rem;
  height: 3rem;
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid
    ${({ bgColor }) =>
      bgColor === "#779DC5" ? "#7D7D7D" : bgColor === "#f3f3f3" ? "#ccc" : "transparent"};
  color: ${({ color }) => color || "initial"};
  border-bottom: 0;
  border-radius: 12px 12px 0 0;
  flex-shrink: 0;

  & > * + * {
    margin-left: 7px;
  }

  &:hover {
    cursor: ${({ onClick }) => onClick && "pointer"};
    opacity: ${({ onClick }) => onClick && "0.8"};
  }
`;

const TabIcon = styled(FontAwesomeIcon)`
  font-size: ${({ fontSize }) => fontSize || "18px"};
`;

const TabSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;
`;
