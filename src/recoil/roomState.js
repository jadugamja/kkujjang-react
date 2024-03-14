import { atom } from "recoil";

export const roomInfoListState = atom({
  key: "roomInfoListState",
  default: []
});

export const roomIdState = atom({
  key: "roomIdState",
  default: null
});

export const roomInfoState = atom({
  key: "roomInfoState",
  default: {
    title: "",
    password: "",
    maxUserCount: 8,
    maxRound: 5,
    roundTimeLimit: 90
  }
});

export const isPlayingRoomState = atom({
  key: "isPlayingRoomState",
  default: false
});
