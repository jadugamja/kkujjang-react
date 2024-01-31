import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {} // e.g., { username: "username", nickname: "nickname", role: "admin", ... }
});

export const isActiveAccountState = atom({
  key: "isActiveAccountState",
  default: {} // e.g., { 'username1': true, 'username1': false }
});

export const isHostUserState = atom({
  key: "isHostUserState",
  default: false
});
