import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import PropTypes from "prop-types";

import { FlexBox } from "@/styles/FlexStyle";
import { blink } from "@/styles/CommonStyle";
import { GameModalInput as Input } from "../Shared/GameModalStyle";
import TimerBar from "../Shared/TimerBar";
import { playingPlayerState, syncPlayingPlayerToListState } from "@/recoil/userState";
import {
  randomWordState,
  initialCharacterState,
  isMyTurnState,
  thisTurnLeftTimeState,
  currentRoundState,
  isWordFailState
} from "@/recoil/gameState";
import { sendMessage } from "@/services/socket";

const WordInput = ({ roundCount, roundTime }) => {
  const randomWord = useRecoilValue(randomWordState);
  const initialCharacter = useRecoilValue(initialCharacterState);
  const isMyTurn = useRecoilValue(isMyTurnState);
  const isFail = useRecoilValue(isWordFailState);
  const thisTurnLeftTime = useRecoilValue(thisTurnLeftTimeState);
  const [currRound, setCurrRound] = useRecoilState(currentRoundState);
  const [inputWord, setInputWord] = useState("");
  const [player, setPlayer] = useRecoilState(playingPlayerState);
  const syncPlayerList = useSetRecoilState(syncPlayingPlayerToListState);

  useEffect(() => {
    syncPlayerList((prevList) => prevList?.map((p) => (player.myTurn ? player : p)));
  }, [player]);

  const onEnterKeyDown = async (e) => {
    if (e.key !== "Enter") return;

    setInputWord("");

    if (!inputWord.startsWith(randomWord?.split("")[currRound]) && thisTurnLeftTime <= 0)
      return;

    sendMessage(inputWord);
  };

  return (
    <WordInputWrapper dir="col" col="center">
      <FirstWordWrapper row="center" col="center">
        {randomWord?.split("").map((char, i) => (
          <FirstWordSpan key={i} type={i === currRound ? "this" : undefined}>
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
        <TimerBar type="turn" totalTime={roundTime} />
        <TimerBar type="round" totalTime={roundTime} />
      </WordTimerInfo>
      {isMyTurn && (
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
      )}
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
  top: 40%;
  width: 40.25rem;
  padding: 4px;
  background-color: #000000cc;
  z-index: 9;
`;

export default WordInput;
