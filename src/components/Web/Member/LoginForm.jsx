import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

// ===== components & image import =====
import KakaoIcon from "@/assets/images/kakao.png";
import FormTitle from "@/components/Web/Shared/Form/FormTitle";
import InputField from "@/components/Web/Shared/Form/InputField";
import Button from "@/components/Web/Shared/Buttons/Button";
import ValidationMessage from "@/components/Web/Shared/Form/ValidationMessage";

// ===== style ======
const LoginFormFlexContainer = styled(FlexBox)`
  width: ${(props) => props.width || "40.75rem"};
  height: ${(props) => props.height || "fit-content"};

  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
`;

const KakaoLoginButton = styled.button`
  width: 40.75rem;
  height: 4.688rem;
  background-color: ${({ theme }) => theme.colors.kakao};
  color: #413014;
`;

const LoginLinkButton = styled.a`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "29px"};
  color: ${(props) => props.color || "#929292"};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 600;

  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
`;

const KakaoIconImage = styled.img`
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.height || "24px"};
  margin-left: 5px;
  margin-right: 10px;
`;

const KakaoLoginText = styled.p`
  width: ${(props) => props.width || "fit-content"};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 600;
  margin: 0;
`;

// ===== component ======
const LoginForm = () => {
  // === ref ===
  const idRef = useRef(""); // 아이디
  const passwordRef = useRef(""); // 비밀번호

  // === state ===
  const [error, setError] = useState(""); // error state

  // 로그인
  const handleLogin = () => {
    const id = idRef.current.value;
    const password = passwordRef.current.value;

    const idRegex = /^[a-z0-9]{7,30}$/;
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+{}|:"<>?]{7,30}$/;

    if (!idRegex.test(id) || !pwRegex.test(password)) {
      setError("아이디 혹은 비밀번호가 존재하지 않습니다");
    } else {
      setError("");
      // 로그인 API 코드
    }
  };

  // 카카오 로그인
  const handleKakaoLogin = () => {
    // 카카오 로그인 API 코드
  };

  return (
    <LoginFormFlexContainer dir="col">
      <FormTitle type="login"></FormTitle>
      {/* 아이디 input */}
      <LoginFormFlexContainer marginBottom="7px">
        <InputField name="id" isLoginForm={true} inputRef={idRef}></InputField>
      </LoginFormFlexContainer>
      {/* 비밀번호 input */}
      <LoginFormFlexContainer marginBottom="15px">
        <InputField
          name="password"
          isLoginForm={true}
          inputRef={passwordRef}
        ></InputField>
      </LoginFormFlexContainer>
      {/* 경고 문구 */}
      {error && <ValidationMessage message={error} />}
      {/* 로그인 button */}
      <LoginFormFlexContainer marginTop="15px" marginBottom="15px">
        <Button type="bigBrown" message="로그인" onClick={handleLogin}></Button>
      </LoginFormFlexContainer>
      <LoginFormFlexContainer row="between" marginBottom="30px">
        <LoginFormFlexContainer width="fit-content">
          <Link to="/member/find">
            <LoginLinkButton marginRight="10px">아이디 찾기</LoginLinkButton>
          </Link>
          <Link to="/member/find">
            <LoginLinkButton>비밀번호 찾기</LoginLinkButton>
          </Link>
        </LoginFormFlexContainer>
        <Link to="/member/join">
          <LoginLinkButton color="#413014">회원가입</LoginLinkButton>
        </Link>
      </LoginFormFlexContainer>
      <KakaoLoginButton onClick={handleKakaoLogin}>
        <LoginFormFlexContainer col="center">
          <KakaoIconImage src={KakaoIcon} />
          <KakaoLoginText>카카오 계정으로 로그인하기</KakaoLoginText>
        </LoginFormFlexContainer>
      </KakaoLoginButton>
    </LoginFormFlexContainer>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
