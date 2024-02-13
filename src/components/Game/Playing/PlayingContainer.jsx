import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useRecoilState, useSetRecoilState } from "recoil";

import { playingPlayerListState, playingPlayerState } from "@/recoil/userState";
import { BodyWrapper, UpperWrapper, Wrapper } from "../Shared/Layout";
import TitleBar from "../Shared/TitleBar";
import Chat from "../Shared/Chat";
import WordInput from "./WordInput";
import PlayingPlayerList from "./PlayingPlayerList";

const PlayingContainer = ({ roomInfo }) => {
  const [player, setPlayer] = useRecoilState(playingPlayerState);
  const [playerList, setPlayerList] = useRecoilState(playingPlayerListState);
  const prevRoundScoreRef = useRef();

  useEffect(() => {
    // 임시 플레이어 배열
    const players = [
      {
        id: 1,
        nickname: "닉네임#1",
        level: 3,
        myTurn: false,
        roundScore: [],
        totalScore: 0,
        isDefeated: false
      },
      {
        id: 2,
        nickname: "닉네임#2",
        level: 2,
        myTurn: false,
        roundScore: [],
        totalScore: 0,
        isDefeated: false
      },
      {
        id: 3,
        nickname: "닉네임#3",
        level: 1,
        myTurn: false,
        roundScore: [],
        totalScore: 0,
        isDefeated: false
      },
      {
        id: 4,
        nickname: "닉네임#4",
        level: 2,
        myTurn: false,
        roundScore: [],
        totalScore: 0,
        isDefeated: false
      },
      {
        id: 5,
        nickname: "닉네임#5",
        level: 3,
        myTurn: false,
        roundScore: [],
        totalScore: 0,
        isDefeated: false
      }
    ];

    // 게임 시작 시
    players?.map((player, idx) => {
      if (idx === 0) player.myTurn = true;
    });
    setPlayerList(players);
  }, []);

  useEffect(() => {
    debugger;
    setPlayerList((prevList) => prevList.map((p) => (p.id === player.id ? player : p)));
  }, [player]);

  useEffect(() => {
    if (!prevRoundScoreRef.current) {
      prevRoundScoreRef.current = playerList.map((player) => player.roundScore);
    } else {
      const isScored = playerList.some(
        (player, idx) => player.roundScore > prevRoundScoreRef.current[idx]
      );

      if (isScored) updateNextTurn();

      prevRoundScoreRef.current = playerList.map((player) => player.roundScore);
    }
  }, [playerList]);

  const updateNextTurn = () => {
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

    setPlayer(changedTurnPlayerList[nextPlayerIndex]);
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
