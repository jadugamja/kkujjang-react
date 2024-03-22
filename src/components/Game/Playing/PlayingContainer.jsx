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
  isMyTurnState,
  currentRoundState,
  isWordFailState,
  currentPointsState
} from "@/recoil/gameState";
import {
  onGameEnd,
  onRoundEnd,
  onTurnEnd,
  onTurnStart,
  roundStart,
  turnStart,
  receiveSayWordFail,
  receiveSayWordSucceed
} from "@/services/socket";
import { BodyWrapper, UpperWrapper, Wrapper } from "../Shared/Layout";
import TitleBar from "../Shared/TitleBar";
import Chat from "../Shared/Chat";
import WordInput from "./WordInput";
import PlayingPlayerList from "./PlayingPlayerList";
import GameModal from "../Shared/GameModal";

const PlayingContainer = ({ roomInfo, setIsPlaying }) => {
  const userName = useRecoilValue(userNameState);
  const [player, setPlayer] = useRecoilState(playingPlayerState);
  const [playerList, setPlayerList] = useRecoilState(playingPlayerListState);
  const [randomWord, setRandomWord] = useRecoilState(randomWordState);
  const [initialCharacter, setInitialCharacter] = useRecoilState(initialCharacterState);
  const setIsMyTurn = useSetRecoilState(isMyTurnState);
  const setCurrRound = useSetRecoilState(currentRoundState);
  const setTurnCount = useSetRecoilState(turnCountState);
  const setIsWordFail = useSetRecoilState(isWordFailState);
  const setCurrPoints = useSetRecoilState(currentPointsState);

  const [isRoundEnd, setIsRoundEnd] = useState(false);
  const [timeoutIds, setTimeoutIds] = useState([]);
  const [modalType, setModalType] = useState("error");
  const [modalChildren, setModalChildren] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cookie] = useCookies(["userId"]);

  const prevRoundScoreRef = useRef();

  useEffect(() => {
    if (roomInfo?.roomOwnerUserId === cookie.userId) {
      roundStart(
        (gameStatus) => {
          if (!randomWord) setRandomWord(gameStatus.roundWord);
          setInitialCharacter(gameStatus.wordStartsWith);
          setCurrRound(gameStatus.currentRound);
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

    // 끝말잇기 실패
    receiveSayWordFail((word) => {
      const prevInitialCharacter = initialCharacter;
      setIsWordFail(true);
      setInitialCharacter(word);

      const id = setTimeout(() => {
        setInitialCharacter(prevInitialCharacter);
        setIsWordFail(false);
      }, 1000);

      setTimeoutIds([id]);
    });

    // 끝말잇기 성공 시
    receiveSayWordSucceed((data) => {
      const { word, userIndex, scoreDelta } = data;

      // 다음 끝말잇기 글자 설정
      const lastCharacter = word.split("")[word.length - 1];
      setInitialCharacter(lastCharacter);
      const inputWordCharacters = word?.split("").filter((char, idx) => idx !== 0);
      const delay = 500; // 0.5초
      inputWordCharacters.forEach((char, idx) => {
        const id1 = setTimeout(
          () => {
            setInitialCharacter((prevChar) => prevChar + char);
          },
          delay * (idx + 1)
        );
        timeoutIds.push(id1);
      });

      // 득점 저장
      setCurrPoints(scoreDelta);
      setPlayer((prev) => {
        return {
          ...prev,
          score: prev.score + scoreDelta
        };
      });
      setPlayerList((prevList) => {
        const newList = [...prevList];
        let _player = { ...newList[userIndex] };
        _player.score += scoreDelta;
        newList[userIndex] = _player;
        return newList;
      });

      const id2 = setTimeout(
        () => {
          setInitialCharacter(lastCharacter);
        },
        delay * 1.5 * inputWordCharacters?.length
      );

      timeoutIds.push(id2);
      setTimeoutIds(timeoutIds);

      updateNextTurn();
    });

    onTurnEnd(() => {});

    onRoundEnd((roundResult) => {
      const { defeatedUserIndex, scoreDelta } = roundResult;
      const defeatedUser = playerList[defeatedUserIndex];
      if (defeatedUser && defeatedUser.id === userName) {
        setIsRoundEnd(true);
        roundStart(
          (room) => {
            setTurnCount(room.turnElapsed);
            if (room.turnElapsed === 1) setIsRoundEnd(false);
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

  // useEffect(() => {
  //   setPlayerList((prevList) => prevList.map((p) => (p.id === player.id ? player : p)));

  //   if (player.myTurn) {
  //     turnStart(
  //       (room) => {
  //         setTurnCount(room.turnElapsed);
  //       },
  //       (error) => {
  //         setModalType("error");
  //         setModalChildren(error);
  //         setIsModalOpen(true);
  //       }
  //     );
  //   }
  // }, [player]);

  // useEffect(() => {
  //   if (!prevRoundScoreRef.current) {
  //     prevRoundScoreRef.current = playerList.map((player) => player.roundScore);
  //   } else {
  //     const isScored = playerList.some(
  //       (player, idx) => player.roundScore > prevRoundScoreRef.current[idx]
  //     );

  //     if (isScored) updateNextTurn();
  //     prevRoundScoreRef.current = playerList.map((player) => player.roundScore);
  //   }
  // }, [playerList]);

  // clearTimeout
  useEffect(() => {
    return () => {
      timeoutIds?.forEach((id) => clearTimeout(id));
    };
  }, [timeoutIds]);

  // ====== 다음 턴으로 턴 넘기기 ======
  const updateNextTurn = () => {
    let nextPlayerIndex;
    setPlayerList((prevPlayerList) => {
      const currPlayerIndex = prevPlayerList.findIndex((player) => player.myTurn);
      nextPlayerIndex = (currPlayerIndex + 1) % prevPlayerList.length;

      return prevPlayerList.map((player, idx) => {
        if (idx === currPlayerIndex) {
          return { ...player, myTurn: false };
        }
        if (idx === nextPlayerIndex) {
          return { ...player, myTurn: true };
        }
        return player;
      });
    });

    setIsMyTurn(nextPlayerIndex === 0);

    if (!isRoundEnd) {
      turnStart();
    }
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
        <WordInput roundCount={roomInfo?.maxRound} roundTime={roomInfo?.roundTimeLimit} />
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
