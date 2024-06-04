import { atom, selector } from "recoil";

export const userInfoState = atom({
  key: "userInfoState",
  default: null // e.g., { username: "username", nickname: "nickname", role: "admin", level: 1, winRate: 0.0, exp: 0, avatarUrl: "" }
});

// userState -> avatarUrl만 추출
export const avatarUrlState = selector({
  key: "avatarUrlState",
  get: ({ get }) => {
    const user = get(userInfoState);
    return user?.avatarUrl;
  }
});

// userState -> isActive(활성화 여부)만 추출
export const isActiveAccountState = atom({
  key: "isActiveAccountState",
  default: true
});

// 대기실 플레이어들의 상태 목록
export const waitingPlayerListState = atom({
  key: "waitingPlayerListState",
  default: []
});

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
    score: 0
  }
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
