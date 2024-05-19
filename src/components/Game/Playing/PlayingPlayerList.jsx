import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useCookies } from "react-cookie";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FlexBox } from "@/styles/FlexStyle";
import GridBox from "@/styles/GridStyle";
import { Container as Me } from "@/styles/StyledComponents";
import Player from "../Shared/Player";
import { TotalScore, TurnScore } from "../Shared/Score";
import { playingPlayerListState } from "@/recoil/userState";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const PlayingPlayerList = ({ defeatedPlayerIndex }) => {
  const [cookies] = useCookies(["userId"]);
  const playerList = useRecoilValue(playingPlayerListState);
  const balloonMessage = useRecoilValue(balloonMessageState);
  const [isDefeated, setIsDefeated] = useState(false);
  const [isBalloonShown, setIsBalloonShown] = useState(false);

  useEffect(() => {
    if (defeatedPlayerIndex !== null) {
      const defeatedPlayers = playerList.map(
        (player, idx) => idx === defeatedPlayerIndex
      );
      setIsDefeated(defeatedPlayers);

      const timer = setTimeout(() => {
        setIsDefeated(defeatedPlayers.fill(false));
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [defeatedPlayerIndex]);

  useEffect(() => {
    if (balloonMessage !== null) {
      setIsBalloonShown(true);
      const timer = setTimeout(() => {
        setIsBalloonShown(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [balloonMessage]);

  return (
    <GridBox items="8" gap="10px" flow="col" row="between" col="center" margin="5px 10px">
      {playerList?.map((player, idx) => (
        <PlayerWrapper
          key={player.id}
          dir="col"
          col="center"
          myTurn={player.myTurn}
          defeated={isDefeated[idx]}
        >
          {isBalloonShown && balloonMessage.userId === player.id && (
            <StyledBalloon>
              <span>{balloonMessage.message}</span>
            </StyledBalloon>
          )}
          {cookies && cookies.userId === player.id && (
            <Me
              $position="absolute"
              $left="8px"
              $display="flex"
              $row="center"
              $col="center"
              $margin="1px 0"
              $padding="5px"
              $border="1px solid #522"
              $borderRadius="50%"
            >
              <FontAwesomeIcon
                icon={faStar}
                style={{ fontSize: "12px", color: "#522" }}
              />
            </Me>
          )}
          <Player
            type="play"
            avatarAccessoryIndex={player.avatarAccessoryIndex}
            nickname={player.nickname}
            level={player.level}
          />
          {player.myTurn && <TurnScore />}
          <TotalScore>{String(player?.score).padStart(5, "0")}</TotalScore>
        </PlayerWrapper>
      ))}
    </GridBox>
  );
};

PlayingPlayerList.propTypes = {
  defeatedPlayerIndex: PropTypes.number
};

const PlayerWrapper = styled(FlexBox)`
  position: relative;
  width: 8.3rem;
  height: 12rem;
  padding: 6px 10px;
  background-color: ${({ myTurn, defeated }) =>
    defeated ? "#f0f0f0" : myTurn ? "#DDFFDD" : "#f0f0f0"};
  border: ${({ myTurn, defeated }) =>
    defeated ? "3px solid #FF6C6C" : myTurn && "2px solid #57F857"};
  border-radius: 7px;
  transform: ${({ myTurn }) => myTurn && "translateY(-15px)"};
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const StyledBalloon = styled.div`
  position: absolute;
  top: -29px;
  width: 133px;
  height: 34px;
  background-color: #fff;
  border: 1px solid #a3a3a3;
  border-radius: 9px;
  padding: 3px 5px;
  animation: ${fadeOut} 3s linear;

  &::before,
  &::after {
    position: absolute;
    content: "";
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }

  &::before {
    top: 32px;
    left: 42%;
    border-top: 11px solid #a3a3a3;
  }

  &::after {
    top: 31px;
    left: 42%;
    border-top: 10px solid #fff;
  }
`;

export default PlayingPlayerList;
