import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

// ====== components import =====
import FormTitle from "@/components/Web/Shared/Form/FormTitle";
import InputField from "@/components/Web/Shared/Form/InputField";
import PhoneNumberAuth from "@/components/Web/Shared/Form/PhoneNumberAuth";
import Button from "@/components/Web/Shared/Buttons/Button";
import ValidationMessage from "@/components/Web/Shared/Form/ValidationMessage";
import WebModal from "@/components/Web/Shared/Modal/WebModal";

// ===== style ======
const SignupFormContainer = styled(FlexBox)`
  width: ${(props) => props.width || "40.75rem"};
  height: ${(props) => props.height || "fit-content"};
`;

const SignupInputFieldWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "40.75rem"};
  height: ${(props) => props.height || "fit-content"};
  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
`;

export const DuplicationButton = styled.button`
  width: ${(props) => props.width || "8.5rem"};
  height: ${(props) => props.width || "4.3rem"};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 700;
  background-color: transparent;
  color: #393939;
  border: 2px solid ${({ theme }) => theme.colors.gray500};
`;

// ===== component ======
const SignupForm = () => {
  // === ref ===
  const idRef = useRef(""); // 아이디
  const passwordRef = useRef(""); // 비밀번호
  const confirmPasswordRef = useRef(""); // 비밀번호 확인

  // === state ===
  const [idError, setIdError] = useState(""); // 아이디 유효성 검사 에러 메시지 state
  const [pwError, setPwError] = useState(""); // 비밀번호 유효성 검사 에러 메시지 state
  const [confirmPwError, setConfirmPwError] = useState(""); // 비밀번호 일치 검사 에러 메시지 state
  const [duplicationError, setDuplicationError] = useState(""); // 아이디 중복 확인 에러 메시지 state
  const [isAuthMath, setIsAuthMath] = useState(false); // 인증번호 일치 state
  const [authModalOpen, setAuthModalOpen] = useState(false); // 인증번호 불일치 알림 modal state
  const [signupModalOpen, setSignupModalOpen] = useState(false); // 회원 가입 실패 알림 modal state

  // 아이디 중복 확인
  const handleDuplicateId = () => {
    // 아이디 중복확인 API 코드
    const result = "success";

    if (result === "success") {
      alert("사용 가능한 아이디입니다");
    } else {
      setDuplicationError("사용할 수 없는 아이디입니다");
      setIdError("");
    }
  };

  // 인증번호 검증
  const handlePhoneNumberAuth = () => {
    // 인증번호 검증 결과 받아오기
    const result = "success";

    if (result === "success") {
      setIsAuthMath(true);
    } else {
      setAuthModalOpen(true);
    }
  };

  // 아이디 유효성 검사
  const handleIdValidation = () => {
    const id = idRef.current.value;
    console.log(id);
    const idRegex = /^[a-z0-9]{7,30}$/;

    if (!idRegex.test(id)) {
      setIdError("아이디 형식이 올바르지 않습니다");
      setDuplicationError("");
    } else {
      setIdError("");
    }
  };

  // 비밀번호 유효성 검사
  const handlePasswordValidation = () => {
    const password = passwordRef.current.value;
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+{}|:"<>?]{7,30}$/;

    if (!pwRegex.test(password)) {
      setPwError("비밀번호 형식이 올바르지 않습니다");
    } else {
      setPwError("");
    }
  };

  // 비밀번호 일치 검사
  const handleConfirmPassword = () => {
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword || !confirmPassword.trim()) {
      setConfirmPwError("비밀번호가 일치하지 않습니다");
    } else {
      setConfirmPwError("");
    }
  };

  // 회원가입
  const handleSignup = () => {
    if (!idError && !pwError && !confirmPwError && !duplicationError && isAuthMath) {
      // 회원가입 API 코드
    } else {
      setSignupModalOpen(true);
    }
  };

  return (
    <>
      {authModalOpen && (
        <WebModal hasButton={true} message="인증번호가 일치하지 않습니다." />
      )}
      {signupModalOpen && (
        <WebModal hasButton={true} message="회원 정보를 확인해 주세요." />
      )}
      <SignupFormContainer dir="col">
        <FormTitle type="signup" />
        {/* {아이디 input field} */}
        <SignupInputFieldWrapper dir="col" marginBottom="15px">
          <SignupInputFieldWrapper row="between" col="end">
            <SignupInputFieldWrapper width="29.75rem" dir="col">
              <InputField
                hasLabel={true}
                name="id"
                inputRef={idRef}
                onBlur={handleIdValidation}
              />
            </SignupInputFieldWrapper>
            <DuplicationButton onClick={handleDuplicateId}>중복 확인</DuplicationButton>
          </SignupInputFieldWrapper>
          {duplicationError && <ValidationMessage message={duplicationError} />}
          {idError && <ValidationMessage message={idError} />}
        </SignupInputFieldWrapper>
        {/* {비밀번호 input field} */}
        <SignupInputFieldWrapper dir="col" marginBottom="15px">
          <InputField
            hasLabel={true}
            name="password"
            inputRef={passwordRef}
            onBlur={handlePasswordValidation}
          />
          {pwError && <ValidationMessage message={pwError} />}
        </SignupInputFieldWrapper>
        {/* 비밀번호 확인 input field */}
        <SignupInputFieldWrapper dir="col" marginBottom="15px">
          <InputField
            hasLabel={true}
            name="confirmPassword"
            inputRef={confirmPasswordRef}
            onBlur={handleConfirmPassword}
          />
          {confirmPwError && <ValidationMessage message={confirmPwError} />}
        </SignupInputFieldWrapper>
        {/* 전화번호 인증 */}
        <SignupInputFieldWrapper dir="col" marginBottom="15px">
          <PhoneNumberAuth />
        </SignupInputFieldWrapper>
        {/* 회원가입 button */}
        <Button type="bigBrown" message="회원가입" onClick={handleSignup} />
      </SignupFormContainer>
    </>
  );
};

SignupForm.propTypes = {};

export default SignupForm;
