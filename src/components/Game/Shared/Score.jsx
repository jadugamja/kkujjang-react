import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Wrapper } from "./Layout";
import { currentPointsState } from "@/recoil/gameState";
import { playingPlayerListState, playingPlayerState } from "@/recoil/userState";

export const TurnScore = () => {
  const [pointType, setPointType] = useState(null);
  const [currPoints, setCurrPoints] = useRecoilState(currentPointsState);
  const [player, setPlayer] = useRecoilState(playingPlayerState);
  const [playerList, setPlayerList] = useRecoilState(playingPlayerListState);

  useEffect(() => {
    if (currPoints !== 0) {
      if (currPoints > 0) setPointType("score");
      else if (currPoints < 0) setPointType("penalty");

      const disappeared = setTimeout(() => {
        setCurrPoints(0);
      }, 1500);

      if (player.myTurn) {
        const updatedPlayer = {
          ...player,
          score: player.score + currPoints
        };
        setPlayer(updatedPlayer);

        const updatedPlayerList = playerList?.map((p) =>
          p.id === player.id ? updatedPlayer : p
        );
        setPlayerList(updatedPlayerList);
      }
      return () => clearTimeout(disappeared);
    }
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
      <StyledSpan type={pointType}>
        {currPoints !== 0 && (pointType === "score" ? `+${currPoints}` : `${currPoints}`)}
      </StyledSpan>
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
  children: PropTypes.string
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
