import PropTypes from "prop-types";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import GridBox from "@/styles/GridStyle";
import Player from "../Shared/Player";
import avatarUrl from "@/assets/images/avatar.png";

const PlayingPlayerList = ({ playerList }) => {
  return (
    <GridBox items="8" gap="10px" flow="col" row="between" col="center" margin="5px 10px">
      {playerList?.map((player) => (
        <PlayerWrapper key={player.id} dir="col" col="center" myTurn={player.myTurn}>
          <Balloon myTurn={player.myTurn}>
            <span></span>
          </Balloon>
          <Player
            type="play"
            avatarUrl={avatarUrl}
            nickname={player.nickname}
            level={player.level}
          />
          <ScoreWrapper row="center" col="center">
            <Score>00000</Score>
          </ScoreWrapper>
        </PlayerWrapper>
      ))}
    </GridBox>
  );
};

PlayingPlayerList.propTypes = {
  playerList: PropTypes.array
};

const PlayerWrapper = styled(FlexBox)`
  width: 8.3rem;
  height: 11.5rem;
  padding: 12px 10px;
  background-color: ${({ myTurn }) => (myTurn ? "#DDFFDD" : "#f0f0f0")};
  border: ${({ myTurn }) => myTurn && "2px solid #57F857"};
  border-radius: 7px;
  transform: ${({ myTurn }) => myTurn && "translateY(-15px)"};
`;

const ScoreWrapper = styled(FlexBox)`
  max-width: 100%;
  height: 34px;
  margin-top: 5px;
`;

const Score = styled.span`
  font-family: "PollerOne";
  font-size: 28px;
  letter-spacing: -1px;
`;

const Balloon = styled.div`
  position: absolute;
  top: ${({ myTurn }) => (myTurn ? "-30px" : "calc(41% - 2px)")};
  width: 133px;
  height: 34px;
  background-color: #fff;
  border: 1px solid #a3a3a3;
  border-radius: 9px;
  padding: 3px 5px;

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
