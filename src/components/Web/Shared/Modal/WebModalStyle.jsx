import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.7;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

export const ModalWrapper = styled.div`
  width: ${(props) => props.width || "32rem"};
  height: ${(props) => props.height || "fit-content"};
  border-radius: ${(props) => props.borderRadius || null};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`;

export const ModalHeader = styled(FlexBox)`
  width: 100%;
  height: ${(props) => props.height || "2rem"};
  background-color: ${({ theme }) => theme.colors.gray200};
  padding-right: 10px;
`;

export const ModalContent = styled(FlexBox)`
  width: 100%;
  height: ${(props) => props.height || "17rem"};
  background-color: #fefefe;
`;

export const ModalMessage = styled.p`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  margin: 0;
  padding-bottom: 50px;
  padding-right: ${(props) => props.paddingRight || null};
`;

export const ButtonContainer = styled(FlexBox)`
  width: ${(props) => props.width || "30rem"};
  height: ${(props) => props.height || "fit-content"};
`;

export const BanWrapper = styled.div`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
`;

export const BanInputWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
`;

export const BanInput = styled.input`
  width: ${(props) => props.width || "20.688rem"};
  height: ${(props) => props.height || "3.313rem"};
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
`;

export const BanTextAreaWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
`;

export const BanTextArea = styled.textarea`
  width: ${(props) => props.width || "20.688rem"};
  height: ${(props) => props.height || "10.375rem"};
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
`;

export const BanButtonWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "26.853rem"};
  height: ${(props) => props.height || "fit-content"};
  padding-top: 20px;
`;

export const BanButton = styled.button`
  width: ${(props) => props.width || "7rem"};
  height: ${(props) => props.height || "3.625rem"};
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
