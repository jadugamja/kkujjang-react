import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

// ===== components import =====
import FormTitle from "@/components/Web/Shared/Form/FormTitle";
import InputField from "@/components/Web/Shared/Form/InputField";
import Button from "@/components/Web/Shared/Buttons/Button";
import ValidationMessage from "@/components/Web/Shared/Form/ValidationMessage";

// ===== style ======
const ChangepwFormFlexContainer = styled(FlexBox)`
  width: ${(props) => props.width || "40.75rem"};
  height: ${(props) => props.height || "fit-content"};
`;

const ChangepwFormContainer = styled.div`
  width: ${(props) => props.width || "40.75rem"};
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
  const [isSucess, setIsSucess] = useState(false); // validton test state

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

  // 비밀번호 변경
  const handleChange = () => {
    if (!pwError && !confirmPwError) {
      setPwError("");
      setConfirmPwError("");
      // 비밀번호 변경 API 호출
    } else {
    }
  };

  return (
    <ChangepwFormFlexContainer dir="col">
      <FormTitle type="changepw" marginTop="0px" marginBottom="0px"></FormTitle>
      <ChangepwText>새로운 비밀번호를 입력해 주세요.</ChangepwText>
      <ChangepwFormContainer marginBottom="7px">
        <InputField
          name="password"
          inputRef={passwordRef}
          onBlur={handlePasswordValidation}
        />
        {pwError && <ValidationMessage message={pwError} />}
      </ChangepwFormContainer>
      <ChangepwFormContainer marginBottom="15px">
        <InputField
          name="confirmPassword"
          inputRef={confirmPasswordRef}
          onBlur={handleConfirmPassword}
        />
        {confirmPwError && <ValidationMessage message={confirmPwError} />}
      </ChangepwFormContainer>
      <Button type="bigBrown" message="변경하기" onClick={handleChange} />
    </ChangepwFormFlexContainer>
  );
};

ChangepwForm.propTypes = {};

export default ChangepwForm;
