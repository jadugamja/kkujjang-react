import { atom } from "recoil";

// 0: not active, 1: Detail, 2: Create
export const isAcitveSideContentTypeState = atom({
  key: "isAcitveSideContentTypeState",
  default: 0
});
