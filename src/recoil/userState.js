import { atom, selector, selectorFamily } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    id: 1
  } // e.g., { username: "username", nickname: "nickname", role: "admin", level: 1, winRate: 0.0, exp: 0, avatarUrl: "" }
});

// userState -> username만 추출
export const userNameState = selector({
  key: "userNameState",
  get: ({ get }) => {
    const user = get(userState);
    return user.username;
  }
});

// userState -> avatarUrl만 추출
export const avatarUrlState = selector({
  key: "avatarUrlState",
  get: ({ get }) => {
    const user = get(userState);
    return user.avatarUrl;
  }
});

// userState -> isActive(활성화 여부)만 추출
export const isActiveAccountState = selector({
  key: "isActiveAccountState",
  get: ({ get }) => {
    const user = get(userState);
    return user.isActive;
  }
});

// 대기실 플레이어들의 상태 목록
export const waitingPlayerListState = atom({
  key: "waitingPlayerListState",
  default: []
});

// 대기실 플레이어의 대기 상태만 추출
// export const waitingPlayerReadyListState = selector({
//   key: "waitingPlayerReadyListState",
//   get: ({ get }) => {
//     const playerList = get(waitingPlayerListState);
//     return playerList.map((player) => player.isReady);
//   }
// });

// 대기실 플레이어의 상태
export const waitingPlayerState = atom({
  key: "waitingPlayerState",
  default: {
    isReady: false,
    isHost: true
  }
});

// 인게임 플레이어들의 상태 목록
export const playingPlayerListState = atom({
  key: "playingPlayerListState",
  default: []
});

// 인게임 플레이어의 상태
export const playingPlayerState = atom({
  key: "playingPlayerState",
  default: {
    myTurn: false,
    rounScore: [],
    totalScore: 0
  }
  // get:
  //   () =>
  //   ({ get }) => {
  //     const user = get(userState);
  //     return {
  //       ...user,
  //       myTurn: false,
  //       roundScore: [],
  //       totalScore: 0
  //     };
  //   },
  // set:
  //   () =>
  //   ({ set }, newValue) => {
  //     set(playingPlayerState(), newValue);
  //   }
});

// 인게임 플레이어 -> 인게임 플레이어들 목록 동기화
export const syncPlayingPlayerToListState = selector({
  key: "syncPlayingPlayerToListState",
  get: ({ get }) => {
    const playerList = get(playingPlayerListState);
    const currPlayer = get(playingPlayerState);
    return playerList.map((player) =>
      player.id === currPlayer.id ? currPlayer : player
    );
  },
  set: ({ set }, newValue) => {
    set(playingPlayerListState, newValue);
  }
});
