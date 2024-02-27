import React, { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FlexBox } from "@/styles/FlexStyle";
import { thisTurnLeftTimeState, thisRoundLeftTimeState } from "@/recoil/gameState";
import { onTimer } from "../../../services/socket";

const TimerBar = ({ type, totalTime }) => {
  const [leftTime, setLeftTime] = useState(totalTime);
  const [thisTurnLeftTime, setThisTurnLeftTime] = useRecoilState(thisTurnLeftTimeState);
  const [thisRoundLeftTime, setThisRoundLeftTime] =
    useRecoilState(thisRoundLeftTimeState);
  const [startTime, setStartTime] = useState(Date.now());
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  useEffect(() => {
    onTimer((data) => {
      const { roundTimeLeft, personalTimeLeft } = data;
      const roundTimeLeftSec = roundTimeLeft / 1000;
      const personalTimeLeftSec = personalTimeLeft / 1000;

      if (type === "turn") setThisTurnLeftTime(roundTimeLeftSec);
      else if (type === "round") setThisRoundLeftTime(totalTime);
    });
  }, []);

  // useEffect(() => {
  //   if (leftTime <= 0) {
  //     if (type === "turn") setThisTurnLeftTime(leftTime);
  //     else if (type === "round") setThisRoundLeftTime(leftTime);
  //   }
  // }, [leftTime])

  useEffect(() => {
    const frame = () => {
      const now = Date.now();
      const totalElapsed = (now - startTime) / 1000;
      const sinceLastUpdate = (now - lastUpdate) / 1000;

      if (sinceLastUpdate > 0.02) {
        // 0.02초 이상 경과했을 때만 상태 업데이트
        setLeftTime(Math.max(totalTime - totalElapsed, 0));
        setLastUpdate(now);
      }

      if (leftTime > 0) {
        requestAnimationFrame(frame);
      }
    };

    if (leftTime <= 0) {
      if (type === "turn") setThisTurnLeftTime(leftTime);
      else if (type === "round") setThisRoundLeftTime(leftTime);
    } else {
      requestAnimationFrame(frame);
    }

    return () => cancelAnimationFrame(frame);
  }, [startTime, lastUpdate, totalTime]);

  const getBgColor = (type, name) => {
    switch (type) {
      case "turn":
        return name === "outer" ? "#70712d" : "#E6E846";
      case "round":
        return name === "outer" ? "#223c6c" : "#3573E4";
    }
  };

  const width = leftTime > 0 ? (leftTime / totalTime) * 100 : 0;
  const sec = Math.round(leftTime, 0.1);
  const outerColor = React.useMemo(() => getBgColor(type, "outer"), [type]);
  const innerColor = React.useMemo(() => getBgColor(type, "inner"), [type]);

  return (
    <ProgressBarWrapper bgColor={outerColor}>
      <ProgressBar width={width} bgColor={innerColor} row="end" col="center">
        <TimeLeftText>{`${sec}초`}</TimeLeftText>
      </ProgressBar>
    </ProgressBarWrapper>
  );
};

TimerBar.propTypes = {
  type: PropTypes.string,
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
