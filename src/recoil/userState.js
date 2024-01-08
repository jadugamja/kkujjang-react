import { atom } from "recoil";

// {
//   username: "username",
//   role: "admin",
//   nickname: "nickname"
// }
export const userState = atom({
  key: "userState",
  default: null
});
