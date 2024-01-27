import styled from "styled-components";
import PropTypes from "prop-types";
import { FlexBox } from "@/styles/FlexStyle";
import Player from "../Shared/Player";
import avatarUrl from "@/assets/images/avatar.png";

const init = {
  id: 3,
  name: "방제목1",
  playerCount: 1,
  maxPlayerCount: 8,
  roundCount: 5,
  roundTime: 60
};

const PlayerList = ({ isHost, isReady, info = init }) => {
  return (
    <WaitingRoomWrapper dir="col">
      <TitleBar row="between">
        <span>{`[${info.id}] ${info.name}`}</span>
        <TitleRightSideWrapper row="between">
          <span>{`참여자 ${info.playerCount}/${info.maxPlayerCount}`}</span>
          <span>{`라운드 ${info.roundCount}`}</span>
          <span>{`${info.roundTime}초`}</span>
        </TitleRightSideWrapper>
      </TitleBar>
      <Players>
        {isHost ? (
          <PlayerWrapper type="host" row="between">
            <Player avatarUrl={avatarUrl} nickname="닉네임#2" level={3} />
            <StatusBox dir="col" row="start">
              <StatusText type="host">방장</StatusText>
            </StatusBox>
          </PlayerWrapper>
        ) : isReady ? (
          <PlayerWrapper type="ready" row="between">
            <Player avatarUrl={avatarUrl} nickname="닉네임#2" level={3} />
            <StatusBox dir="col" row="start">
              <StatusText type="ready">준비</StatusText>
            </StatusBox>
          </PlayerWrapper>
        ) : (
          <PlayerWrapper type="wait" row="between">
            <Player avatarUrl={avatarUrl} nickname="닉네임#2" level={3} />
            <StatusBox dir="col" row="start">
              <StatusText type="wait">대기</StatusText>
            </StatusBox>
          </PlayerWrapper>
        )}
      </Players>
    </WaitingRoomWrapper>
  );
};

PlayerList.propTypes = {
  isHost: PropTypes.bool,
  isReady: PropTypes.bool,
  info: PropTypes.object
};

const WaitingRoomWrapper = styled(FlexBox)`
  height: 100%;
  padding: 3px 5px;
  background-color: #f3f3f3;
`;

const TitleBar = styled(FlexBox).attrs({
  col: "center"
})`
  width: 100%;
  height: 1.5rem;
  padding: 0 7px;
  background-color: rgba(221, 221, 221, 0.5);
  border-radius: 4px;
  box-shadow: 2px 2px 1px #00000025;
  font-size: 14px;
  font-weight: 700;
  opacity: 0.5;

  & > * + * {
    margin-left: 5px;
  }
`;

const TitleRightSideWrapper = styled(FlexBox)`
  flex-basis: 12.5rem;
`;

const Players = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin: 10px 4px 6px;
`;

const PlayerWrapper = styled(FlexBox)`
  height: 11.5rem;
  background-image: ${({ type }) => {
    return type === "host"
      ? "linear-gradient(0deg, rgb(245 218 218), transparent)"
      : type === "ready"
        ? "linear-gradient(0deg, #c4e19a, #efffd75e)"
        : "linear-gradient(0deg, rgb(217 217 217), transparent)";
  }};
  border: 2px solid rgb(107 107 107 / 26%);
  border-radius: 7px;
`;

const StatusBox = styled(FlexBox)`
  margin: 10px 14px;
`;

const StatusText = styled.span`
  font-size: 19px;
  font-weight: 800;
  color: ${({ type }) => {
    return type === "host" ? "#E15030" : type === "ready" ? "#708355" : "inherit";
  }};
`;

export default PlayerList;
