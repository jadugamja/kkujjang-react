import React from "react";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

import createdAtIcon from "@/assets/images/clock.png";
import viewsIcon from "@/assets/images/views.png";

// ===== style ======
const BoardItemWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "68.75rem"};
  height: ${(props) => props.height || "fit-content"};
  justify-content: space-between;
  align-items: center;
`;

export const BoardItemImage = styled.img`
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.height || "24px"};
`;

const BoardItemText = styled.p`
  color: ${(props) => props.color || "#32250F"};
  font-size: ${(props) => props.fontSize || "25px"};
  margin: 0;
`;

const FlexBoardText = styled(BoardItemText)`
  flex: ${(props) => props.basis || 1};
`;

// ===== component ======
const BoardItem = ({ boardType, title, createdAt, views, type, needAnswer }) => {
  return (
    <BoardItemWrapper>
      {boardType === "notice" && (
        <>
          <FlexBoardText basis={4}>{title}</FlexBoardText>
          <BoardItemImage src={createdAtIcon}></BoardItemImage>
          <FlexBoardText color="#A7A7A7" fontSize="20px">
            {createdAt}
          </FlexBoardText>
          <BoardItemImage src={viewsIcon}></BoardItemImage>
          <FlexBoardText color="#A7A7A7" fontSize="20px">
            {views}
          </FlexBoardText>
        </>
      )}
      {boardType === "inquiry" && (
        <>
          <BoardItemText>{type}</BoardItemText>
          <BoardItemText>{title}</BoardItemText>
          <BoardItemText>{createdAt}</BoardItemText>
          <BoardItemText>{needAnswer}</BoardItemText>
        </>
      )}
    </BoardItemWrapper>
  );
};

BoardItem.propTypes = {
  boardType: PropTypes.string,
  title: PropTypes.string,
  createdAt: PropTypes.string,
  views: PropTypes.string,
  type: PropTypes.number,
  needAnswer: PropTypes.bool
};

export default BoardItem;
