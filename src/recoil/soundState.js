import { atom } from "recoil";

// 배경음
export const bgVolumeState = atom({
  key: "bgVolumeState",
  default: 1
});

// 효과음
export const fxVolumeState = atom({
  key: "fxVolumeState",
  default: 1
});
