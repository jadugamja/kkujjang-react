import { atom } from "recoil";

export const audioPlayState = atom({
  key: "audioPlayState",
  default: false
});

// 배경음
export const bgVolumeState = atom({
  key: "bgVolumeState",
  default: localStorage.getItem("bgVolume")
    ? parseFloat(localStorage.getItem("bgVolume"))
    : 1
});

// 효과음
export const fxVolumeState = atom({
  key: "fxVolumeState",
  default: localStorage.getItem("fxVolume")
    ? parseFloat(localStorage.getItem("fxVolume"))
    : 1
});
