import React, { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FlexBox } from "@/styles/FlexStyle";
import { thisTurnLeftTimeState, thisRoundLeftTimeState } from "@/recoil/gameState";
import { onTimer } from "@/services/socket";

const TimerBar = ({ type, totalTime }) => {
  const [totalTurnTime, setTotalTurnTime] = useState(totalTime / 10);
  const [thisTurnLeftTime, setThisTurnLeftTime] = useRecoilState(thisTurnLeftTimeState);
  const [thisRoundLeftTime, setThisRoundLeftTime] =
    useRecoilState(thisRoundLeftTimeState);
  const [width, setWidth] = useState(0);
  const secRef = useRef(0);

  useEffect(() => {
    onTimer((data) => {
      const { personalTimeLimit, personalTimeLeft, roundTimeLeft } = data;

      if (personalTimeLeft < 0) {
        setThisTurnLeftTime(0);
      } else if (roundTimeLeft < 0) {
        setThisRoundLeftTime(0);
      }
      setTotalTurnTime(personalTimeLimit);
      setThisTurnLeftTime(personalTimeLeft);
      setThisRoundLeftTime(roundTimeLeft);
    });
  }, []);

  useEffect(() => {
    const leftTime = type === "turn" ? thisTurnLeftTime : thisRoundLeftTime;
    const newWidth =
      leftTime > 0 ? (leftTime / (type === "turn" ? totalTurnTime : totalTime)) * 100 : 0;
    setWidth(newWidth);
    secRef.current = Math.round(leftTime / 100) / 10;
  }, [totalTurnTime, thisTurnLeftTime, thisRoundLeftTime]);

  const getBgColor = (type, name) => {
    switch (type) {
      case "turn":
        return name === "outer" ? "#70712d" : "#E6E846";
      case "round":
        return name === "outer" ? "#223c6c" : "#3573E4";
    }
  };

  const outerColor = React.useMemo(() => getBgColor(type, "outer"), [type]);
  const innerColor = React.useMemo(() => getBgColor(type, "inner"), [type]);

  return (
    <ProgressBarWrapper bgColor={outerColor}>
      <ProgressBar width={width} bgColor={innerColor} row="end" col="center">
        <TimeLeftText>{`${secRef.current}초`}</TimeLeftText>
      </ProgressBar>
    </ProgressBarWrapper>
  );
};

TimerBar.propTypes = {
  type: PropTypes.oneOf(["turn", "round"]),
  totalTime: PropTypes.number
};

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 1.5rem;
  background-color: ${({ bgColor }) => bgColor};
`;

const ProgressBar = styled(FlexBox)`
  width: ${({ width }) => width}%;
  height: 100%;
  padding: 5px;
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid #00000080;
`;

const TimeLeftText = styled.span`
  font-weight: 900;
  color: #fff;
  text-shadow: 1px 0px 3px #7e7e7e;
`;

export default TimerBar;
