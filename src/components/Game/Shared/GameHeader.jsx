import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { StyledHeader, Img as LogoImg } from "@/styles/StyledComponents";
import gameLogo from "@/assets/images/logo-game.png";
import Modal from "./GameModal";

const GameHeader = ({ nickname = "" }) => {
  const [modalType, setModalType] = useState("exit");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <StyledHeader
      $display="flex"
      $row="between"
      $col="center"
      $position="fixed"
      $top="0"
      $width="inherit"
      $height="7rem"
      $bgColor="transparent"
      $zIndex="10"
    >
      {isModalOpen && (
        <Modal
          type={modalType}
          setType={setModalType}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          height="14rem"
        >
          홈으로 이동하시겠습니까?
        </Modal>
      )}
      {/* 로고 */}
      <Link onClick={() => setIsModalOpen(true)}>
        <LogoImg src={gameLogo} $width="4rem" $clickable />
      </Link>
      <span>{nickname}</span>
    </StyledHeader>
  );
};

GameHeader.propTypes = {
  nickname: PropTypes.string
};

export default GameHeader;
