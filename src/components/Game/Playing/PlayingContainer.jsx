import { useEffect } from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";

import { playingPlayerListState } from "@/recoil/userState";
import { BodyWrapper, UpperWrapper, Wrapper } from "../Shared/Layout";
import TitleBar from "../Shared/TitleBar";
import Chat from "../Shared/Chat";
import WordInput from "./WordInput";
import PlayingPlayerList from "./PlayingPlayerList";

const PlayingContainer = ({ roomInfo }) => {
  const [playerList, setPlayerList] = useRecoilState(playingPlayerListState);

  useEffect(() => {
    // 임시 플레이어 배열
    const players = [
      {
        id: 1,
        nickname: "닉네임#1",
        level: 3,
        myTurn: false,
        score: 0,
        isDefeated: false
      },
      {
        id: 2,
        nickname: "닉네임#2",
        level: 2,
        myTurn: false,
        score: 0,
        isDefeated: false
      },
      {
        id: 3,
        nickname: "닉네임#3",
        level: 1,
        myTurn: false,
        score: 0,
        isDefeated: false
      },
      {
        id: 4,
        nickname: "닉네임#4",
        level: 2,
        myTurn: false,
        score: 0,
        isDefeated: false
      },
      {
        id: 5,
        nickname: "닉네임#5",
        level: 3,
        myTurn: false,
        score: 0,
        isDefeated: false
      }
    ];

    players?.map((player, idx) => {
      if (idx === 0) player.myTurn = true;
    });
    setPlayerList(players);
  }, []);

  const updateTurn = () => {
    const currPlayerIndex = playerList.findIndex((player) => player.myTurn);
    const nextPlayerIndex = (currPlayerIndex + 1) % playerList.length;

    const changedTurnPlayerList = playerList?.map((player, idx) => {
      if (idx === currPlayerIndex) {
        return { ...player, myTurn: false };
      }
      if (idx === nextPlayerIndex) {
        return { ...player, myTurn: true };
      }
      return player;
    });

    setPlayerList(changedTurnPlayerList);
  };

  return (
    <BodyWrapper dir="col">
      <UpperWrapper dir="col" type="play">
        <TitleBar type="room" info={roomInfo} />
        <WordInput roundCount={roomInfo.roundCount} roundTime={roomInfo.roundTime} />
        <PlayingPlayerList playerList={playerList} />
      </UpperWrapper>
      <Wrapper>
        <Chat size="big" />
      </Wrapper>
    </BodyWrapper>
  );
};

PlayingContainer.propTypes = {
  roomInfo: PropTypes.object
};

export default PlayingContainer;
