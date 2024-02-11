import PropTypes from "prop-types";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import GridBox from "@/styles/GridStyle";
import Player from "../Shared/Player";
import avatarUrl from "@/assets/images/avatar.png";
import { TotalScore, TurnScore } from "../Shared/Score";

const PlayingPlayerList = ({ playerList }) => {
  return (
    <GridBox items="8" gap="10px" flow="col" row="between" col="center" margin="5px 10px">
      {playerList?.map((player) => (
        <PlayerWrapper key={player.id} dir="col" col="center" myTurn={player.myTurn}>
          <Player
            type="play"
            avatarUrl={avatarUrl}
            nickname={player.nickname}
            level={player.level}
          />
          <TurnScore />
          <TotalScore>00000</TotalScore>
        </PlayerWrapper>
      ))}
    </GridBox>
  );
};

PlayingPlayerList.propTypes = {
  playerList: PropTypes.array
};

const PlayerWrapper = styled(FlexBox)`
  position: relative;
  width: 8.3rem;
  height: 12rem;
  padding: 12px 10px;
  background-color: ${({ myTurn }) => (myTurn ? "#DDFFDD" : "#f0f0f0")};
  border: ${({ myTurn }) => myTurn && "2px solid #57F857"};
  border-radius: 7px;
  transform: ${({ myTurn }) => myTurn && "translateY(-15px)"};
`;

const Balloon = styled.div`
  position: absolute;
  top: -29px;
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
