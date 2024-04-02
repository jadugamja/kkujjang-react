import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

// ===== hooks import =====
import useAxios from "@/hooks/useAxios";

// ===== component =====
const Redirection = () => {
  const code = new URL(window.location.href).searchParams.get("code"); // 인가코드 가져오기

  // === state ===
  // === 카카오 로그인 api ===
  const [apiConfig, setApiConfig] = useState({
    method: "get",
    url: `/user/oauth/kakao?code=${code}`
  });
  // === 서버 세션 삭제 api ===
  // const [apiConfig, setApiConfig] = useState({
  //   method: "get",
  //   url: `/redisFLUSHALL`
  // });
  const { response, error, loading, fetchData } = useAxios(apiConfig, false);

  // === cookie ===
  const [, setCookie] = useCookies(["sessionId"]);

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [apiConfig]);

  // === 카카오 로그인 api ===
  useEffect(() => {
    // reponse로 seeionId가 옴
    // status 에 따른 분기점

    if (response) {
      const userRole = response.authorityLevel === 100 ? "admin" : "member";
      const expires = new Date();
      expires.setTime(expires.getTime() + 7200 * 1000);
      setCookie("sessionId", response.sessionId, { path: "/", expires });
      setCookie("userRole", userRole, { path: "/", expires });
      navigate(`/`);
    }

    // if (response !== null) {
    //   setCookie("sessionId", response.sessionId);
    //   navigate(`/`);
    // }
  }, [response, error]);

  if (response !== null) {
    const userRole = response.authorityLevel === 100 ? "admin" : "member";
    const expires = new Date();
    expires.setTime(expires.getTime() + 7200 * 1000);
    setCookie("sessionId", response.sessionId, { path: "/", expires });
    setCookie("userRole", userRole, { path: "/", expires });
    navigate(`/`);
  } else {
    navigate(`/member/login`);
  }

  // === 서버 세션 삭제 api ===
  // useEffect(() => {
  //   console.log(response);

  //   if (response !== null) {
  //     navigate(`/`);
  //   } else if (error) {
  //     console.log(error);
  //     navigate(`/member/login`);
  //   } else {
  //     navigate(`/member/login`);
  //   }
  // }, [response, error]);

  return <div>카카오 로그인 중...</div>;
  // return <div>서버 세션 삭제 중...</div>;
};

export default Redirection;
