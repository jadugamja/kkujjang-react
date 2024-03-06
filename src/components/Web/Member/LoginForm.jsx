import React, { useRef, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FlexBox } from "@/styles/FlexStyle";
import { KAKAO_LOGIN_LINK } from "@/services/const";

// ===== hooks import =====
import useAxios from "@/hooks/useAxios";

// ===== components & image import =====
import KakaoIcon from "@/assets/images/kakao.png";
import FormTitle from "@/components/Web/Shared/Form/FormTitle";
import InputField from "@/components/Web/Shared/Form/InputField";
import Button from "@/components/Web/Shared/Buttons/Button";
import ValidationMessage from "@/components/Web/Shared/Form/ValidationMessage";
import { userState } from "@/recoil/userState";

// ===== style ======
const LoginFormFlexContainer = styled(FlexBox)`
  height: ${(props) => props.height || "fit-content"};
  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
`;

const KakaoLoginButton = styled.button`
  height: 4.3rem;
  background-color: ${({ theme }) => theme.colors.kakao};
  color: #413014;
`;

const LinkSpan = styled.span`
  color: ${(props) => props.color || "#929292"};
  font-size: ${(props) => props.fontSize || "19px"};
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
  const [loginError, setLoginError] = useState(""); // error state
  const setUser = useSetRecoilState(userState);
  // (api 관련)
  const [apiConfig, setApiConfig] = useState(null);
  const { response, error, loading, fetchData } = useAxios(apiConfig, false);

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    if (apiConfig !== null) {
      fetchData();
    }
  }, [apiConfig]);

  useEffect(() => {
    if (response !== null) {
      setLoginError("");
      // 전역 상태에 유저 정보 저장
      setUser({
        username: idRef.current.value,
        password: passwordRef.current.value
      });
      // 세션 스토리지에 유저 정보 저장
      sessionStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } else {
      setLoginError(error);
    }
  }, [response]);

  const handleLogin = () => {
    const id = idRef.current.value;
    const password = passwordRef.current.value;

    const idRegex = /^[a-z0-9]{7,30}$/;
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+{}|:"<>?]{7,30}$/;

    if (!idRegex.test(id) || !pwRegex.test(password)) {
      setLoginError("아이디 또는 비밀번호를 잘못 입력했습니다.");
    } else {
      setLoginError("");
      // 로그인 API 코드
      setApiConfig({
        method: "post",
        url: "/user/signin",
        data: {
          username: id,
          password: password
        }
      });
    }
  };

  // 카카오 로그인
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_LOGIN_LINK;
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{setLoginError(error)}</p>
      ) : (
        <>
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
            {loginError && <ValidationMessage message={loginError} />}

            {/* 로그인 button */}
            <LoginFormFlexContainer marginTop="28px" marginBottom="15px">
              <Button type="bigBrown" message="로그인" onClick={handleLogin}></Button>
            </LoginFormFlexContainer>

            {/* Link button */}
            <LoginFormFlexContainer row="between" marginBottom="30px">
              <LoginFormFlexContainer width="fit-content">
                <Link to="/member/find?type=id">
                  <LinkSpan marginRight="24px">아이디 찾기</LinkSpan>
                </Link>
                <Link to="/member/find?type=pw">
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
                <LinkSpan color="#413014" fontSize="20px" fontWeight="700">
                  카카오 계정으로 로그인하기
                </LinkSpan>
              </LoginFormFlexContainer>
            </KakaoLoginButton>
          </LoginFormFlexContainer>
        </>
      )}
    </>
  );
};

export default LoginForm;
