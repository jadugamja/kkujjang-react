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
  BanInput,
  BanTextArea,
  BanButtonWrapper,
  BanButton,
  ButtonContainer
} from "./WebModalStyle";
import { Container as ContentWrapper } from "@/styles/StyledComponents";
import Button from "../Buttons/Button.jsx";
import { SPECIAL_CHARACTERS_REGEX } from "@/services/regexp";
import { POST_TITLE_REGEX } from "@/services/regexp.js";
import ValidationMessage from "../Form/ValidationMessage.jsx";

const WebModal = ({
  onClick,
  setIsOpen,
  hasButton,
  isBan,
  isWithdrawal = false,
  handleWithdrawal,
  children
}) => {
  const [isEmptyMessage, setIsEmptyMessage] = useState(false);
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
      if (v.length !== 0) {
        setIsEmptyMessage(false);
      } else {
        setIsEmptyMessage(true);
      }

      if (v.length > t.maxLength || !POST_TITLE_REGEX.test(v)) {
        return;
      }

      setBannedReason(v);
    }
  };

  const onValidateSubmit = (e) => {
    e.preventDefault();

    if (bannedReason.length === 0 && !isEmptyMessage) {
      setIsEmptyMessage(true);
      return;
    } else {
      onClick(bannedDays, bannedReason);
    }
  };

  return (
    <>
      <ModalBackground onClick={() => setIsOpen(false)}></ModalBackground>
      <ModalWrapper width={isBan ? "30rem" : "26rem"}>
        <ModalHeader row="end" col="center">
          <ExitMiniCircle onClick={() => setIsOpen(false)}></ExitMiniCircle>
        </ModalHeader>
        <ModalContent
          dir="col"
          row="center"
          col="center"
          height={isBan ? "25.438rem" : "15rem"}
        >
          {hasButton && (
            <>
              <ContentWrapper $display="flex" $col="center" $height="6.25rem">
                <ModalMessage>{children}</ModalMessage>
              </ContentWrapper>
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
            <BanWrapper col="center" onSubmit={onValidateSubmit}>
              <ContentWrapper $display="flex" $row="between" $col="center">
                <ModalMessage>밴 일수</ModalMessage>
                <BanInput
                  type="number"
                  min={1}
                  max={200}
                  step={1}
                  value={bannedDays}
                  onChange={onValidateChange}
                />
              </ContentWrapper>
              <ContentWrapper $display="flex" $row="between" $margin="1.25rem 0 0">
                <ModalMessage>밴 사유</ModalMessage>
                <BanTextArea
                  maxLength={100}
                  value={bannedReason}
                  onChange={onValidateChange}
                />
              </ContentWrapper>
              {isEmptyMessage && (
                <ValidationMessage
                  margin="0.625rem 0 0 6.25rem"
                  message="밴 사유를 입력해주세요."
                />
              )}
              <BanButtonWrapper row="center">
                <BanButton width="11rem">사용자 비활성화</BanButton>
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
