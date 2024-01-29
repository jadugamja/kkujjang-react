import React from "react";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

import FormTitle from "@/components/Web/Shared/Form/FormTitle";
import InputField from "@/components/Web/Shared/Form/InputField";
import Button from "@/components/Web/Shared/Buttons/Button";

// ===== style ======
const WithdrawalFormContainer = styled(FlexBox)`
  width: ${(props) => props.width || "40.75rem"};
  height: ${(props) => props.height || "fit-content"};
`;

// ===== component ======
const WithdrawalForm = () => {
  return (
    <WithdrawalFormContainer dir="col">
      <FormTitle type="withdrawal"></FormTitle>
      <InputField name="id"></InputField>
      <InputField name="password"></InputField>
      <Button type="bigBrown" message="탈퇴하기"></Button>
    </WithdrawalFormContainer>
  );
};

WithdrawalForm.propTypes = {};

export default WithdrawalForm;
