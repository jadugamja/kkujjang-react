import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

export const ModalBackground = styled.div`
  width: 1920px;
  height: 1072px;
  background-color: #000000;
  opacity: 0.5;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
`;

export const ModalWrapper = styled.div`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  border-radius: ${(props) => props.borderRadius || null};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const ModalHeader = styled.div`
  width: ${(props) => props.width || "36.375rem"};
  height: ${(props) => props.height || "2.25rem"};
  background-color: ${({ theme }) => theme.colors.gray200};
`;

export const ModalContent = styled(FlexBox).attrs({
  as: "modalContent",
  row: "center",
  col: "center"
})`
  width: ${(props) => props.width || "36.375rem"};
  height: ${(props) => props.height || "17.813rem"};
  background-color: #fefefe;
`;

export const ModalMessage = styled.p`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  margin: 0;
`;

export const ExitMiniCircle = styled.button`
  width: 1.125rem;
  height: 1.125rem;
  background-color: ${({ theme }) => theme.colors.error};
  border-radius: 50%;

  &:hover {
    background-color: #cf5757;
  }
`;
