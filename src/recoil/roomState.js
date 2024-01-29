import { atom } from "recoil";

export const roomInfoState = atom({
  key: "roomInfoState",
  default: {
    title: "",
    password: "",
    playerCount: 0,
    maxPlayerCount: 8,
    roundCount: 5,
    roundTime: 90
  }
});
