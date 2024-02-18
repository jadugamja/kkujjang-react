import React from "react";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

import createdAtIcon from "@/assets/images/clock.png";
import viewsIcon from "@/assets/images/views.png";

// ===== style ======
const BoardItemWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "82rem"};
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
// data: { id, title, createdAt, views, type, needAnswer, onClick }
const BoardItem = ({ boardType, data, onClick }) => {
  return (
    <BoardItemWrapper onClick={onClick}>
      {boardType === "notice" && (
        <>
          <FlexBoardText basis={4}>{data.title}</FlexBoardText>
          <BoardItemImage src={createdAtIcon} />
          <FlexBoardText color="#A7A7A7" fontSize="20px">
            {data.createdAt}
          </FlexBoardText>
          <BoardItemImage src={viewsIcon} />
          <FlexBoardText color="#A7A7A7" fontSize="20px">
            {data.views}
          </FlexBoardText>
        </>
      )}
      {boardType === "inquiry" && (
        <>
          <BoardItemText>{data.type}</BoardItemText>
          <BoardItemText>{data.title}</BoardItemText>
          <BoardItemText>{data.createdAt}</BoardItemText>
          <BoardItemText>{data.needAnswer}</BoardItemText>
        </>
      )}
    </BoardItemWrapper>
  );
};

BoardItem.propTypes = {
  boardType: PropTypes.string,
  data: PropTypes.object,
  onClick: PropTypes.func
};

// title: PropTypes.string,
// createdAt: PropTypes.string,
// views: PropTypes.string,
// type: PropTypes.number,
// needAnswer: PropTypes.bool

export default BoardItem;
