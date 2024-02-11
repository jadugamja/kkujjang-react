import { atom, selector } from "recoil";
import { playingPlayerListState } from "./userState";

// 끝말잇기 첫 글자
export const initialCharacterState = atom({
  key: "initialCharacterState",
  default: ""
});

// 남은 시간: 현재 차례
export const thisTurnLeftTimeState = atom({
  key: "thisTurnLeftTimeState",
  default: 1
});

// 남은 시간: 이번 라운드
export const thisRoundLeftTimeState = atom({
  key: "thisRoundLeftTimeState",
  default: 1
});

// 현재 차례 플레이어 순서
export const myTurnState = selector({
  key: "myTurnState",
  get: ({ get }) =>
    get(playingPlayerListState).findIndex((player) => player.myTurn === true)
});
