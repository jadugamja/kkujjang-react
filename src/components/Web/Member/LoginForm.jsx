import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FlexBox } from "@/styles/FlexStyle";

// ===== components & image import =====
import KakaoIcon from "@/assets/images/kakao.png";
import FormTitle from "@/components/Web/Shared/Form/FormTitle";
import InputField from "@/components/Web/Shared/Form/InputField";
import Button from "@/components/Web/Shared/Buttons/Button";
import ValidationMessage from "@/components/Web/Shared/Form/ValidationMessage";

// ===== style ======
const LoginFormFlexContainer = styled(FlexBox)`
  height: ${(props) => props.height || "fit-content"};
  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
`;

const KakaoLoginButton = styled.button`
  height: 4.688rem;
  background-color: ${({ theme }) => theme.colors.kakao};
  color: #413014;
`;

const LinkSpan = styled.span`
  color: ${(props) => props.color || "#929292"};
  font-size: 21px;
  font-weight: ${(props) => props.fontWeight || "600"};
  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
`;

const KakaoIconImage = styled.img`
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.height || "24px"};
  margin-left: 14px;
  margin-right: 10px;
`;

// ===== component ======
const LoginForm = () => {
  // === ref ===
  const idRef = useRef(""); // 아이디
  const passwordRef = useRef(""); // 비밀번호

  // === state ===
  const [error, setError] = useState(""); // error state

  // === navigate ===
  const navigate = useNavigate();

  // 로그인
  const handleLogin = () => {
    const id = idRef.current.value;
    const password = passwordRef.current.value;

    const idRegex = /^[a-z0-9]{7,30}$/;
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+{}|:"<>?]{7,30}$/;

    if (!idRegex.test(id) || !pwRegex.test(password)) {
      setError("아이디 또는 비밀번호를 잘못 입력했습니다.");
    } else {
      setError("");
      // 로그인 API 코드 추가

      // 프론트엔드 테스트를 위한 백엔드 임시 코드
      const result = true;
      if (!result) {
        setError("해당 계정이 존재하지 않습니다.");
      } else {
        // 홈으로 이동
        navigate(`/`);
      }
    }
  };

  // 카카오 로그인
  const handleKakaoLogin = () => {
    // 카카오 로그인 API 코드
  };

  return (
    <LoginFormFlexContainer dir="col" marginTop="4rem">
      <FormTitle type="login"></FormTitle>

      {/* 아이디 input */}
      <LoginFormFlexContainer marginBottom="25px">
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
      <LoginFormFlexContainer marginTop="28px" marginBottom="15px">
        <Button type="bigBrown" message="로그인" onClick={handleLogin}></Button>
      </LoginFormFlexContainer>

      {/* Link button */}
      <LoginFormFlexContainer row="between" marginBottom="30px">
        <LoginFormFlexContainer width="fit-content">
          <Link to="/member/find">
            <LinkSpan marginRight="24px">아이디 찾기</LinkSpan>
          </Link>
          <Link to="/member/find">
            <LinkSpan>비밀번호 찾기</LinkSpan>
          </Link>
        </LoginFormFlexContainer>
        <Link to="/member/join">
          <LinkSpan color="#413014">회원가입</LinkSpan>
        </Link>
      </LoginFormFlexContainer>

      {/* 카카오 로그인 button */}
      <KakaoLoginButton onClick={handleKakaoLogin}>
        <LoginFormFlexContainer col="center">
          <KakaoIconImage src={KakaoIcon} />
          <LinkSpan color="#413014" fontWeight="700">
            카카오 계정으로 로그인하기
          </LinkSpan>
        </LoginFormFlexContainer>
      </KakaoLoginButton>
    </LoginFormFlexContainer>
  );
};

export default LoginForm;
