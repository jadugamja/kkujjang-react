import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import Player from "../Shared/Player";
import avatarUrl from "@/assets/images/avatar.png";

const PlayingPlayerList = () => (
  <PlayerBox row="between" col="center">
    <PlayerWrapper dir="col" col="center">
      <Player type="play" avatarUrl={avatarUrl} nickname="닉네임#2" level={3} />
      <ScoreWrapper row="center" col="center">
        <Score>00000</Score>
      </ScoreWrapper>
    </PlayerWrapper>
    <PlayerWrapper dir="col" col="center">
      <Player type="play" avatarUrl={avatarUrl} nickname="닉네임#2" level={3} />
      <ScoreWrapper row="center" col="center">
        <Score>00000</Score>
      </ScoreWrapper>
    </PlayerWrapper>
    <PlayerWrapper dir="col" col="center">
      <Player type="play" avatarUrl={avatarUrl} nickname="닉네임#2" level={3} />
      <ScoreWrapper row="center" col="center">
        <Score>00000</Score>
      </ScoreWrapper>
    </PlayerWrapper>
    <PlayerWrapper dir="col" col="center">
      <Player type="play" avatarUrl={avatarUrl} nickname="닉네임#2" level={3} />
      <ScoreWrapper row="center" col="center">
        <Score>00000</Score>
      </ScoreWrapper>
    </PlayerWrapper>
    <PlayerWrapper dir="col" col="center">
      <Player type="play" avatarUrl={avatarUrl} nickname="닉네임#2" level={3} />
      <ScoreWrapper row="center" col="center">
        <Score>00000</Score>
      </ScoreWrapper>
    </PlayerWrapper>
    <PlayerWrapper dir="col" col="center">
      <Player type="play" avatarUrl={avatarUrl} nickname="닉네임#2" level={3} />
      <ScoreWrapper row="center" col="center">
        <Score>00000</Score>
      </ScoreWrapper>
    </PlayerWrapper>
  </PlayerBox>
);

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
