import { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FlexBox } from "@/styles/FlexStyle";
import { GameModalInput as Input } from "../Shared/GameModalStyle";
import TimerBar from "../Shared/TimerBar";

const WordInput = ({ roundCount, roundTime }) => {
  const [firstWord, setFirstWord] = useState("");
  const [currTurn, setCurrTurn] = useState(0);

  useEffect(() => {
    // 랜덤 단어 POST API 호출 (roundCount)
    setFirstWord("테스트임당");
  }, []);

  return (
    <WordInputWrapper dir="col" col="center">
      <FirstWordWrapper row="center" col="center">
        {firstWord?.split("").map((char, i) => (
          <FirstWordSpan key={i} type={i === currTurn && "this"}>
            {char}
          </FirstWordSpan>
        ))}
      </FirstWordWrapper>
      <WordTimerInfo dir="col" row="center" col="center">
        <DisplayWordWrapper row="center" col="center">
          <DisplayWord>{firstWord?.split("")[currTurn]}</DisplayWord>
        </DisplayWordWrapper>
        <TimerBar type="turn" totalTime={15} />
        <TimerBar type="round" totalTime={roundTime} />
      </WordTimerInfo>
      <InputWrapper>
        <Input
          type="text"
          placeholder="당신의 차례! 아래 채팅창에서 단어를 입력하세요!"
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
