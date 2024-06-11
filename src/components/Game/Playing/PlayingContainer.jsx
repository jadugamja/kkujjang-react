import { useState, useEffect, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import PropTypes from "prop-types";

import { playingPlayerListState } from "@/recoil/userState";
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
  roundStart,
  onRoundStart,
  turnStart,
  onTurnStart,
  onGameEnd,
  onRoundEnd,
  onTurnEnd,
  receiveSayWordFail,
  receiveSayWordSucceed
} from "@/services/socket";
import { BodyWrapper, UpperWrapper, Wrapper } from "../Shared/Layout";
import TitleBar from "../Shared/TitleBar";
import Chat from "../Shared/Chat";
import WordInput from "./WordInput";
import PlayingPlayerList from "./PlayingPlayerList";
import GameModal from "../Shared/GameModal";
import { getPlayerInfoByUserId } from "@/services/user";

const PlayingContainer = ({ roomInfo, setIsPlaying }) => {
  const [playerList, setPlayerList] = useRecoilState(playingPlayerListState);
  const [randomWord, setRandomWord] = useRecoilState(randomWordState);
  const setInitialCharacter = useSetRecoilState(initialCharacterState);
  const setIsMyTurn = useSetRecoilState(isMyTurnState);
  const setCurrRound = useSetRecoilState(currentRoundState);
  const setTurnCount = useSetRecoilState(turnCountState);
  const setIsWordFail = useSetRecoilState(isWordFailState);
  const setCurrPoints = useSetRecoilState(currentPointsState);

  const [isDataFetched, setIsDataFetched] = useState(false);
  const [isRoundEnd, setIsRoundEnd] = useState(false);
  const [defeatedPlayerIndex, setDefeatedPlayerIndex] = useState(null);
  const [timeoutIds, setTimeoutIds] = useState([]);
  const [modalType, setModalType] = useState("error");
  const [modalChildren, setModalChildren] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cookies] = useCookies(["userId"]);

  const isLastRoundRef = useRef(false);

  useEffect(() => {
    // 방장이 라운드 시작 요청
    if (roomInfo?.roomOwnerUserId === cookies.userId && !isLastRoundRef.current) {
      roundStart();
    }

    onRoundStart((gameStatus) => {
      if (gameStatus.currentRound === 0) {
        const updatedPlayerList = gameStatus.usersSequence.map((user, idx) => ({
          id: user.userId,
          score: user.score,
          myTurn: idx === gameStatus.currentTurnUserIndex,
          ...user
        }));
        setPlayerList(updatedPlayerList);
        if (!randomWord) setRandomWord(gameStatus.roundWord);
      }
      setInitialCharacter(gameStatus.wordStartsWith);
      setCurrRound(gameStatus.currentRound);
      setIsMyTurn(gameStatus.currentTurnUserId === cookies.userId);
      if (gameStatus.currentRound + 1 === gameStatus.maxRound) {
        isLastRoundRef.current = true;
      }
      if (!isRoundEnd) {
        setIsRoundEnd(false);
      }

      // 현재 차례인 플레이어가 턴 시작 요청
      if (gameStatus.currentTurnUserId === cookies.userId) {
        turnStart();
      }
    });

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
      setIsWordFail(true);
      setInitialCharacter(word);

      const id = setTimeout(() => {
        setInitialCharacter((prevInitialCharacter) => prevInitialCharacter[0]);
        setIsWordFail(false);
      }, 1000);

      setTimeoutIds([id]);
    });

    // 끝말잇기 성공
    receiveSayWordSucceed((data) => {
      const { word, userIndex, scoreDelta } = data;

      // 다음 끝말잇기 글자 설정
      const lastCharacter = word[word.length - 1];
      const inputWordCharacters = word.split("").slice(1);
      const delay = 500; // 0.5초

      inputWordCharacters.forEach((char, idx) => {
        const id1 = setTimeout(
          () => {
            setInitialCharacter((prev) => prev + char);
          },
          delay * (idx + 1)
        );
        timeoutIds.push(id1);
      });

      // 득점 저장
      setCurrPoints(scoreDelta);
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
      const currentPlayerIndex = playerList.findIndex((player) => player.myTurn);

      if (defeatedUser && defeatedUserIndex === currentPlayerIndex) {
        setDefeatedPlayerIndex(defeatedUserIndex);
        setCurrPoints(scoreDelta);
        setPlayerList((prevList) => {
          const newList = [...prevList];
          let _player = { ...newList[defeatedUserIndex] };
          _player.score = Math.max(0, _player.score + scoreDelta);
          newList[defeatedUserIndex] = _player;
          return newList;
        });
        setIsRoundEnd(true);

        if (!isLastRoundRef.current) {
          roundStart();
        }
      }
    });

    onGameEnd((ranking) => {
      isLastRoundRef.current = true;
      setModalType("result");
      setModalChildren(ranking);
      setIsModalOpen(true);
    });
  }, [playerList]);

  // Add Playing Players Info
  useEffect(() => {
    const fetchAllUsers = async () => {
      const updatedPlayerList = await Promise.all(
        playerList.map(async (player) => {
          const response = await getPlayerInfoByUserId(player.id);
          if (!response) {
            console.error(`Cannot get user info by userId: ${player.id}`);
          }
          return { ...player, ...response };
        })
      );
      return updatedPlayerList.filter(Boolean);
    };

    if (playerList && playerList?.length !== 0 && !isDataFetched) {
      fetchAllUsers().then((updatedPlayerList) => {
        setPlayerList(updatedPlayerList);
        setIsDataFetched(true);
      });
    }
  }, [playerList, isDataFetched]);

  useEffect(() => {
    return () => {
      timeoutIds?.forEach((id) => clearTimeout(id));
    };
  }, [timeoutIds]);

  // ====== 차례 넘기기 ======
  const updateNextTurn = () => {
    const currPlayerIndex = playerList.findIndex((player) => player.myTurn);
    const nextPlayerIndex = (currPlayerIndex + 1) % playerList.length;

    setPlayerList((prevPlayerList) =>
      prevPlayerList.map((player, idx) => {
        if (idx === currPlayerIndex) {
          return { ...player, myTurn: false };
        }
        if (idx === nextPlayerIndex) {
          return { ...player, myTurn: true };
        }
        return player;
      })
    );

    setIsMyTurn(playerList[nextPlayerIndex]?.id === cookies.userId);

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
        <PlayingPlayerList
          defeatedPlayerIndex={defeatedPlayerIndex}
          setDefeatedPlayerIndex={setDefeatedPlayerIndex}
        />
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
