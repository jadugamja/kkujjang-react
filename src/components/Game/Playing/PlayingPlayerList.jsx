import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import Player from "../Shared/Player";
import avatarUrl from "@/assets/images/avatar.png";

const PlayingPlayerList = () => {
  // 임시 플레이어 배열
  const players = [
    { id: 1, isHost: true, isReady: true, nickname: "닉네임#1", level: 3 },
    { id: 2, isHost: false, isReady: true, nickname: "닉네임#2", level: 2 },
    { id: 3, isHost: false, isReady: false, nickname: "닉네임#3", level: 1 },
    { id: 4, isHost: false, isReady: false, nickname: "닉네임#4", level: 2 },
    { id: 5, isHost: false, isReady: true, nickname: "닉네임#5", level: 3 }
  ];

  return (
    <PlayerBox row="between" col="center">
      {players?.map((player) => (
        <PlayerWrapper key={player.id} dir="col" col="center">
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
    </PlayerBox>
  );
};

const PlayerBox = styled(FlexBox)`
  margin: 5px 10px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  grid-auto-flow: column;
`;

const PlayerWrapper = styled(FlexBox)`
  width: 8.3rem;
  height: 11.5rem;
  padding: 12px 10px;
  background-color: #f0f0f0;
  border-radius: 7px;
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

export default PlayingPlayerList;
