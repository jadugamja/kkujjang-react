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
    playerCount: 1,
    maxPlayerCount: 8,
    roundCount: 5,
    roundTime: 90
  }
});

export const isPlayingRoomState = atom({
  key: "isPlayingRoomState",
  default: false
});
