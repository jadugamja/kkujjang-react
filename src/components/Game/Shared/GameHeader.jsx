import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { FlexBox } from "@/styles/FlexStyle";
import gameLogo from "@/assets/images/logo-game.png";

const GameHeader = ({ nickname = "" }) => {
  const handleClick = (e) => {
    alert("게임에서 홈으로 넘어갈라 할 때 나오는 경고창");
  };

  return (
    <FixedHeader>
      <Link to="/" onClick={handleClick}>
        <LogoImg src={gameLogo} />
      </Link>
      <span>{nickname}</span>
    </FixedHeader>
  );
};

const FixedHeader = styled(FlexBox).attrs({
  as: "header",
  row: "between",
  col: "center"
})`
  position: fixed;
  top: 0;
  width: inherit;
  height: 7rem;
  background-color: transparent;
  z-index: 3;
`;

// 로고 이미지
const LogoImg = styled.img`
  width: 4rem;

  &:hover {
    cursor: pointer;
  }
`;

GameHeader.propTypes = {
  nickname: PropTypes.string
};

export default GameHeader;
