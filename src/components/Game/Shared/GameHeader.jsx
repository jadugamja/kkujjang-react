import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { FlexBox } from "@/styles/FlexStyle";
import gameLogo from "@/assets/images/logo-game.png";
import Modal from "./GameModal";

const GameHeader = ({ nickname = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <FixedHeader>
      {isModalOpen && (
        <Modal type="error" isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          홈으로 이동하면 진행 중인 게임이 저장되지 않을 수 있습니다. <br />
          그래도 계속하시겠습니까?
        </Modal>
      )}
      <Link onClick={() => setIsModalOpen(true)}>
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
  z-index: 10;
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
