export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const SOCKET_URL = process.env.REACT_APP_SOCKET_URL;

const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
const REDIRECT_URI = `${BASE_URL}/user/auth/kakao`;
export const KAKAO_LOGIN_LINK = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
