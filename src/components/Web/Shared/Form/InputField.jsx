import React, { useRef } from "react";
import PropTypes from "prop-types";

import {
  useIdValidation,
  usePasswordValidation,
  usePasswordCheckValidation
} from "@/hooks/useValidation";
import PasswordRequirement from "./PasswordRequirement";

import { Label, Input, MapWrapper } from "./InputFieldStyle";

const InputField = ({ name, inputType, hasLabel, label, placeholder }) => {
  const inputValueRef = useRef("");
  const { isValid, validateId } = useIdValidation();
  const { conditions, validatePassword } = usePasswordValidation();
  const { isMatch, validatePasswordCheck } = usePasswordCheckValidation();

  const handleValidation = (e) => {
    inputValueRef.current = {
      ...inputValueRef.current,
      [e.target.name || "value"]: e.target.value
    };

    switch (e.target.name) {
      case "id":
        validateId(inputValueRef.current["value"]);
        break;
      case "password":
        validatePassword(inputValueRef.current["value"]);
        break;
      case "password_check":
        validatePasswordCheck(inputValueRef.current["value"]);
        break;
    }
  };

  const messages = ["영어 대소문자", "숫자", "특수문자", "7-30자 이내"];

  return (
    <>
      {hasLabel && <Label>{label}</Label>}
      <Input
        type={inputType}
        name={name}
        placeholder={placeholder}
        onChange={handleValidation}
        ref={inputValueRef}
      />
      {name === "password" && (
        <MapWrapper>
          {messages.map((message, index) => (
            <PasswordRequirement key={index} message={message} />
          ))}
        </MapWrapper>
      )}
      {name === "password_check" && (
        <PasswordRequirement message={"비밀번호 일치"}></PasswordRequirement>
      )}
    </>
  );
};

InputField.propTypes = {
  inputType: PropTypes.string,
  name: PropTypes.string,
  hasLabel: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string
};

export default InputField;
