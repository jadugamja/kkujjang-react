import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Wrapper } from "./Layout";
import { currentPoints } from "@/recoil/gameState";

export const TurnScore = () => {
  const [pointType, setPointType] = useState(null);
  const currPoints = useRecoilValue(currentPoints);

  useEffect(() => {
    if (currPoints > 0) setPointType("score");
    else if (currPoints < 0) setPointType("penalty");
  }, [currPoints]);

  return (
    <Wrapper
      position="absolute"
      top={pointType === "score" && "-12px"}
      right={pointType === "score" && "-10px"}
      bottom={pointType === "penalty" && "13px"}
      left={pointType === "penalty" && "15px"}
      type={pointType}
    >
      <StyledSpan type={pointType}>{currPoints !== 0 && currPoints}</StyledSpan>
    </Wrapper>
  );
};

export const TotalScore = ({ children }) => {
  return (
    <Wrapper row="center" col="center" maxWidth="100%" height="34px" margin="5px 0 0">
      <StyledScoreText>{children}</StyledScoreText>
    </Wrapper>
  );
};

TotalScore.propTypes = {
  children: PropTypes.number
};

const StyledSpan = styled.span`
  font-size: 40px;
  font-weight: 700;
  color: ${({ type }) => (type === "score" ? "#1F4DE9" : "#FF6666")};
  text-shadow: ${({ type }) =>
    type === "score"
      ? "-1px 0 #4670FC, 0 1px #4670FC, 1px 0 #4670FC, 0 -1px #4670FC"
      : "-1px 0 #923838, 0 1px #923838, 1px 0 #923838, 0 -1px #923838"};
`;

const StyledScoreText = styled.span`
  font-family: "Pretendard Variable";
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0;
`;
