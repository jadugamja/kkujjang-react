import { useState, useEffect, useRef } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { useCookies } from "react-cookie";
import PropTypes from "prop-types";

import {
  userNameState,
  playingPlayerListState,
  playingPlayerState
} from "@/recoil/userState";
import {
  randomWordState,
  initialCharacterState,
  turnCountState,
  isMyTurnState
} from "@/recoil/gameState";
import { BodyWrapper, UpperWrapper, Wrapper } from "../Shared/Layout";
import TitleBar from "../Shared/TitleBar";
import Chat from "../Shared/Chat";
import WordInput from "./WordInput";
import PlayingPlayerList from "./PlayingPlayerList";
import {
  onGameEnd,
  onRoundEnd,
  onTurnEnd,
  onTurnStart,
  roundStart,
  turnStart
} from "../../../services/socket";
import GameModal from "../Shared/GameModal";
import {} from "../../../recoil/gameState";

const PlayingContainer = ({ roomInfo, setIsPlaying }) => {
  const userName = useRecoilValue(userNameState);
  const [player, setPlayer] = useRecoilState(playingPlayerState);
  const [playerList, setPlayerList] = useRecoilState(playingPlayerListState);
  const [randomWord, setRandomWord] = useRecoilState(randomWordState);
  const setInitialCharacter = useSetRecoilState(initialCharacterState);
  const setIsMyTurn = useSetRecoilState(isMyTurnState);
  const setTurnCount = useSetRecoilState(turnCountState);
  const [modalType, setModalType] = useState("error");
  const [modalChildren, setModalChildren] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cookie] = useCookies(["userId"]);

  const prevRoundScoreRef = useRef();

  useEffect(() => {
    const myTurnPlayer = playerList?.find((player) => player.myTurn === true);
    if (myTurnPlayer && myTurnPlayer.id === cookie.userId) {
      roundStart(
        (gameStatus) => {
          if (!randomWord) setRandomWord(gameStatus.randomWord);
          setInitialCharacter(gameStatus.wordStartsWith);
          setIsMyTurn(true);
          turnStart();
        },
        (error) => {
          setModalType("error");
          setModalChildren(error);
          setIsModalOpen(true);
        }
      );
    }

    onTurnStart(
      (gameStatus) => {
        setTurnCount(gameStatus.turnElapsed);
      },
      (error) => {
        setModalType("error");
        setModalChildren(error);
        setIsModalOpen(true);
      }
    );

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
            setModalChildren(error);
            setIsModalOpen(true);
          }
        );
      }
    });

    onGameEnd((ranking) => {
      setModalType("result");
      setModalChildren(ranking);
      setIsModalOpen(true);
    });
  }, []);

  useEffect(() => {
    setPlayerList((prevList) => prevList.map((p) => (p.id === player.id ? player : p)));

    if (player.myTurn) {
      turnStart(
        (room) => {
          setTurnCount(room.turnElapsed);
        },
        (error) => {
          setModalType("error");
          setModalChildren(error);
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
        <GameModal
          type={modalType}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          setIsPlaying={setIsPlaying}
        >
          {modalChildren}
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
