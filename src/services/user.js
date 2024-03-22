import axios from "axios";
import { Cookies } from "react-cookie";
import { BASE_URL } from "./const";

const cookies = new Cookies();

export const getCurrentUserInfo = async () => {
  const userInfoRes = await axios.get(`${BASE_URL}/user/me`, {
    headers: { sessionId: cookies.get("sessionId") }
  });

  if (userInfoRes.statusText === "OK") {
    return userInfoRes.data.result;
  }

  return null;
};

export const updateCurrentUserAvatar = async (accIdx, nickname = "테스트") => {
  const res = await axios.put(`${BASE_URL}/user`, {
    headers: { sessionId: cookies.get("sessionId") },
    data: { avatarAccessoryIndex: accIdx, nickname: nickname }
  });

  if (res.statusText === "OK") {
    return true;
  }

  return false;
};

export const getPlayerInfoByUserId = async (userId) => {
  const res = await axios.get(`${BASE_URL}/user/${userId}`, {
    headers: { sessionId: cookies.get("sessionId") }
  });

  if (res.statusText === "OK") {
    return res.data.result;
  }

  return null;
};
