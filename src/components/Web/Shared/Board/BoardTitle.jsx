import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// ===== style ======
const BoardTitleWrapper = styled.div`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
`;

const BoardTitleText = styled.p`
  color: ${(props) => props.color || "#828282"};
  font-family: "Gugi";
  font-size: ${(props) => props.fontSize || "32px"};
  font-weight: ${(props) => props.fontWeight || "500"};
`;

// ===== component ======
const BoardTitle = ({ type }) => {
  const getBoardTitle = () => {
    switch (type) {
      case "notice":
        return "공지사항";
      case "inquiry":
        return "문의사항";
    }
  };

  return (
    <BoardTitleWrapper>
      <BoardTitleText>{getBoardTitle()}</BoardTitleText>
    </BoardTitleWrapper>
  );
};

BoardTitle.propTypes = {
  type: PropTypes.string
};

export default BoardTitle;
