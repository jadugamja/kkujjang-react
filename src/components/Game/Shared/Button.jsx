import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Modal from "./GameModal";

export const ExtraButton = styled.button`
  width: 50px;
  height: 42px;
  border-radius: 15px 15px 0 0;
`;

export const ExtraButtonIcon = styled(FontAwesomeIcon)`
  color: ${({ color }) => color || "initial"};
  font-size: ${({ fontSize }) => fontSize || "20px"};
`;

// 퇴장 버튼
export const ExitButton = ({ location }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onGoBackToLobby = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <StyledExitButton onClick={onGoBackToLobby}>
        <ExtraButtonIcon icon={faX} fontSize="19px" color="#fff" />
      </StyledExitButton>
      {isModalOpen ? (
        <Modal
          type="exit"
          message={
            location === "playing" ? "게임을 그만두시겠습니까?" : "방을 나가시겠습니까?"
          }
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      ) : null}
    </>
  );
};

ExitButton.propTypes = {
  location: PropTypes.string
};

const StyledExitButton = styled(ExtraButton)`
  background-color: ${({ theme }) => theme.colors.error};
`;

export const MiniButton = styled.button`
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 10px;
  font-size: 11px;
`;
