import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import PropTypes from "prop-types";
import styled from "styled-components";

import { waitingPlayerListState } from "@/recoil/userState";
import { FlexBox } from "@/styles/FlexStyle";
import GridBox from "@/styles/GridStyle";
import Player from "../Shared/Player";
import avatarUrl from "@/assets/images/avatar.png";

const WaitingPlayerList = () => {
  const playerList = useRecoilValue(waitingPlayerListState);

  return (
    <GridBox items="4" gap="10px" margin="10px 4px 6px">
      {playerList?.map((player) => (
        <PlayerWrapper
          key={player.id}
          type={player.isHost ? "host" : player.isReady ? "ready" : "wait"}
          row="between"
        >
          <Player avatarUrl={avatarUrl} nickname={player.nickname} level={player.level} />
          <StatusBox dir="col" row="start">
            <StatusText type={player.isHost ? "host" : player.isReady ? "ready" : "wait"}>
              {player.isHost ? "방장" : player.isReady ? "준비" : "대기"}
            </StatusText>
          </StatusBox>
        </PlayerWrapper>
      ))}
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
