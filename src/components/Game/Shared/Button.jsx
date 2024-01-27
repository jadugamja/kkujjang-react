import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faX } from "@fortawesome/free-solid-svg-icons";

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
export const ExitButton = () => {
  const navigate = useNavigate();
  const onGoBackToLobby = () => navigate("/game");

  return (
    <StyledExitButton onClick={onGoBackToLobby}>
      <ExtraButtonIcon icon={faX} fontSize="19px" color="#fff" />
    </StyledExitButton>
  );
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
