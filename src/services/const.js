export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const SOCKET_URL = process.env.REACT_APP_SOCKET_URL;

const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
// const REDIRECT_URI = `${BASE_URL}/member/kakao`;
const REDIRECT_URI = "http://localhost:3000/member/kakao"; // 테스트용 임시 REDIRECT_URI
export const KAKAO_LOGIN_LINK = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

// 프록시
export const PROXY_URL = "https://proxy.cors.sh";
export const CORS_API_KEY = "temp_6100291d60beafafefc8a0c0f68d40b4";
