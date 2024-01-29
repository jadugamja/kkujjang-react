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
import WebModal from "@/components/Web/Shared/Form/ValidationMessage";

// ====== custom hooks import =====
import { useIdValidation, usePasswordValidation } from "@/hooks/useValidation";

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
  const [idError, setIdError] = useState(""); // id validton error state
  const [pwError, setPwError] = useState(""); // pw validton error state
  const [confirmPwError, setConfirmPwError] = useState(""); // confirm pw validton error state
  const [duplicationError, setDuplicationError] = useState(""); // id duplication error state
  const [isAuthMath, setIsAuthMath] = useState(false); // 인증번호 일치 state
  const [authModalOpen, setAuthModalOpen] = useState(false); // 인증번호 불일치 시 출력되는 인증번호 불일치 알림 modal state
  const [signupModalOpen, setSignupModalOpen] = useState(false); // API 호출 전 출력되는 회원 가입 실패 알림 modal state

  // 아이디 중복 확인
  const handleDuplicateId = () => {
    // 아이디 중복확인 API 코드

    const result = "success";
    const message = "아이디 사용 가능";

    if (result === "success") {
      alert(message);
    } else {
      // 경고 메시지 출력
      setDuplicationError("사용할 수 없는 아이디입니다");
    }
  };

  // 인증번호 검증
  const handlePhoneNumberAuth = () => {
    // 인증번호 검증 API 코드

    const result = "success";

    if (result === "success") {
      setIsAuthMath(true);
    } else {
      // 경고 모달 출력
      setAuthModalOpen(true);
    }
  };

  // 회원가입 버튼 클릭 시 회원가입 진행
  const handleSignup = () => {
    // 유효성 검사 및 예외처리
    const id = idRef.current.getValue();
    const password = passwordRef.current.getValue();
    const confirmPassword = confirmPasswordRef.current.getValue();

    const idRegex = /^[a-z0-9]{7,30}$/;
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+{}|:"<>?]{7,30}$/;

    if (!idRegex.test(id)) {
      setIdError("아이디 형식이 올바르지 않습니다");
      return;
    }

    if (!pwRegex.test(password)) {
      setPwError("비밀번호 형식이 올바르지 않습니다");
      return;
    }

    if (!password === confirmPassword && !confirmPassword.trim()) {
      setConfirmPwError("비밀번호가 일치하지 않습니다");
      return;
    }

    // 아이디, 비밀번호, 비밀번호 유효성 검사 통과 및 중복 확인 통과, 인증 번호 일치 시에만 호출
    // 회원가입 API 코드
    alert("회원가입 성공");

    // setIdError("");
    // setPwError("");
    // setConfirmPwError("");
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
            <SignupInputFieldWrapper dir="col">
              <InputField hasLabel={true} name="id" ref={idRef} />
            </SignupInputFieldWrapper>
            <DuplicationButton onClick={handleDuplicateId}>중복 확인</DuplicationButton>
          </SignupInputFieldWrapper>
          {duplicationError && <ValidationMessage message={duplicationError} />}
          {idError && <ValidationMessage message={idError} />}
        </SignupInputFieldWrapper>
        {/* {비밀번호 input field} */}
        <SignupInputFieldWrapper dir="col" marginBottom="15px">
          <InputField hasLabel={true} name="password" ref={passwordRef} />
          {pwError && <ValidationMessage message={pwError} />}
        </SignupInputFieldWrapper>
        {/* 비밀번호 확인 input field */}
        <SignupInputFieldWrapper dir="col" marginBottom="15px">
          <InputField hasLabel={true} name="confirmPassword" ref={confirmPasswordRef} />
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
