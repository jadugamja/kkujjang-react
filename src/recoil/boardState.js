import { atom } from "recoil";

export const isAnswerCompletedState = atom({
  key: "isAnswerCompletedState",
  default: {} // e.g., { 'item1': true, 'item2': false }
});

// 게시물 id
export const itemIdState = atom({
  key: "itemIdState",
  default: null
});

export const remoteApiConfigState = atom({
  key: "remoteApiConfigState",
  default: null
});
