import { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Timer = ({ initialTime, onTimeOut }) => {
  const [time, setTime] = useState(initialTime);
  const min = Math.floor(time / 60);
  const sec = time % 60;

  useEffect(() => {
    if (initialTime === null) {
      return;
    }

    const timerId = setInterval(() => {
      setTime((time) => time - 1); // 1초씩 줄어듦
    }, 1000);

    if (time === 0) {
      clearInterval(timerId);
      if (onTimeOut) onTimeOut();
      return;
    }

    // 컴포넌트 언마운트 시 타이머 삭제
    return () => clearInterval(timerId);
  }, [time, onTimeOut]);

  return <TimerText>{`${min}:${sec < 10 ? "0" + sec : sec}`}</TimerText>;
};

Timer.propTypes = {
  initialTime: PropTypes.number, // 인증 번호 유효 시간
  onTimeOut: PropTypes.func // 인증 번호 유효 시간 만료 세팅 함수
};

const TimerText = styled.span`
  position: relative;
  right: 61px;
  color: red;
  font-size: 19px;
  font-weight: 500;
`;

export default Timer;
