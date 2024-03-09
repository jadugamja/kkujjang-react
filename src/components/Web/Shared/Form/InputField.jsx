import React, { useState, forwardRef, useImperativeHandle, useRef } from "react";
import PropTypes from "prop-types";

// import { useIdValidation, usePasswordValidation } from "@/hooks/useValidation";

// ===== style import =====
import { Label, Input } from "./InputFieldStyle";

// const InputField = forwardRef(({ hasLabel, isLoginForm, width, name, onChange }, ref) => {
const InputField = (props) => {
  const { hasLabel, isLoginForm, isDataForm, name, inputRef, disabled, onBlur } = props;

  const handleUpdateValue = (e) => {
    const value = e.target.value;
    inputRef.current.value = value;
  };

  // === placeholder setting ===
  const idPlaceholder =
    isLoginForm && name === "id"
      ? "아이디를 입력하세요"
      : isDataForm && name === "id"
        ? "7~30자의 영문 소문자, 숫자만 입력 가능"
        : "아이디 입력";
  const passwordPlaceholder =
    isLoginForm && name === "password"
      ? "비밀번호를 입력하세요"
      : isDataForm && name === "password"
        ? "7~30자의 영문 대/소문자, 숫자 필수, 특수문자 사용 가능"
        : "비밀번호 입력";
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
        onChange={handleUpdateValue}
        disabled={disabled}
        onBlur={onBlur}
        minLength={7}
        maxLength={30}
      />
    </>
  );
};

InputField.propTypes = {
  hasLabel: PropTypes.bool,
  isLoginForm: PropTypes.bool,
  isDataForm: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  inputRef: PropTypes.object,
  onBlur: PropTypes.func
};

export default InputField;
