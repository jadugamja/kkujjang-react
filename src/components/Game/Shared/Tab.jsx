import React, { useState, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FlexBox } from "@/styles/FlexStyle";
import Modal from "./GameModal";
import { roomInfoState } from "@/recoil/roomState";
import { userInfoState } from "@/recoil/userState";
import { joinRoom, loadRoom, onUserJoinRoom } from "../../../services/socket";

const TAB_TYPES = {
  CREATE: "create",
  ENTER: "enter",
  LIST: "list",
  RANKING: "ranking",
  PLAYING: "playing",
  READY: "ready",
  WAIT: "wait"
};

const TAB_BG_COLORS = {
  [TAB_TYPES.CREATE]: "#B0D3F3",
  [TAB_TYPES.ENTER]: "#E6EEB4",
  [TAB_TYPES.LIST]: "#779DC5",
  [TAB_TYPES.RANKING]: "#f3f3f3",
  [TAB_TYPES.PLAYING]: "#889E7D",
  [TAB_TYPES.WAIT]: "#cdeba1",
  [TAB_TYPES.READY]: "#676767"
};

const TAB_TEXT_COLORS = {
  [TAB_TYPES.READY]: "#fff"
};

const TAB_TEXTS = {
  [TAB_TYPES.CREATE]: { type: "room", message: "" },
  [TAB_TYPES.ENTER]: {
    type: "alert",
    message: "입장 가능한 방이 없습니다.",
    height: "14.5rem"
  }
};

const StyledTab = styled(FlexBox)`
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
    cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
    transform: ${({ onClick }) => onClick && "translateY(-2px)"};
  }
`;

const TabIcon = styled(FontAwesomeIcon)`
  font-size: ${({ fontSize }) => fontSize || "18px"};
`;

const TabSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;
`;

// ========= Main 탭 =========
export const MainTab = ({ children, bgColor, color, onClick }) => (
  <StyledTab row="center" col="center" bgColor={bgColor} color={color} onClick={onClick}>
    <TabSpan>{children}</TabSpan>
  </StyledTab>
);

MainTab.propTypes = {
  children: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
};

export const Tab = ({ children, type, rooms, onClick }) => {
  const setRoomInfo = useSetRecoilState(roomInfoState);
  const setUser = useSetRecoilState(userInfoState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setCookie] = useCookies(["userId"]);
  const navigate = useNavigate();

  const onCreateRoom = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const onTryEnterRoom = useCallback(() => {
    const availableRooms = rooms?.filter(
      (room) =>
        room.state !== "playing" &&
        room.isSecure === false &&
        room.currentUserCount < room.maxUserCount
    );

    if (availableRooms.length === 0) {
      setIsModalOpen(true);
    } else {
      const pickedRoom =
        availableRooms[Math.floor(Math.random() * availableRooms.length)];

      joinRoom(
        { roomId: pickedRoom.id, password: "" },
        () => {
          loadRoom((room) => {
            setRoomInfo(room);
            setCookie("userId", room.userList[room.userList.length - 1].userId, {
              path: "/"
            });
            setUser((prev) => ({
              userId: room.userList[room.userList.length - 1].userId,
              ...prev
            }));
            navigate(`/game/${room.roomNumber.toString()}`);
          });
        },
        (error) => {
          // setModalType("error");
          // setModalMessage(error);
        }
      );

      onUserJoinRoom((userId) => {
        // 방에 참가한 사용자의 userId를 배열에 추가
        debugger;
        console.log(userId);
      });
      // setRoomId(pickedRoom.id);
    }
  }, [rooms]);

  const getOnClick = {
    [TAB_TYPES.CREATE]: onCreateRoom,
    [TAB_TYPES.ENTER]: onTryEnterRoom
  };

  return (
    <>
      <StyledTab
        as="button"
        row="center"
        col="center"
        type={type}
        bgColor={TAB_BG_COLORS[type]}
        color={TAB_TEXT_COLORS[type]}
        onClick={getOnClick[type] || onClick}
        hasOnClick={!!getOnClick[type] || onClick}
      >
        {type === "ranking" && <TabIcon icon={faTrophy} />}
        <TabSpan>{children}</TabSpan>
      </StyledTab>
      {isModalOpen ? (
        <Modal
          type={TAB_TEXTS[type].type}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          height={TAB_TEXTS[type]?.height}
        >
          {TAB_TEXTS[type].message}
        </Modal>
      ) : null}
    </>
  );
};

Tab.propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(Object.values(TAB_TYPES)),
  rooms: PropTypes.array,
  onClick: PropTypes.func,
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func
};
