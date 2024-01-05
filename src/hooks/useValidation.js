import React, { useState } from "react";

const useIdValidation = () => {
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

const usePasswordValidation = () => {
  const [conditions, setConditions] = useState({
    isNotEmpty: false,
    isLengthValid: false,
    hasNumber: false,
    hasUppercaseAndLowercase: false,
    hasSpecialChar: false
  });

  const validatePassword = (password) => {
    const isNotEmpty = password.trim() !== ""; // 빈값
    const isLengthValid = password.length >= 7 && password.length <= 30; // 최소 7자, 최대 30자 제한
    const hasNumber = /\d/.test(password); // 숫자 포함
    const hasUppercaseAndLowercase = /[A-Za-z]/.test(password); // 영어 (대소문자) 포함
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // 특수문자 포함

    setConditions({
      isNotEmpty,
      isLengthValid,
      hasNumber,
      hasUppercaseAndLowercase,
      hasSpecialChar
    });
  };
  return { conditions, validatePassword };
};

const usePasswordCheckValidation = () => {
  const [isMatch, setIsMatch] = useState(false);

  const validatePasswordCheck = (password, passwordCheck) => {
    const isMatch = password === passwordCheck; // 비밀번호 일치

    setIsMatch(isMatch);
  };
  return { isMatch, validatePasswordCheck };
};

export default { useIdValidation, usePasswordValidation, usePasswordCheckValidation };
