import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

// ===== hooks import =====
import useAxios from "@/hooks/useAxios";

// ===== component =====
const Redirection = () => {
  const code = new URL(window.location.href).searchParams.get("code"); // 인가코드 가져오기
  console.log(code);

  // === state ===
  const [apiConfig, setApiConfig] = useState({
    method: "get",
    url: `/user/oauth/kakao?code=${code}`
  });
  const { response, error, loading, fetchData } = useAxios(apiConfig, false);

  // === cookie ===
  const [, setCookie] = useCookies(["sessionId"]);

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [apiConfig]);

  useEffect(() => {
    if (response !== null) {
      debugger;
      const userRole = response.authorityLevel === 100 ? "admin" : "member";
      const expires = new Date();
      expires.setTime(expires.getTime() + 7200 * 1000);
      setCookie("sessionId", response.sessionId, { path: "/", expires });
      setCookie("userRole", userRole, { path: "/", expires });
      navigate(`/`);
    } else {
      debugger;
      navigate(`/member/login`);
    }
  }, [response, error]);

  return <div>카카오 로그인 중...</div>;
};

export default Redirection;
