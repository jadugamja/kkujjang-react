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
  // === state ===
  const [pwError, setPwError] = useState(""); // pw validton error state
  const [confirmPwError, setConfirmPwError] = useState(""); // confirm pw validton error state
  const [isSucess, setIsSucess] = useState(false); // validton test state

  // 유효성 검사 및 예외처리
  const handleValidation = () => {};

  // 비밀번호 변경
  const handleChange = () => {
    // 유효성 검사 통과 시에만
    setIsSucess(true);

    if (isSucess) {
      // 비밀번호 변경 API 호출
    } else {
    }
  };

  return (
    <ChangepwFormFlexContainer dir="col">
      <FormTitle type="changepw" marginTop="0px" marginBottom="0px"></FormTitle>
      <ChangepwText>새로운 비밀번호를 입력해 주세요.</ChangepwText>
      <ChangepwFormContainer marginBottom="7px">
        <InputField name="password" />
        {pwError && <ValidationMessage>{pwError}</ValidationMessage>}
      </ChangepwFormContainer>
      <ChangepwFormContainer marginBottom="15px">
        <InputField name="confirmPassword" />
        {confirmPwError && <ValidationMessage>{confirmPwError}</ValidationMessage>}
      </ChangepwFormContainer>
      <Button type="bigBrown" message="변경하기" onClick={handleChange} />
    </ChangepwFormFlexContainer>
  );
};

ChangepwForm.propTypes = {};

export default ChangepwForm;
