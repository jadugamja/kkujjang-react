import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

// ===== hooks import =====
import useAxios from "@/hooks/useAxios";

// ===== components import =====
import FormTitle from "@/components/Web/Shared/Form/FormTitle";
import InputField from "@/components/Web/Shared/Form/InputField";
import Button from "@/components/Web/Shared/Buttons/Button";
import ValidationMessage from "@/components/Web/Shared/Form/ValidationMessage";
import WebModal from "@/components/Web/Shared/Modal/WebModal";

// ===== style ======
const ChangepwFormFlexContainer = styled(FlexBox)`
  height: ${(props) => props.height || "fit-content"};
`;

const ChangepwFormContainer = styled.div`
  height: ${(props) => props.height || "fit-content"};
  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
`;

const ChangepwText = styled.p`
  color: ${(props) => props.color || "#5E5C65"};
  font-family: "Noto Sans KR";
  font-size: ${(props) => props.fontSize || "19px"};
  font-weight: ${(props) => props.fontWeight || "200"};
`;

// ===== component ======
const ChangepwForm = () => {
  // === ref ===
  const passwordRef = useRef(""); // 비밀번호
  const confirmPasswordRef = useRef(""); // 비밀번호 확인

  // === state ===
  const [pwError, setPwError] = useState(""); // pw validton error state
  const [confirmPwError, setConfirmPwError] = useState(""); // confirm pw validton error state
  // (modal 관련)
  const [failModalOpen, setFailModalOpen] = useState(false); // 비밀번호 변경 실패 modal state
  // (api 관련)
  const [apiConfig, setApiConfig] = useState(null);
  const { response, error, loading, fetchData } = useAxios(apiConfig, false);

  // === navigate ===
  const navigate = useNavigate();

  // === cookie ===
  const [cookies] = useCookies(["passwordChangeAuthId"]);

  useEffect(() => {
    if (apiConfig !== null) {
      fetchData();
    }
  }, [apiConfig]);

  useEffect(() => {
    if (apiConfig?.url.startsWith("/user/find/pw")) {
      if (response !== null) {
        navigate(`/member/login`);
      } else if (error) {
        setFailModalOpen(true);
      } else {
        setFailModalOpen(true);
      }
    }
  }, [response, error]);

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

  // 비밀번호 변경
  const handleChange = () => {
    if (!pwError && !confirmPwError) {
      const password = passwordRef.current.value;
      const confirmPassword = confirmPasswordRef.current.value;

      setPwError("");
      setConfirmPwError("");

      // 비밀번호 변경 API 호출
      setApiConfig({
        method: "put",
        url: "/user/find/pw",
        headers: { passwordChangeAuthId: cookies.passwordChangeAuthId },
        data: {
          newPassword: password,
          newPasswordAgain: confirmPassword
        }
      });
    } else {
      setFailModalOpen(true);
    }
  };

  return (
    <>
      {/* {비밀번호 변경 실패 modal} */}
      {failModalOpen && (
        <WebModal setIsOpen={setFailModalOpen} hasButton={true}>
          비밀번호 변경에 실패했습니다.
        </WebModal>
      )}

      <ChangepwFormFlexContainer dir="col">
        <FormTitle type="changepw" marginTop="0px" marginBottom="0px"></FormTitle>

        {/* 비밀번호 input field */}
        <ChangepwText>새로운 비밀번호를 입력해 주세요.</ChangepwText>
        <ChangepwFormContainer marginBottom="24px">
          <InputField
            name="password"
            inputRef={passwordRef}
            isDataForm={true}
            onBlur={handlePasswordValidation}
          />
          {pwError && <ValidationMessage message={pwError} />}
        </ChangepwFormContainer>

        {/* 비밀번호 확인 input field */}
        <ChangepwFormContainer marginBottom="24px">
          <InputField
            name="confirmPassword"
            inputRef={confirmPasswordRef}
            onBlur={handleConfirmPassword}
          />
          {confirmPwError && <ValidationMessage message={confirmPwError} />}
        </ChangepwFormContainer>

        {/* 비밀번호 변경 button */}
        <ChangepwFormContainer marginTop="10px">
          <Button type="bigBrown" message="변경하기" onClick={handleChange} />
        </ChangepwFormContainer>
      </ChangepwFormFlexContainer>
    </>
  );
};

export default ChangepwForm;
