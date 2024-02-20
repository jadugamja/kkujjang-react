import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import Timer from "./Timer";
import {
  ItemWrapper,
  InputFieldsWrapper,
  Label,
  PhoneNumberInput,
  VerificationInput,
  Seperator,
  SmallTransparentButton,
  CheckImg,
  SuccessBox
} from "./PhoneNumberStyle";
import ValidationMessage from "./ValidationMessage";
import WebModal from "../Modal/WebModal";
import CheckIcon from "@/assets/images/white-check.png";

const PhoneNumberAuth = ({ onVerificationResult }) => {
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [validMessage, setValidMessage] = useState("");
  const [isSentPhoneNumber, setIsSentPhoneNumber] = useState(false); // 전화번호 발송 여부
  const [initialTime, setInitialTime] = useState(null); // 타이머 유효 시작 시간
  const [timeOut, setTimeOut] = useState(false); // 인증 번호 유효시간 만료 여부
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isVerifying, setIsVerifying] = useState(false); // 전화번호 인증 성공 여부

  // 전화 번호
  const numbersRef = Array(3)
    .fill()
    ?.map(() => React.createRef());
  // 인증 번호
  const verificationRef = useRef();

  // 입력칸
  const handleChange = (e) => {
    const refIndex = numbersRef.findIndex((ref) => ref.current === e.target);
    // 공백 및 숫자 이외의 문자 제거
    e.target.value = e.target.value.replace(/\s|\D/g, "");

    if (
      (refIndex === 0 && e.target.value.length === 3) ||
      (refIndex === 1 && e.target.value.length === 4)
    ) {
      const nextInput = numbersRef[refIndex + 1].current;

      if (nextInput) {
        nextInput.focus();
      }
    }

    if (refIndex === 2 && e.target.value.length > 4) {
      e.target.value = e.target.value.slice(0, 4);
    }

    if (verificationRef.current === e.target && e.target.value.length > 6) {
      e.target.value = e.target.value.slice(0, 6);
    }
  };

  // 전화 번호 전달 및 유효성 검사
  const sendPhoneNumber = () => {
    const phoneNumber = numbersRef.map((ref) => ref.current.value).join("-");

    const regex = /^010-\d{4}-\d{4}$/;
    if (!regex.test(phoneNumber)) {
      setIsValidPhoneNumber(false);
      setValidMessage("010으로 시작하는 총 11자의 숫자를 입력하세요.");
      return;
    }

    // SMS API 호출 코드

    // res.ok 시 호출
    setIsValidPhoneNumber(true);
    setIsSentPhoneNumber(true);
    setValidMessage("인증번호가 발송되었습니다.");
    setInitialTime(180);
  };

  // 인증 번호 전달
  const sendVerification = () => {
    const verification = verificationRef.current.value;
    const regex = /^\d{4}$/;

    if (!regex.test(verification)) {
      setIsModalOpen(true);
      setModalMessage("인증 번호가 일치하지 않습니다.");
    } else {
      // 인증 번호 검증 API 호출 코드

      // 프론트엔드 테스트를 위한 백엔드 임시 코드
      const result = true;

      if (!result) {
        setIsModalOpen(true);
        setModalMessage("인증 번호가 일치하지 않습니다.");
      } else {
        setIsVerifying(true);
        onVerificationResult(result);
        setValidMessage("");
      }
    }

    // 인증 번호 유효 시간 초과
    if (timeOut) {
      // 임시 경고
      setIsModalOpen(true);
      setModalMessage("인증 번호가 만료되었습니다.");
      return;
    }
  };

  const handleTimeOut = () => {
    setTimeOut(true);
  };

  return (
    <ItemWrapper dir="col">
      <ItemWrapper row="between" marginBottom="24px">
        <Label width="100%">
          전화번호
          <ItemWrapper row="between" col="center" marginTop="5px">
            <InputFieldsWrapper row="between" col="center" onChange={handleChange}>
              <PhoneNumberInput type="text" placeholder="010" ref={numbersRef[0]} />
              <Seperator>-</Seperator>
              <PhoneNumberInput type="text" ref={numbersRef[1]} />
              <Seperator>-</Seperator>
              <PhoneNumberInput type="text" ref={numbersRef[2]} />
            </InputFieldsWrapper>
            {isVerifying ? (
              <>
                <SuccessBox row="center">
                  <ItemWrapper col="center">
                    <CheckImg src={CheckIcon} />
                    인증 완료
                  </ItemWrapper>
                </SuccessBox>
              </>
            ) : (
              <SmallTransparentButton onClick={sendPhoneNumber}>
                인증 요청
              </SmallTransparentButton>
            )}
          </ItemWrapper>
          {!isValidPhoneNumber ? (
            <ValidationMessage message={validMessage} fontWeight="400" />
          ) : (
            isSentPhoneNumber && (
              <ValidationMessage
                message={validMessage}
                fontWeight="400"
                color="#686868"
              />
            )
          )}
        </Label>
      </ItemWrapper>
      <>
        {!isVerifying && isSentPhoneNumber && (
          <ItemWrapper marginBottom="24px">
            <Label>
              인증
              <ItemWrapper
                row="start"
                col="center"
                marginTop="5px"
                onChange={handleChange}
              >
                <VerificationInput
                  type="text"
                  width="verification"
                  ref={verificationRef}
                  placeholder="인증번호"
                />
                <Timer initialTime={initialTime} onTimeOut={handleTimeOut} />
                <SmallTransparentButton type="verification" onClick={sendVerification}>
                  확인
                </SmallTransparentButton>
              </ItemWrapper>
            </Label>
          </ItemWrapper>
        )}
      </>
      {isModalOpen && (
        <WebModal
          setIsOpen={setIsModalOpen}
          message="인증번호가 일치하지 않습니다."
          hasButton={true}
        />
      )}
    </ItemWrapper>
  );
};

PhoneNumberAuth.propTypes = {
  onVerificationResult: PropTypes.func
};

export default PhoneNumberAuth;
