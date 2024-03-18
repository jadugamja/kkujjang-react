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
  default: null
});

export const isPlayingRoomState = atom({
  key: "isPlayingRoomState",
  default: false
});
