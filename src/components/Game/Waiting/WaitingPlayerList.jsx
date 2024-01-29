import PropTypes from "prop-types";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import Player from "../Shared/Player";
import avatarUrl from "@/assets/images/avatar.png";

const WaitingPlayerList = ({ isHost, isReady, info }) => {
  return (
    <PlayerBox>
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
    </PlayerBox>
  );
};

WaitingPlayerList.propTypes = {
  isHost: PropTypes.bool,
  isReady: PropTypes.bool,
  info: PropTypes.object
};

const PlayerBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin: 10px 4px 6px;
`;

const PlayerWrapper = styled(FlexBox)`
  height: 11.5rem;
  background-image: ${({ type }) => {
    return type === "host"
      ? "linear-gradient(0deg, #fbdb94, transparent)"
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

export default WaitingPlayerList;
