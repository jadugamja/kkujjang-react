import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FlexBox } from "@/styles/FlexStyle";

const TimerBar = ({ type, totalTime }) => {
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [startTime, setStartTime] = useState(Date.now());
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const getBgColor = (type, name) => {
    switch (type) {
      case "turn":
        return name === "outer" ? "#70712d" : "#E6E846";
      case "round":
        return name === "outer" ? "#223c6c" : "#3573E4";
    }
  };

  // useEffect(() => {
  //   if (timeLeft > 0) {
  //     const timerId = setTimeout(() => {
  //       setTimeLeft(timeLeft - 0.01);
  //     }, 10);
  //     return () => clearTimeout(timerId);
  //   }
  // }, [timeLeft]);

  useEffect(() => {
    const frame = () => {
      const now = Date.now();
      const totalElapsed = (now - startTime) / 1000;
      const sinceLastUpdate = (now - lastUpdate) / 1000;

      if (sinceLastUpdate > 0.02) {
        // 0.02초 이상 경과했을 때만 상태 업데이트
        setTimeLeft(Math.max(totalTime - totalElapsed, 0));
        setLastUpdate(now);
      }

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    };

    requestAnimationFrame(frame);
    return () => cancelAnimationFrame(frame);
  }, [startTime, lastUpdate, timeLeft]);

  const width = timeLeft > 0 ? (timeLeft / totalTime) * 100 : 0;
  const sec = Math.round(timeLeft, 0.1);
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
