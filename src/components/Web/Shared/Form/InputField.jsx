import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import { useIdValidation, usePasswordValidation } from "@/hooks/useValidation";
import PasswordRequirement from "./PasswordRequirement";

import { Label, Input, MapWrapper } from "./InputFieldStyle";

const InputField = ({ name, hasLabel, logInForm }) => {
  const inputValueRef = useRef("");
  const { isValid, validateId } = useIdValidation();
  const { conditions, validatePassword } = usePasswordValidation();
  const [isMatch, setIsMatch] = useState(false);

  let inputType = "";
  let label = "";
  let placeholder = "";

  if (name === "id") {
    inputType = "text";
    label = "아이디";
    placeholder = logInForm ? "아이디를 입력하세요" : "아이디 입력";
  } else if (name === "password") {
    inputType = "password";
    label = "비밀번호";
    placeholder = logInForm ? "비밀번호를 입력하세요" : "비밀번호 입력";
  } else if (name === "password_check") {
    inputType = "password";
    label = "비밀번호 확인";
    placeholder = "비밀번호 확인";
  }

  const handleValidation = (e) => {
    const { name, value } = e.target;

    inputValueRef.current = {
      ...inputValueRef.current,
      [name]: value
    };

    switch (name) {
      case "id":
        validateId(value);
        break;
      case "password":
        validatePassword(value);
        break;
      case "password_check":
        const isMatch = value === inputValueRef.current.password;
        setIsMatch(isMatch);
        break;
    }
  };

  const messages = [
    {
      text: "영어 대소문자",
      condition: conditions.hasUppercase && conditions.hasLowercase
    },
    { text: "숫자", condition: conditions.hasNumber },
    { text: "특수문자", condition: conditions.hasSpecialChar },
    { text: "7-30자 이내", condition: conditions.isLengthValid }
  ];

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
            <PasswordRequirement
              key={index}
              message={message.text}
              isCheck={message.condition}
            />
          ))}
        </MapWrapper>
      )}
      {name === "password_check" && (
        <PasswordRequirement
          message={"비밀번호 일치"}
          isCheck={isMatch}
        ></PasswordRequirement>
      )}
    </>
  );
};

InputField.propTypes = {
  name: PropTypes.string,
  hasLabel: PropTypes.bool,
  logInForm: PropTypes.bool
};

export default InputField;
