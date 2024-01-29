import React, { useState } from "react";

// 아이디 유효성 검사
// 길이 7 ~ 30
// 영어 소문자, 숫자 허용
export const useIdValidation = () => {
  const [isIdValid, setIsIdValid] = useState(false);

  const validateId = (id) => {
    const regex = /^[a-z0-9]{7,30}$/;
    const isValidId = regex.test(id);
    setIsIdValid(isValidId);
  };

  return [isIdValid, validateId];
};

// 비밀번호 유효성 검사
// 길이 7 ~ 30
// 영어 대소문자, 숫자 필수
// 특수문자 허용
export const usePasswordValidation = () => {
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+{}|:"<>?]{7,30}$/;
    const isValidPassword = regex.test(password);
    setIsPasswordValid(isValidPassword);
  };

  return [isPasswordValid, validatePassword];
};
