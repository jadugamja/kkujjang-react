import React from "react";
import PropTypes from "prop-types";

import { useRecoilState } from "recoil";
import { isModalOpenState } from "@/recoil/ModalState.js";

import {
  ModalBackground,
  ModalWrapper,
  ModalHeader,
  ExitMiniCircle,
  ModalContent,
  ModalMessage,
  VanWrapper,
  VanInputWrapper,
  VanInput,
  VanTextAreaWrapper,
  VanTextArea,
  VanButtonWrapper,
  VanButton,
  ButtonContainer
} from "./WebModalStyle";
import Button from "../Buttons/Button.jsx";

const WebModal = ({ hasButton, isVan, isMoving, message }) => {
  const [isOpen, setIsOpen] = useRecoilState(isModalOpenState);

  const handelExit = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ModalBackground onClick={handelExit}></ModalBackground>
      <ModalWrapper>
        <ModalHeader row="end" col="center">
          <ExitMiniCircle onClick={handelExit}></ExitMiniCircle>
        </ModalHeader>
        <ModalContent dir="col" row="center" col="center" height={isVan && "25.438rem"}>
          {hasButton && (
            <>
              <ModalMessage>{message}</ModalMessage>
              {isMoving ? (
                <ButtonContainer row="evenly">
                  <Button key="change" type="modal" message="비밀번호 변경" />
                  <Button key="exit" type="modal" message="취소" />
                </ButtonContainer>
              ) : (
                <Button key="confirm" type="modal" message="확인" />
              )}
            </>
          )}
          {isVan && (
            <>
              <VanWrapper col="center">
                <VanInputWrapper>
                  <ModalMessage paddingRight="15px">밴 일수</ModalMessage>
                  <VanInput></VanInput>
                </VanInputWrapper>
                <VanTextAreaWrapper>
                  <ModalMessage paddingRight="15px">밴 사유</ModalMessage>
                  <VanTextArea></VanTextArea>
                </VanTextAreaWrapper>
                <VanButtonWrapper row="center">
                  <VanButton>밴</VanButton>
                </VanButtonWrapper>
              </VanWrapper>
            </>
          )}
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

WebModal.propTypes = {
  isVan: PropTypes.bool,
  hasButton: PropTypes.bool,
  isMoving: PropTypes.bool,
  message: PropTypes.string
};

export default WebModal;
