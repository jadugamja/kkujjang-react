import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FlexBox } from "@/styles/FlexStyle";
import { blink } from "@/styles/CommonStyle";
import { GameModalInput as Input } from "../Shared/GameModalStyle";
import TimerBar from "../Shared/TimerBar";
import {
  playingPlayerListState,
  playingPlayerState,
  syncPlayingPlayerToListState
} from "@/recoil/userState";
import {
  randomWordState,
  initialCharacterState,
  thisTurnLeftTimeState,
  thisRoundLeftTimeState,
  currentRoundState,
  currentPoints
} from "@/recoil/gameState";
import {
  receiveSayWordFail,
  receiveSayWordSucceed,
  sendMessage
} from "@/services/socket";

const WordInput = ({ roundCount, roundTime }) => {
  const randomWord = useRecoilValue(randomWordState);
  const [initialCharacter, setInitialCharacter] = useRecoilState(initialCharacterState);
  const thisTurnLeftTime = useRecoilValue(thisTurnLeftTimeState);
  const thisRoundLeftTime = useRecoilValue(thisRoundLeftTimeState);
  const [currRound, setCurrRound] = useRecoilState(currentRoundState);
  const [inputWord, setInputWord] = useState("");
  const [isFail, setIsFail] = useState(false);
  const setCurrPoints = useSetRecoilState(currentPoints);
  const [playerList, setPlayerList] = useRecoilState(playingPlayerListState);
  const [player, setPlayer] = useRecoilState(playingPlayerState);
  const syncPlayerList = useSetRecoilState(syncPlayingPlayerToListState);
  const [timeoutIds, setTimeoutIds] = useState([]);

  // 3. 라운드 변경
  useEffect(() => {
    if (thisRoundLeftTime === 0 && currRound < roundCount) {
      setCurrRound((prevTurn) => prevTurn + 1);
    }
  }, [thisRoundLeftTime]);

  useEffect(() => {
    syncPlayerList((prevList) => prevList?.map((p) => (player.myTurn ? player : p)));
  }, [player]);

  // clearTimeout
  useEffect(() => {
    return () => {
      timeoutIds?.forEach((id) => clearTimeout(id));
    };
  }, [timeoutIds]);

  const onEnterKeyDown = async (e) => {
    if (e.key !== "Enter") return;

    if (!inputWord.startsWith(randomWord?.split("")[currRound]) && thisTurnLeftTime <= 0)
      return;

    // 서버로 단어 전송 및 유효 단어 여부 판별 요청
    sendMessage(inputWord);

    // 끝말잇기 실패 시
    receiveSayWordFail((word) => {
      const prevInitialCharacter = initialCharacter;
      setIsFail(true);
      setInitialCharacter(word);

      const id = setTimeout(() => {
        setInitialCharacter(prevInitialCharacter);
        setIsFail(false);
      }, 500);

      setTimeoutIds([id]);
    });

    // 끝말잇기 성공 시
    receiveSayWordSucceed((data) => {
      const { word, userIndex, scoreDelta } = data;

      // 다음 끝말잇기 글자 설정
      setInitialCharacter((prevChar) => prevChar + word.split("")[word.length - 1]);
      const inputWordCharacters = inputWord?.split("");
      const delay = 500; // 0.5초
      inputWordCharacters.forEach((char, idx) => {
        const id1 = setTimeout(
          () => {
            if (idx !== 0) setInitialCharacter((prevChar) => prevChar + char);
          },
          delay * (idx + 1)
        );
        timeoutIds.push(id1);
      });

      // 득점 저장
      setCurrPoints(scoreDelta);
      setPlayer((prev) => {
        const newRoundScore = [...(prev.roundScore || [])];
        newRoundScore[currRound] = scoreDelta;
        return {
          ...prev,
          roundScore: newRoundScore,
          totalScore: prev.totalScore + scoreDelta
        };
      });
      setPlayerList((prevList) => {
        const newList = [...prevList];
        const _player = newList[userIndex];
        _player.totalScore += scoreDelta;
        return newList;
      });

      const id2 = setTimeout(
        () => {
          setInitialCharacter(inputWord?.split("")[inputWord?.length - 1]);
        },
        delay * 1.5 * inputWordCharacters?.length
      );

      timeoutIds.push(id2);
      setTimeoutIds(timeoutIds);
    });
  };

  return (
    <WordInputWrapper dir="col" col="center">
      <FirstWordWrapper row="center" col="center">
        {randomWord?.split("").map((char, i) => (
          <FirstWordSpan key={i} type={i === currRound && "this"}>
            {char}
          </FirstWordSpan>
        ))}
      </FirstWordWrapper>
      <WordTimerInfo dir="col" row="center" col="center">
        <DisplayWordWrapper row="center" col="center">
          {isFail ? (
            <DisplayFailWord>{initialCharacter}</DisplayFailWord>
          ) : (
            <DisplayWord>{initialCharacter}</DisplayWord>
          )}
        </DisplayWordWrapper>
        <TimerBar type="turn" totalTime={15} />
        <TimerBar type="round" totalTime={roundTime} />
      </WordTimerInfo>
      {/* Player Who is myTurn === true */}
      <InputWrapper>
        <Input
          type="text"
          placeholder="당신의 차례! 아래 채팅창에서 단어를 입력하세요!"
          bgColor="#fff"
          fontSize="18px"
          value={inputWord}
          onChange={(e) => setInputWord(e.target.value)}
          onKeyDown={onEnterKeyDown}
        />
      </InputWrapper>
    </WordInputWrapper>
  );
};

WordInput.propTypes = {
  roundCount: PropTypes.number,
  roundTime: PropTypes.number
};

const WordInputWrapper = styled(FlexBox)`
  height: fit-content;
  min-height: 12.5rem;
`;

const FirstWordWrapper = styled(FlexBox)`
  margin: 10px 0 6px;

  & > * + * {
    margin-left: 4px;
  }
`;

const FirstWordSpan = styled.span`
  font-size: ${({ type }) => (type === "this" ? "22px" : "19px")};
  font-weight: 700;
  color: ${({ type }) => (type === "this" ? "#DFD943" : "#fff")};
`;

const WordTimerInfo = styled(FlexBox)`
  width: 40.25rem;
  background-color: #f3c264;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  padding: 5px;
`;

const DisplayWordWrapper = styled(FlexBox)`
  width: 100%;
  height: 3.75rem;
  background-color: #413014;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;

const DisplayWord = styled.span`
  margin-left: 12px;
  font-family: "Pretendard Variable";
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 12px;
  color: #fff;
`;

const DisplayFailWord = styled.span`
  font-family: "Pretendard Variable";
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 12px;
  color: ${({ theme }) => theme.colors.error};
  text-decoration: line-through;
  animation: ${blink} 0.5s step-end;
`;

const InputWrapper = styled(FlexBox)`
  position: absolute;
  top: calc(40% - 2px);
  width: 40.25rem;
  padding: 4px;
  background-color: #000000cc;
  z-index: 9;
`;

export default WordInput;
