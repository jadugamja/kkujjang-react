import React from "react";
import PropTypes from "prop-types";

import {
  PasswordRequirementWrapper,
  PasswordRequirementMeassage
} from "./PasswordRequirementStyle";

const PasswordRequirement = (props) => {
  const { type } = props;
  const password = props.pwValue;
  const passwordCheck = props.pwCheckValue;

  // 비밀번호 조건 정규표현식
  // const isLengthValid = password.length >= 7 && password.length <= 30;
  // const hasNumber = /\d/.test(password);
  // const hasUppercaseAndLowercase = /[A-Za-z]/.test(password);
  // const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  // const isMatch = password === passwordCheck;

  return (
    <PasswordRequirementWrapper>
      {type === "english" && (
        <PasswordRequirementMeassage>영어 대소문자</PasswordRequirementMeassage>
      )}
      {type === "number" && (
        <PasswordRequirementMeassage>숫자</PasswordRequirementMeassage>
      )}
      {type === "specialCharacter" && (
        <PasswordRequirementMeassage>특수문자</PasswordRequirementMeassage>
      )}
      {type === "lenght" && (
        <PasswordRequirementMeassage>7-30자 이내</PasswordRequirementMeassage>
      )}
      {type === "match" && (
        <PasswordRequirementMeassage>비밀번호 일치</PasswordRequirementMeassage>
      )}
    </PasswordRequirementWrapper>
  );
};

PasswordRequirement.propTypes = {
  type: PropTypes.string,
  pwValue: PropTypes.string,
  pwCheckValue: PropTypes.string
};

export default PasswordRequirement;
