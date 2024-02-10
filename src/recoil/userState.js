import { atom, selector } from "recoil";

export const userState = atom({
  key: "userState",
  default: {} // e.g., { username: "username", nickname: "nickname", role: "admin", ... }
});

// username만 추출
export const userNameState = selector({
  key: "userNameState",
  get: ({ get }) => {
    const user = get(userState);
    return user.username;
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
