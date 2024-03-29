import React from "react";
import PropTypes from "prop-types";

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

const WebModal = ({
  onClick,
  setIsOpen,
  hasButton,
  isVan,
  isWithdrawal = false,
  handleWithdrawal,
  children
}) => {
  return (
    <>
      <ModalBackground onClick={() => setIsOpen(false)}></ModalBackground>
      <ModalWrapper>
        <ModalHeader row="end" col="center">
          <ExitMiniCircle onClick={() => setIsOpen(false)}></ExitMiniCircle>
        </ModalHeader>
        <ModalContent dir="col" row="center" col="center" height={isVan && "25.438rem"}>
          {hasButton && (
            <>
              <ModalMessage>{children}</ModalMessage>
              {isWithdrawal ? (
                <ButtonContainer row="evenly">
                  <Button
                    key="withdrawal"
                    type="modal"
                    message="확인"
                    onClick={handleWithdrawal}
                  />
                  <Button
                    key="exit"
                    type="modal"
                    message="취소"
                    onClick={() => setIsOpen(false)}
                  />
                </ButtonContainer>
              ) : (
                <Button key="confirm" type="modal" message="확인" onClick={onClick} />
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
                  <VanButton onClick={onClick}>밴</VanButton>
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
  onClick: PropTypes.func,
  setIsOpen: PropTypes.func,
  isVan: PropTypes.bool,
  hasButton: PropTypes.bool,
  isWithdrawal: PropTypes.bool,
  handleWithdrawal: PropTypes.func,
  children: PropTypes.node
};

export default WebModal;
