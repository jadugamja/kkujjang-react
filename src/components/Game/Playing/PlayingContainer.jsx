import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";

import {
  userNameState,
  playingPlayerListState,
  playingPlayerState
} from "@/recoil/userState";
import { turnCountState } from "@/recoil/gameState";
import { BodyWrapper, UpperWrapper, Wrapper } from "../Shared/Layout";
import TitleBar from "../Shared/TitleBar";
import Chat from "../Shared/Chat";
import WordInput from "./WordInput";
import PlayingPlayerList from "./PlayingPlayerList";
import {
  onGameEnd,
  onRoundEnd,
  onTurnEnd,
  roundStart,
  turnStart
} from "../../../services/socket";
import GameModal from "../Shared/GameModal";

const PlayingContainer = ({ roomInfo, setIsPlaying }) => {
  const userName = useRecoilValue(userNameState);
  const [player, setPlayer] = useRecoilState(playingPlayerState);
  const [playerList, setPlayerList] = useRecoilState(playingPlayerListState);
  const setTurnCount = useSetRecoilState(turnCountState);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const prevRoundScoreRef = useRef();

  useEffect(() => {
    const myTurnPlayer = playerList?.find((player) => player.myTurn === true);

    if (myTurnPlayer && myTurnPlayer.id === userName) {
      roundStart(
        (room) => {
          setTurnCount(room.turnElapsed);
        },
        (error) => {
          setErrorMessage(error);
          setIsModalOpen(true);
        }
      );
    }

    onTurnEnd(() => {});

    onRoundEnd((roundResult) => {
      const { defeatedUserIndex, scoreDelta } = roundResult;
      const defeatedUser = playerList[defeatedUserIndex];
      if (defeatedUser && defeatedUser.id === userName) {
        roundStart(
          (room) => {
            setTurnCount(room.turnElapsed);
          },
          (error) => {
            setErrorMessage(error);
            setIsModalOpen(true);
          }
        );
      }
    });

    onGameEnd((gameResult) => {
      setIsPlaying(false);
    });

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

    // 게임 시작 시 (임시, 소켓 성공 시 삭제)
    players?.map((player, idx) => {
      if (idx === 0) player.myTurn = true;
    });
    setPlayerList(players);
  }, []);

  useEffect(() => {
    setPlayerList((prevList) => prevList.map((p) => (p.id === player.id ? player : p)));

    if (player.myTurn) {
      turnStart(
        (room) => {
          setTurnCount(room.turnElapsed);
        },
        (error) => {
          setErrorMessage(error);
          setIsModalOpen(true);
        }
      );
    }
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
      {isModalOpen && (
        <GameModal type="error" isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          {errorMessage}
        </GameModal>
      )}
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
  roomInfo: PropTypes.object,
  setIsPlaying: PropTypes.func
};

export default PlayingContainer;
