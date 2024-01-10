import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import { useIdValidation, usePasswordValidation } from "@/hooks/useValidation";
import PasswordRequirement from "./PasswordRequirement";

import { Label, Input, MapWrapper } from "./InputFieldStyle";

const InputField = ({ name, hasLabel, logInForm }) => {
  const idValueRef = useRef("");
  const passwordValueRef = useRef("");
  const passwordCheckValueRef = useRef("");
  const { isValid, validateId } = useIdValidation();
  const { conditions, validatePassword } = usePasswordValidation();
  const [isMatch, setIsMatch] = useState(false);

  let label = "";
  let placeholder = "";

  if (name === "id") {
    label = "아이디";
    placeholder = logInForm ? "아이디를 입력하세요" : "아이디 입력";
  } else if (name === "password") {
    label = "비밀번호";
    placeholder = logInForm ? "비밀번호를 입력하세요" : "비밀번호 입력";
  } else if (name === "password_check") {
    label = "비밀번호 확인";
    placeholder = "비밀번호 확인";
  }

  const handleValidation = () => {
    switch (name) {
      case "id":
        validateId(idValueRef);
        break;
      case "password":
        validatePassword(passwordValueRef);
        break;
      case "password_check":
        const isMatch = passwordCheckValueRef === passwordValueRef;
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
      {/* {아이디 input} */}
      {name === "id" && (
        <Input
          type="text"
          name={name}
          placeholder={placeholder}
          onChange={handleValidation}
          ref={idValueRef}
        />
      )}
      {/* {비밀번호 input} */}
      {name === "password" && (
        <>
          <Input
            type="password"
            name={name}
            placeholder={placeholder}
            onChange={handleValidation}
            ref={passwordValueRef}
          />
          <MapWrapper>
            {messages.map((message, index) => (
              <PasswordRequirement
                key={index}
                message={message.text}
                isCheck={message.condition}
              />
            ))}
          </MapWrapper>
        </>
      )}
      {/* {비밀번호 확인 input} */}
      {name === "password_check" && (
        <>
          <Input
            type="password"
            name={name}
            placeholder={placeholder}
            onChange={handleValidation}
            ref={passwordCheckValueRef}
          />
          <PasswordRequirement
            message={"비밀번호 일치"}
            isCheck={isMatch}
          ></PasswordRequirement>
        </>
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
