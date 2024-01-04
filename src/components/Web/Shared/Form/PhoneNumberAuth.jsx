import React, { useRef, useState } from "react";

import Timer from "./Timer";
import {
  ContentWrapper,
  ItemWrapper,
  PhoneNumberWrapper,
  PhoneNumberLabel,
  InputFieldsWrapper,
  PhoneNumberInput,
  VerificationWrapper,
  VerificationLabel,
  VerificationInput,
  Seperator,
  SmallTransparentButton
} from "./PhoneNumberStyle";

const PhoneNumberAuth = ({}) => {
  const [isSentPhoneNumber, setIsSentPhoneNumber] = useState(false); // 전화번호 발송 여부
  const [initialTime, setInitialTime] = useState(null); // 타이머 유효 시작 시간
  const [timeOut, setTimeOut] = useState(false); // 인증 번호 유효시간 만료 여부

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
      // 임시 경고
      alert("전화번호는 010으로 시작하고, 총 11자의 숫자여야 합니다.");
      return;
    }

    // SMS API 호출 코드

    // res.ok 시 호출
    setIsSentPhoneNumber(true);
    setInitialTime(180);
  };

  // 인증 번호 전달
  const sendVerification = () => {
    const verification = verificationRef.current.value;

    // 인증 번호 검증 API 호출 코드

    // 인증 번호 유효 시간 초과
    if (timeOut) {
      // 임시 경고
      alert("인증 시간이 만료되었습니다.");
      return;
    }
  };

  const handleTimeOut = () => {
    setTimeOut(true);
  };

  return (
    <ContentWrapper dir="col">
      <ItemWrapper row="between">
        <PhoneNumberLabel>
          전화번호
          <PhoneNumberWrapper row="between" col="center">
            <InputFieldsWrapper row="between" col="center" onChange={handleChange}>
              <PhoneNumberInput type="text" placeholder="010" ref={numbersRef[0]} />
              <Seperator>-</Seperator>
              <PhoneNumberInput type="text" ref={numbersRef[1]} />
              <Seperator>-</Seperator>
              <PhoneNumberInput type="text" ref={numbersRef[2]} />
            </InputFieldsWrapper>
            <SmallTransparentButton onClick={sendPhoneNumber}>
              인증 요청
            </SmallTransparentButton>
          </PhoneNumberWrapper>
        </PhoneNumberLabel>
      </ItemWrapper>
      {isSentPhoneNumber && (
        <VerificationWrapper>
          <VerificationLabel>
            인증
            <PhoneNumberWrapper row="start" col="center" onChange={handleChange}>
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
            </PhoneNumberWrapper>
          </VerificationLabel>
        </VerificationWrapper>
      )}
    </ContentWrapper>
  );
};

export default PhoneNumberAuth;
