import React from "react";
import { useNavigate } from "react-router-dom";

// ===== component =====
const Redirection = () => {
  // === navigate ===
  const navigate = useNavigate();

  const code = new URL(dococument.location.toString()).searchParams.get("code"); // 인가코드 가져오기
  const redirectURL = `/`;

  // 프론트엔드 테스트를 위한 백엔드 임시 코드
  const result = true;
  if (!result) {
    navigate(`/member/login`);
    return;
  }

  return <div>카카오 로그인 중...</div>;
};

export default Redirection;
