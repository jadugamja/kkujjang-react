import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

// ===== hooks import =====
import useAxios from "@/hooks/useAxios";

// ====== components import =====
import FormTitle from "@/components/Web/Shared/Form/FormTitle";
import InputField from "@/components/Web/Shared/Form/InputField";
import PhoneNumberAuth from "@/components/Web/Shared/Form/PhoneNumberAuth";
import Button from "@/components/Web/Shared/Buttons/Button";
import ValidationMessage from "@/components/Web/Shared/Form/ValidationMessage";
import WebModal from "@/components/Web/Shared/Modal/WebModal";

// ===== style ======
const SignupFormContainer = styled(FlexBox)`
  width: 100%;
  height: ${(props) => props.height || "fit-content"};
`;

const SignupInputFieldWrapper = styled(FlexBox)`
  flex-grow: ${(props) => props.flexGrow};
  height: ${(props) => props.height || "fit-content"};
  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
`;

export const DuplicationButton = styled.button`
  width: ${(props) => props.width || "8.3rem"};
  height: ${(props) => props.width || "3.8rem"};
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
  // (에러 메시지 관련)
  const [idError, setIdError] = useState(""); // 아이디 유효성 검사 에러 메시지 state
  const [pwError, setPwError] = useState(""); // 비밀번호 유효성 검사 에러 메시지 state
  const [confirmPwError, setConfirmPwError] = useState(""); // 비밀번호 일치 검사 에러 메시지 state
  const [duplicationError, setDuplicationError] = useState(""); // 아이디 중복 확인 에러 메시지 state
  // (modal 관련)
  const [authModalOpen, setAuthModalOpen] = useState(false); // 인증번호 불일치 알림 modal state
  const [signupModalOpen, setSignupModalOpen] = useState(false); // 회원 가입 실패 알림 modal state
  const [duplicationModalOpen, setDuplicationModalOpen] = useState(false); // 중복 확인 성공 modal state
  // (인증번호 관련)
  const [isAuthMath, setIsAuthMath] = useState(false); // 검증 성공 여부 state
  const [phoneNumber, setPhoneNumber] = useState(""); // 전화번호
  // (입력 필드 관련)
  const [inputDisabled, setInputDisabled] = useState(false); // 입력 필드 활성/비활성 상태
  // (api 관련)
  const [apiConfig, setApiConfig] = useState(null);
  const { response, error, loading, fetchData } = useAxios(apiConfig, false);

  // === navigate ===
  const navigate = useNavigate();

  // === cookie ===
  const [cookies] = useCookies(["smsAuthId"]);

  useEffect(() => {
    if (apiConfig !== null) {
      fetchData();
    }
  }, [apiConfig]);

  useEffect(() => {
    if (response?.result === true) {
      if (apiConfig?.url.startsWith("/user/username/availability?username=")) {
        // 중복 확인 성공
        setDuplicationError("");
        setDuplicationModalOpen(true);
        setInputDisabled(true);
      } else if (apiConfig?.url.startsWith("/user")) {
        // 회원가입 성공
        navigate(`/member/login`);
      }
    } else if (error) {
      if (apiConfig?.url.startsWith("/user/username/availability?username=")) {
        // 중복 확인 실패
        setDuplicationError("사용할 수 없는 아이디입니다.");
        setIdError("");
      } else if (apiConfig?.url.startsWith("/user")) {
        // 회원가입 실패
        setSignupModalOpen(true);
      }
    } else {
      if (apiConfig?.url.startsWith("/user/username/availability?username=")) {
        // 중복 확인 실패
        setDuplicationError("사용할 수 없는 아이디입니다.");
        setIdError("");
      } else if (apiConfig?.url.startsWith("/user")) {
        // 회원가입 실패
        setSignupModalOpen(true);
      }
    }
  }, [response, error]);

  // 아이디 중복 확인
  const handleDuplicateId = () => {
    const id = idRef.current.value;
    const idRegex = /^[a-z0-9]{7,30}$/;

    // 아이디 유효성 검사 진행
    if (!idRegex.test(id)) {
      console.log("Fail");
    } else {
      // 아이디 중복확인 API 코드
      setApiConfig({
        method: "get",
        url: `/user/username/availability?username=${id}`
      });
    }
  };

  // 인증번호 검증
  const handlePhoneNumberAuth = (response, phoneNumber) => {
    if (response !== null) {
      setIsAuthMath(true);
      setPhoneNumber(phoneNumber);
    } else {
      // 경고 모달 출력
      setAuthModalOpen(true);
    }
  };

  // 아이디 유효성 검사
  const handleIdValidation = () => {
    const id = idRef.current.value;
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

    if (password !== confirmPassword || confirmPassword.trim() === "") {
      setConfirmPwError("비밀번호가 일치하지 않습니다");
    } else {
      setConfirmPwError("");
    }
  };

  // 회원가입
  const handleSignup = () => {
    if (!idError && !pwError && !confirmPwError && !duplicationError && isAuthMath) {
      const id = idRef.current.value;
      const password = passwordRef.current.value;
      debugger;
      // 회원가입 API 코드
      setApiConfig({
        method: "post",
        url: "/user",
        headers: { smsAuthId: cookies.smsAuthId },
        data: {
          username: id,
          password: password,
          phone: phoneNumber
        }
      });
    } else {
      setSignupModalOpen(true);
    }
  };

  return (
    <>
      {/* 인증 실패 Modal */}
      {authModalOpen && (
        <WebModal setIsOpen={setAuthModalOpen} hasButton={true}>
          인증번호가 일치하지 않습니다.
        </WebModal>
      )}

      {/* 회원가입 실패 Modal */}
      {signupModalOpen && (
        <WebModal setIsOpen={setSignupModalOpen} hasButton={true}>
          회원 정보를 확인해 주세요.
        </WebModal>
      )}

      {/* 중복 확인 Modal */}
      {duplicationModalOpen && (
        <WebModal setIsOpen={setDuplicationModalOpen} hasButton={true}>
          사용 가능한 아이디입니다.
        </WebModal>
      )}

      <SignupFormContainer dir="col">
        <FormTitle type="signup" />

        {/* {아이디 input field} */}
        <SignupInputFieldWrapper dir="col" marginBottom="24px">
          <SignupInputFieldWrapper row="between" col="end">
            <SignupInputFieldWrapper flexGrow="0.75" dir="col">
              <InputField
                hasLabel={true}
                name="id"
                inputRef={idRef}
                isDataForm={true}
                onBlur={handleIdValidation}
                disabled={inputDisabled}
              />
            </SignupInputFieldWrapper>
            <DuplicationButton onClick={handleDuplicateId}>중복 확인</DuplicationButton>
          </SignupInputFieldWrapper>
          {duplicationError && <ValidationMessage message={duplicationError} />}
          {idError && <ValidationMessage message={idError} />}
        </SignupInputFieldWrapper>

        {/* {비밀번호 input field} */}
        <SignupInputFieldWrapper dir="col" marginBottom="24px">
          <InputField
            hasLabel={true}
            name="password"
            inputRef={passwordRef}
            isDataForm={true}
            onBlur={handlePasswordValidation}
          />
          {pwError && <ValidationMessage message={pwError} />}
        </SignupInputFieldWrapper>

        {/* 비밀번호 확인 input field */}
        <SignupInputFieldWrapper dir="col" marginBottom="24px">
          <InputField
            hasLabel={true}
            name="confirmPassword"
            inputRef={confirmPasswordRef}
            onBlur={handleConfirmPassword}
          />
          {confirmPwError && <ValidationMessage message={confirmPwError} />}
        </SignupInputFieldWrapper>

        {/* 전화번호 인증 */}
        <PhoneNumberAuth onVerificationResult={handlePhoneNumberAuth} />

        {/* 회원가입 button */}
        <SignupInputFieldWrapper marginTop="21px">
          <Button type="bigBrown" message="회원가입" onClick={handleSignup} />
        </SignupInputFieldWrapper>
      </SignupFormContainer>
    </>
  );
};

// SignupForm.propTypes = {};

export default SignupForm;
