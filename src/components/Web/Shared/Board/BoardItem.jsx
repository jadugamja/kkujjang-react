import React from "react";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

import createdAtIcon from "@/assets/images/clock.png";
import viewsIcon from "@/assets/images/views.png";

// ===== style ======
const BoardItemWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  margin-bottom: ${(props) => props.marginBottom || null};
`;

export const BoardItemImage = styled.img`
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.height || "24px"};
  margin-right: ${(props) => props.marginRight || null};
`;

const BoardItemText = styled.p`
  color: ${(props) => props.color || "#32250F"};
  font-size: ${(props) => props.fontSize || "25px"};
  margin: 0;
`;

const FlexBoardText = styled(BoardItemText)`
  width: ${(props) => props.width || "fit-content"};
`;

// ===== component ======
// data: { id, title, createdAt, views, type, needAnswer, onClick }
const BoardItem = ({ boardType, data, onClick }) => {
  return (
    <BoardItemWrapper row="between" width="100%" marginBottom="10px" onClick={onClick}>
      {boardType === "notice" && (
        <>
          <FlexBoardText>{data.title}</FlexBoardText>
          <BoardItemWrapper row="between" width="300px">
            <BoardItemWrapper col="center">
              <BoardItemImage src={createdAtIcon} marginRight="10px" />
              <FlexBoardText color="#A7A7A7" fontSize="20px">
                {data.createdAt}
              </FlexBoardText>
            </BoardItemWrapper>
            <BoardItemWrapper col="center">
              <BoardItemImage src={viewsIcon} marginRight="10px" />
              <FlexBoardText color="#A7A7A7" fontSize="20px">
                {data.views}
              </FlexBoardText>
            </BoardItemWrapper>
          </BoardItemWrapper>
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
