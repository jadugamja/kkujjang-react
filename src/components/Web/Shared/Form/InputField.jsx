import React, { useState, forwardRef, useImperativeHandle, useRef } from "react";
import PropTypes from "prop-types";

// import { useIdValidation, usePasswordValidation } from "@/hooks/useValidation";

// ===== style import =====
import { Label, Input } from "./InputFieldStyle";

const InputField = forwardRef(({ hasLabel, isLoginForm, width, name, onChange }, ref) => {
  // === props ===
  // hasLabel : true, false
  // isLoginForm : true, false
  // width : width setting
  // name : id, password, confirmPassword
  // onChange : function setting

  // === ref ===
  const inputRef = useRef(null);

  // Form 에서 사용할 함수
  useImperativeHandle(ref, () => ({
    getValue
  }));

  // input의 값을 가져오는 함수
  const getValue = () => {
    return inputRef.current.value;
  };

  // === placeholder setting ===
  const idPlaceholder =
    isLoginForm && name === "id" ? "아이디를 입력해 주세요" : "아이디 입력";
  const passwordPlaceholder =
    isLoginForm && name === "password" ? "비밀번호를 입력해 주세요" : "비밀번호 입력";
  const confirmPasswordPlaceholder = "비밀번호 확인";

  return (
    <>
      {hasLabel && (
        <Label>
          {name === "id"
            ? "아이디"
            : name === "password"
              ? "비밀번호"
              : name === "confirmPassword"
                ? "비밀번호 확인"
                : null}
        </Label>
      )}
      <Input
        ref={inputRef}
        width={width}
        type={
          name === "id"
            ? "text"
            : name === "password"
              ? "password"
              : name === "confirmPassword"
                ? "password"
                : null
        }
        name={name}
        placeholder={
          name === "id"
            ? idPlaceholder
            : name === "password"
              ? passwordPlaceholder
              : name === "confirmPassword"
                ? confirmPasswordPlaceholder
                : null
        }
        onChange={onChange}
        minLength={7}
        maxLength={30}
      />
    </>
  );
});

InputField.propTypes = {
  hasLabel: PropTypes.bool,
  isLoginForm: PropTypes.bool,
  width: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
};

InputField.displayName = "InputField";

export default InputField;
