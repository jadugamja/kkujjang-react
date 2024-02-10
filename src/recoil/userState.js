import { atom, selector } from "recoil";

export const userState = atom({
  key: "userState",
  default: {} // e.g., { username: "username", nickname: "nickname", role: "admin", level: 1, winRate: 0.0, exp: 0, avatarUrl: "" }
});

// username만 추출
export const userNameState = selector({
  key: "userNameState",
  get: ({ get }) => {
    const user = get(userState);
    return user.username;
  }
});

// avatarUrl만 추출
export const avatarUrlState = selector({
  key: "avatarUrlState",
  get: ({ get }) => {
    const user = get(userState);
    return user.avatarUrl;
  }
});

// isActive만 추출
export const isActiveAccountState = selector({
  key: "isActiveAccountState",
  get: ({ get }) => {
    const user = get(userState);
    return user.isActive;
  }
});

export const waitingPlayerListState = atom({
  key: "waitingPlayerListState",
  default: []
});

// export const waitingPlayerReadyListState = selector({
//   key: "waitingPlayerReadyListState",
//   get: ({ get }) => {
//     const playerList = get(waitingPlayerListState);
//     return playerList.map((player) => player.isReady);
//   }
// });

export const playingPlayerListState = atom({
  key: "playingPlayerListState",
  default: []
});
