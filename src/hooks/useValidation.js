import React, { useState } from "react";

// 아이디 유효성 검사
export const useIdValidation = () => {
  const [isValid, setIsValid] = useState(false);

  const validateId = (id) => {
    const isNotEmpty = id.trim() !== ""; // 빈값
    const isLengthValid = id.length >= 7 && id.length <= 30; // 최소 7자, 최대 30자 길이 제한
    const hasNumber = /\d/.test(id); // 숫자 포함
    const hasUppercaseAndLowercase = /[a-z]/.test(id); // 영어 (소문자) 포함

    const conditions = [isNotEmpty, isLengthValid, hasNumber, hasUppercaseAndLowercase];
    const isValidId = conditions.every((condition) => condition);

    setIsValid(isValidId);
  };

  return { isValid, validateId };
};

// 비밀번호 유효성 검사
export const usePasswordValidation = () => {
  const [conditions, setConditions] = useState({
    isNotEmpty: false,
    isLengthValid: false,
    hasNumber: false,
    hasUppercase: false,
    hasLowercase: false,
    hasSpecialChar: false
  });

  const validatePassword = (password) => {
    const isNotEmpty = password.trim() !== ""; // 빈값
    const isLengthValid = password.length >= 7 && password.length <= 30; // 최소 7자, 최대 30자 제한
    const hasNumber = /\d/.test(password); // 숫자 포함
    const hasUppercase = /[A-Z]/.test(password); // 영어 대문자 포함
    const hasLowercase = /[a-z]/.test(password); // 영어 소문자 포함
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // 특수문자 포함

    setConditions({
      isNotEmpty,
      isLengthValid,
      hasNumber,
      hasUppercase,
      hasLowercase,
      hasSpecialChar
    });
  };
  return { conditions, validatePassword };
};
