import { atom, selector } from "recoil";

export const userState = atom({
  key: "userState",
  default: {} // e.g., { username: "username", nickname: "nickname", role: "admin", level: 1, winRate: 0.0, exp: 0, avatarUrl: "" }
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
    ...userState,
    isReady: false,
    isHost: true
  }
});

// 인게임 플레이어들의 상태 목록
export const playingPlayerListState = atom({
  key: "playingPlayerListState",
  default: [] // e.g. isDefeated,
});

// 인게임 플레이어의 상태
export const playingPlayerState = atom({
  key: "playingPlayerState",
  default: {
    ...userState,
    myTurn: true,
    roundScore: [], // 각 라운드에서 얻은 점수
    totalRoundScore: 0 // 총 점수
  }
});
