import React from "react";
// import { useNavigate } from "react-router-dom";

// ===== hooks import =====
import useAxios from "@/hooks/useAxios";

// ===== component =====
const Redirection = () => {
  // === state ===
  const [apiConfig, setApiConfig] = useState({
    method: "post",
    url: `/user/oauth/kakao?code=${code}&redirectURL=${redirectURL}`
  });
  const { response, error, loading, fetchData } = useAxios(apiConfig, false);

  // === navigate ===
  // const navigate = useNavigate();

  const code = new URL(dococument.location.toString()).searchParams.get("code"); // 인가코드 가져오기
  const redirectURL = `/`;

  useEffect(() => {
    fetchData();
  }, [apiConfig]);

  // const result = true;
  // if (!result) {
  //   navigate(`/member/login`);
  //   return;
  // }

  return <div>카카오 로그인 중...</div>;
};

export default Redirection;
