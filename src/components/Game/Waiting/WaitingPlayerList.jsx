import { useState } from "react";
import { useRecoilValue } from "recoil";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { waitingPlayerListState } from "@/recoil/userState";
import { FlexBox } from "@/styles/FlexStyle";
import GridBox from "@/styles/GridStyle";
import Player from "../Shared/Player";
import Modal from "../Shared/GameModal";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const WaitingPlayerList = () => {
  const [cookies] = useCookies(["userId"]);
  const playerList = useRecoilValue(waitingPlayerListState);
  const [userId, setUserId] = useState(null);
  const [modalType, setModalType] = useState("profile");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onPlayerClick = (userId) => {
    setModalType("profile");
    setUserId(userId);
    setIsModalOpen(true);
  };

  return (
    <GridBox items="4" gap="10px" margin="10px 4px 6px">
      {playerList?.map((player) => (
        <PlayerWrapper
          key={player.userId}
          type={player.isHost ? "host" : player.isReady ? "ready" : "wait"}
          row="between"
          onClick={() => onPlayerClick(player.userId)}
        >
          {cookies && cookies.userId === player.userId && (
            <StatusBox
              position="absolute"
              margin="8px 5px"
              padding="4px"
              border="1px solid #522"
              borderRadius="50%"
            >
              <FontAwesomeIcon
                icon={faStar}
                style={{ fontSize: "12px", color: "#522" }}
              />
            </StatusBox>
          )}
          <Player
            avatarAccessoryIndex={player.avatarAccessoryIndex}
            nickname={player.nickname}
            level={player.level}
          />
          <StatusBox dir="col" row="start">
            <StatusText type={player.isHost ? "host" : player.isReady ? "ready" : "wait"}>
              {player.isHost ? "방장" : player.isReady ? "준비" : "대기"}
            </StatusText>
          </StatusBox>
        </PlayerWrapper>
      ))}
      {isModalOpen && (
        <Modal
          type={modalType}
          setType={setModalType}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          userId={userId}
        />
      )}
    </GridBox>
  );
};

const PlayerWrapper = styled(FlexBox)`
  height: 11.5rem;
  background-image: ${({ type }) => {
    return type === "host"
      ? "linear-gradient(0deg, #fbdb94, transparent)"
      : type === "ready"
        ? "linear-gradient(0deg, rgb(157 171 136), rgba(239, 255, 215, 0.37))"
        : "linear-gradient(0deg, rgb(217 217 217), transparent)";
  }};
  border: 2px solid rgb(107 107 107 / 26%);
  border-radius: 7px;

  &:hover {
    cursor: pointer;
  }
`;

const StatusBox = styled(FlexBox)`
  position: ${({ position }) => position};
  margin: ${({ margin }) => margin || "10px 14px"};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
`;

const StatusText = styled.span`
  font-size: 19px;
  font-weight: 800;
  color: ${({ type }) => {
    return type === "host" ? "#E15030" : type === "ready" ? "#708355" : "inherit";
  }};
`;

export default WaitingPlayerList;
