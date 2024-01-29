import React from "react";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

import FormTitle from "@/components/Web/Shared/Form/FormTitle";
import InputField from "@/components/Web/Shared/Form/InputField";
import Button from "@/components/Web/Shared/Buttons/Button";

// ===== style ======
const ChangepwFormContainer = styled(FlexBox)`
  width: ${(props) => props.width || "40.75rem"};
  height: ${(props) => props.height || "fit-content"};
`;

// ===== component ======
const ChangepwForm = () => {
  return (
    <ChangepwFormContainer dir="col">
      <FormTitle type="changepw"></FormTitle>
      <InputField
        label="비밀번호"
        type="password"
        name="password"
        placeholder="비밀번호 입력"
        onChange=""
      />
      <InputField
        label="비밀번호 확인"
        type="password"
        name="password_check"
        placeholder="비밀번호 확인"
        onChange=""
      />
      <Button type="bigBrown" message="변경하기"></Button>
    </ChangepwFormContainer>
  );
};

ChangepwForm.propTypes = {};

export default ChangepwForm;
