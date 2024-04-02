import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

// ===== hooks import =====
import useAxios from "@/hooks/useAxios";

// ===== recoil & module import =====
import { userInfoState } from "@/recoil/userState";
import { getCurrentUserInfo } from "../../../services/user";

// ===== component =====
const Redirection = () => {
  const code = new URL(window.location.href).searchParams.get("code"); // 인가코드 가져오기

  // === ref ===
  const isDataFetched = useRef(false);

  // === state ===
  const setUser = useSetRecoilState(userInfoState);

  // === 카카오 로그인 api ===
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

  // === 카카오 로그인 api ===
  useEffect(() => {
    if (response !== null) {
      const userRole = response.authorityLevel === 100 ? "admin" : "member";
      const expires = new Date();
      expires.setTime(expires.getTime() + 7200 * 1000);
      setCookie("sessionId", response.sessionId, { path: "/", expires });
      setCookie("userRole", userRole, { path: "/", expires });

      if (!isDataFetched.current) getUserInfo();
      navigate("/");
    } else if (error) {
      navigate(`/member/login`);
    }
  }, [response, error]);

  const getUserInfo = useCallback(async () => {
    const userInfo = await getCurrentUserInfo();

    if (userInfo !== null) {
      setCookie("userId", userInfo.nickname.split("#")[1], { path: "/" });
      const updatedUserInfo = {
        role: cookies.userRole,
        ...userInfo
      };
      setUser(updatedUserInfo);
      isDataFetched.current = true;
    }
  }, []);

  return <div>카카오 로그인 중...</div>;
};

export default Redirection;
