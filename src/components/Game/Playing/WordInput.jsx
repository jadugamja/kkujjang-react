import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FlexBox } from "@/styles/FlexStyle";
import { GameModalInput as Input } from "../Shared/GameModalStyle";
import TimerBar from "../Shared/TimerBar";

import { playingPlayerState } from "@/recoil/userState";
import {
  initialCharacterState,
  thisTurnLeftTimeState,
  thisRoundLeftTimeState,
  currentPoints
} from "@/recoil/gameState";

const WordInput = ({ roundCount, roundTime }) => {
  const [roundInitialCharacter, setRoundInitialCharacter] = useState("");
  const [initialCharacter, setInitialCharacter] = useRecoilState(initialCharacterState);
  const thisTurnLeftTime = useRecoilValue(thisTurnLeftTimeState);
  const thisRoundLeftTime = useRecoilValue(thisRoundLeftTimeState);
  const [currRound, setCurrRound] = useState(0);
  const [inputWord, setInputWord] = useState("");
  const setCurrPoints = useSetRecoilState(currentPoints);
  const setPlayingPlayer = useSetRecoilState(playingPlayerState);

  const [timeoutIds, setTimeoutIds] = useState([]);

  // 1. 게임 시작
  useEffect(() => {
    // 랜덤 단어 POST API 호출 (roundCount)
    setRoundInitialCharacter("테스트임당");
  }, []);

  // 2. 라운드 시작: 첫 글자 제시
  useEffect(() => {
    setInitialCharacter(roundInitialCharacter?.split("")[currRound]);
  }, [roundInitialCharacter, currRound]);

  // 3. 라운드 변경
  useEffect(() => {
    if (thisRoundLeftTime === 0 && currRound < roundCount) {
      setCurrRound((prevTurn) => prevTurn + 1);
    }
  }, [thisRoundLeftTime]);

  useEffect(() => {
    return () => {
      timeoutIds?.forEach((id) => clearTimeout(id));
    };
  }, [timeoutIds]);

  const onEnterKeyDown = async (e) => {
    if (e.key !== "Enter") return;

    setInputWord("");

    if (
      !inputWord.startsWith(roundInitialCharacter?.split("")[currRound]) &&
      thisTurnLeftTime <= 0
    )
      return;

    // 서버로 단어 전송 및 유효 단어 여부 판별 요청
    // payload: inputWord, thisTurnLeftTime

    // 서버로부터 1) 유효성 검사 결과 및 2) 점수 받기
    const score = 10;

    // 끝말잇기 실패 시

    // 끝말잇기 성공 시
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

    setCurrPoints(score);
    // 득점 저장
    setPlayingPlayer((prev) => {
      const newRoundScore = [...prev.roundScore];
      newRoundScore[currRound] = score;
      return { ...prev, roundScore: newRoundScore };
    });

    const id2 = setTimeout(
      () => {
        setInitialCharacter(inputWord?.split("")[inputWord?.length - 1]);
      },
      delay * 1.5 * inputWordCharacters?.length
    );

    timeoutIds.push(id2);
    setTimeoutIds(timeoutIds);
  };

  // const calculateTurnTime = (roundTime) => {
  //   const minTime = 10;
  //   const maxTime = 20;
  //   const minRoundTime = 60;
  //   const maxRoundTime = 150;

  //   return (
  //     ((roundTime - minRoundTime) / (maxRoundTime - minRoundTime)) * (maxTime - minTime) +
  //     minTime
  //   );
  // };

  return (
    <WordInputWrapper dir="col" col="center">
      <FirstWordWrapper row="center" col="center">
        {roundInitialCharacter?.split("").map((char, i) => (
          <FirstWordSpan key={i} type={i === currRound && "this"}>
            {char}
          </FirstWordSpan>
        ))}
      </FirstWordWrapper>
      <WordTimerInfo dir="col" row="center" col="center">
        <DisplayWordWrapper row="center" col="center">
          <DisplayWord>{initialCharacter}</DisplayWord>
        </DisplayWordWrapper>
        {/* <TimerBar type="turn" totalTime={15} />
        <TimerBar type="round" totalTime={roundTime} /> */}
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

const InputWrapper = styled(FlexBox)`
  position: absolute;
  top: calc(40% - 2px);
  width: 40.25rem;
  padding: 4px;
  background-color: #000000cc;
  z-index: 9;
`;

export default WordInput;
