import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

export const ModalBackground = styled.div`
  width: 1920px;
  height: 1072px;
  background-color: #000000;
  opacity: 0.7;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalWrapper = styled.div`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  border-radius: ${(props) => props.borderRadius || null};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalHeader = styled(FlexBox)`
  width: ${(props) => props.width || "36.375rem"};
  height: ${(props) => props.height || "2.25rem"};
  background-color: ${({ theme }) => theme.colors.gray200};
  padding-right: 10px;
`;

export const ModalContent = styled(FlexBox)`
  width: ${(props) => props.width || "36.375rem"};
  height: ${(props) => props.height || "17.813rem"};
  background-color: #fefefe;
`;

export const ModalMessage = styled.p`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  margin: 0;
  padding-bottom: 50px;
  padding-right: ${(props) => props.paddingRight || null};
`;

export const ButtonContainer = styled(FlexBox)`
  width: ${(props) => props.width || "30rem"};
  height: ${(props) => props.height || "fit-content"};
`;

export const VanWrapper = styled.div`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
`;

export const VanInputWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
`;

export const VanInput = styled.input`
  width: ${(props) => props.width || "20.688rem"};
  height: ${(props) => props.height || "3.313rem"};
`;

export const VanTextAreaWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
`;

export const VanTextArea = styled.textarea`
  width: ${(props) => props.width || "20.688rem"};
  height: ${(props) => props.height || "10.375rem"};
`;

export const VanButtonWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "26.853rem"};
  height: ${(props) => props.height || "fit-content"};
  padding-top: 20px;
`;

export const VanButton = styled.button`
  width: ${(props) => props.width || "7rem"};
  height: ${(props) => props.width || "3.625rem"};
  background-color: ${({ theme }) => theme.colors.gray100};
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  color: ${({ theme }) => theme.colors.gray600};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray400};
  }
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
