import React from "react";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

import KakaoIcon from "@/assets/images/kakao.png";
import FormTitle from "@/components/Web/Shared/Form/FormTitle";
import InputField from "@/components/Web/Shared/Form/InputField";
import Button from "@/components/Web/Shared/Buttons/Button";

// ===== style ======
const LoginFormContainer = styled(FlexBox)`
  width: ${(props) => props.width || "40.75rem"};
  height: ${(props) => props.height || "fit-content"};
`;

const KakaoLoginButton = styled.button`
  width: 40.75rem;
  height: 4.688rem;
  background-color: ${({ theme }) => theme.colors.kakao};
  color: #413014
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
`;

const LoginLinkButtonContainer = styled(FlexBox)``;

const LoginLinkButton = styled.a`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "29px"};
  color: ${(props) => props.color || "#929292"};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 600;
`;

const KaKaoIconImage = styled.img`
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.height || "24px"};
`;

// ===== component ======
const LoginForm = () => {
  // 카카오 로그인 api 코드

  // 로그인 api 코드
  return (
    <LoginFormContainer dir="col">
      <FormTitle type="login"></FormTitle>
      <InputField name="id" logInForm={true}></InputField>
      <InputField name="password" logInForm={true}></InputField>
      {/* 자동 로그인 체크 박스 추가*/}
      <Button type="bigBrown" message="로그인"></Button>
      {/* flex 비율 줘야 함 1:1:2 */}
      <LoginLinkButtonContainer>
        <LoginLinkButton>아이디 찾기</LoginLinkButton>
        <LoginLinkButton>비밀번호 찾기</LoginLinkButton>
        <LoginLinkButton color="#413014">회원가입</LoginLinkButton>
      </LoginLinkButtonContainer>
      <KakaoLoginButton>
        {/* text-align: left 추가 */}
        <KaKaoIconImage src={KakaoIcon}></KaKaoIconImage>
        카카오 계정으로 로그인하기
      </KakaoLoginButton>
    </LoginFormContainer>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
