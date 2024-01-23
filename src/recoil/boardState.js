import { atom } from "recoil";

export const isAnswerCompletedState = atom({
  key: "isAnswerCompletedState",
  default: {} // e.g., { 'item1': true, 'item2': false }
});

export const itemIdState = atom({
  key: "itemIdState",
  default: null
});
