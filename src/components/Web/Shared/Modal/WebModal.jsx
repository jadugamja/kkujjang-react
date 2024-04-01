import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  ModalBackground,
  ModalWrapper,
  ModalHeader,
  ExitMiniCircle,
  ModalContent,
  ModalMessage,
  BanWrapper,
  BanInputWrapper,
  BanInput,
  BanTextAreaWrapper,
  BanTextArea,
  BanButtonWrapper,
  BanButton,
  ButtonContainer
} from "./WebModalStyle";
import Button from "../Buttons/Button.jsx";
import { SPECIAL_CHARACTERS_REGEX } from "@/services/regexp";
import { POST_TITLE_REGEX } from "../../../../services/regexp.js";

const WebModal = ({
  onClick,
  setIsOpen,
  hasButton,
  isBan,
  isWithdrawal = false,
  handleWithdrawal,
  children
}) => {
  const [bannedDays, setBannedDays] = useState(1);
  const [bannedReason, setBannedReason] = useState("");

  const onValidateChange = (e) => {
    const t = e.target;
    let v = t.value;

    if (t.type === "number") {
      v = parseInt(t.value);

      if (isNaN(parseInt(v))) {
        return;
      }

      if (SPECIAL_CHARACTERS_REGEX.test(v)) {
        return;
      }

      if (v < parseInt(t.min)) {
        v = parseInt(t.min);
      } else if (v > parseInt(t.max)) {
        v = parseInt(t.max);
      }

      setBannedDays(v);
    } else if (t.type === "textarea") {
      if (v.length > t.maxLength || !POST_TITLE_REGEX.test(v)) {
        return;
      }

      setBannedReason(v);
    }
  };

  return (
    <>
      <ModalBackground onClick={() => setIsOpen(false)}></ModalBackground>
      <ModalWrapper>
        <ModalHeader row="end" col="center">
          <ExitMiniCircle onClick={() => setIsOpen(false)}></ExitMiniCircle>
        </ModalHeader>
        <ModalContent dir="col" row="center" col="center" height={isBan && "25.438rem"}>
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
          {isBan && (
            <BanWrapper col="center">
              <BanInputWrapper>
                <ModalMessage paddingRight="15px">밴 일수</ModalMessage>
                <BanInput
                  type="number"
                  min={1}
                  max={200}
                  step={1}
                  value={bannedDays}
                  onChange={onValidateChange}
                />
              </BanInputWrapper>
              <BanTextAreaWrapper>
                <ModalMessage paddingRight="15px">밴 사유</ModalMessage>
                <BanTextArea
                  maxLength={100}
                  value={bannedReason}
                  onChange={onValidateChange}
                />
              </BanTextAreaWrapper>
              <BanButtonWrapper row="center">
                <BanButton
                  onClick={() => onClick(bannedDays, bannedReason)}
                  width="11rem"
                >
                  사용자 비활성화
                </BanButton>
              </BanButtonWrapper>
            </BanWrapper>
          )}
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

WebModal.propTypes = {
  onClick: PropTypes.func,
  setIsOpen: PropTypes.func,
  isBan: PropTypes.bool,
  hasButton: PropTypes.bool,
  isWithdrawal: PropTypes.bool,
  handleWithdrawal: PropTypes.func,
  children: PropTypes.node
};

export default WebModal;
