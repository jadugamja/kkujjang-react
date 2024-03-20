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
  const [cookies, setCookie] = useCookies(["sessionId"]);

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [apiConfig]);

  useEffect(() => {
    if (response !== null) {
      setCookie("sessionId", response.sessionId);
      navigate(`/`);
    } else {
      navigate(`/member/login`);
    }
  }, [response]);

  return <div>카카오 로그인 중...</div>;
};

export default Redirection;
