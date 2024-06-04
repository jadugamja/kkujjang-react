import { atom, selector } from "recoil";
import { playingPlayerListState } from "./userState";

// 제시어
export const randomWordState = atom({
  key: "randomWordState",
  default: ""
});

// 끝말잇기 첫 글자
export const initialCharacterState = atom({
  key: "initialCharacterState",
  default: ""
});

// 현재 라운드
export const currentRoundState = atom({
  key: "currentRoundState",
  default: 0
});

// 차례 진행 횟수
export const turnCountState = atom({
  key: "turnCountState",
  default: 0
});

export const isMyTurnState = atom({
  key: "isMyTurnState",
  default: false
});

// 남은 시간: 현재 차례
export const thisTurnLeftTimeState = atom({
  key: "thisTurnLeftTimeState",
  default: 0
});

// 남은 시간: 이번 라운드
export const thisRoundLeftTimeState = atom({
  key: "thisRoundLeftTimeState",
  default: 0
});

// 현재 차례 플레이어 순서
export const myTurnPlayerIndexState = selector({
  key: "myTurnPlayerIndexState",
  get: ({ get }) =>
    get(playingPlayerListState).findIndex((player) => player.myTurn === true)
});

// 끝말잇기 실패 상태
export const isWordFailState = atom({
  key: "isWordFailState",
  default: false
});

// 현재 차례 끝말잇기 점수 결과
export const currentPointsState = atom({
  key: "currentPointsState",
  default: 0
});

// 인게임 내 말풍선 메시지
export const balloonMessageState = atom({
  key: "balloonMessageState",
  default: null
});

// 게임 방문했던 적이 있는지 여부
export const hadVisitedState = atom({
  key: "hadVisitedState",
  default: false
});
