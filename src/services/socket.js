import io from "socket.io-client";
import { SOCKET_URL } from "./const";

const client = io(SOCKET_URL, {
  transports: ["websocket"]
});

// ====== 소켓 초기화 ======
export const initSocket = (callBack) => {
  client.on("connect", () => {
    console.log("[log] Connect to the Server...");
  });

  client.on("error", (error) => {
    console.error(`[Error]: ${error}`);
    callBack(error);
  });
};

// ====== 방 목록 조회 ======
export const loadRoomList = (callBack) => {
  client.emit("load room list");

  client.on("complete load room list", (roomList) => {
    callBack(roomList);
  });
};

// ====== 방 목록 갱신: 추가 ======
export const onLoadNewRoom = (callBack) => {
  client.on("load new room", (newRoom) => {
    callBack(newRoom);
  });
};

// ====== 방 목록 갱신: 삭제 ======
export const onDestroyRoom = (callBack) => {
  client.on("destroy room", (roomId) => {
    callBack(roomId);
  });
};

// ====== 방 목록 갱신: 참여 인원 변경 ======
export const onUpdateCurrentPlayerCount = (callBack) => {
  client.on("update room member count", (data) => {
    callBack(data);
  });
};

// ====== 방 목록 갱신: 방 설정 변경 ======
export const onUpdateRoomConfig = (callBack) => {
  client.on("update room config", (newRoom) => {
    callBack(newRoom);
  });
};

// ====== 방 생성 ======
export const createRoom = (roomData, callBack) => {
  client.emit("create room", roomData);

  client.on("complete create room", (room) => {
    callBack(room);
  });
};

// ====== 방 수정 ======
export const changeRoomConfig = (roomData, callBack) => {
  client.emit("change room config", roomData);

  client.on("complete change room config", (room) => {
    callBack(room);
  });
};

// ====== 방 참가 ======
export const joinRoom = (roomData, callBack) => {
  client.emit("join room", roomData);
  client.on("complete join room", () => {
    callBack();
  });
};

// 다른 유저 참가 알림
export const onUserJoinRoom = (callBack) => {
  client.on("some user join room", (userId) => {
    callBack(userId);
  });
};

// ====== 방 조회 ======
export const loadRoom = (roomId, callBack) => {
  client.emit("load room", roomId);

  client.on("complete load room", (room) => {
    callBack(room);
  });
};

// ====== 방 퇴장 ======
export const leaveRoom = (roomId, callBack) => {
  client.emit("leave room", roomId);
  client.on("complete leave room", () => {
    callBack();
  });
};

// 다른 유저 퇴장 알림
export const onUserLeaveRoom = (callBack) => {
  client.on("some user leave room", (userId) => {
    callBack(userId);
  });
};

// 방장 변경
export const onChangeRoomOwner = (callBack) => {
  client.on("change room owner", (newOwnerIdx) => {
    callBack(newOwnerIdx);
  });
};

// ====== 준비 요청 ======
export const switchReadyState = (newState, callBack) => {
  client.emit("switch ready state", newState);

  client.on("complete switch ready state", (data) => {
    callBack(data);
  });
};

// ====== 게임 시작 요청 ======
export const gameStart = (callBack, errorCallBack) => {
  client.emit("game start");
  client.on("complete game start", (room) => {
    callBack(room);
  });
  client.on("error", (error) => {
    errorCallBack(error);
  });
};

// ====== 라운드 시작 요청 ======
export const roundStart = (callBack, errorCallBack) => {
  client.emit("round start");
  client.on("complete round start", (room) => {
    callBack(room);
  });
  client.on("error", (error) => {
    errorCallBack(error);
  });
};

// ====== 턴 시작 요청 ======
export const turnStart = (callBack, errorCallBack) => {
  client.emit("turn start");
  client.on("complete turn start", (room) => {
    callBack(room);
  });
  client.on("error", (error) => {
    errorCallBack(error);
  });
};

// ====== 채팅 ======
export const sendMessage = (message) => {
  if (client.connected) {
    client.emit("chat", message);
  }
};

export const receiveMessage = (callBack) => {
  client.on("chat", (message) => {
    // 메시지 구성 {nickname: "", message: ""}
    // const { fromNickname, fromMessage } = message;

    callBack(message);
  });
};

export const receiveSayWordFail = (callBack) => {
  client.on("say word fail", (word) => {
    callBack(word);
  });
};

export const receiveSayWordSucceed = (callBack) => {
  client.on("say word succeed", (data) => {
    callBack(data);
  });
};

// ====== 타이머 ======
export const onTimer = (callBack) => {
  client.on("timer", (data) => {
    callBack(data);
  });
};

// ====== 턴 종료 ======
export const onTurnEnd = (callBack) => {
  client.on("turn end", () => {
    callBack();
  });
};

// ====== 라운드 종료 ======
export const onRoundEnd = (callBack) => {
  client.on("round end", (roundResult) => {
    callBack(roundResult);
  });
};

// ====== 게임 종료 ======
export const onGameEnd = (callBack) => {
  client.on("game end", (ranking) => {
    callBack(ranking);
  });
};

export const disconnectSocket = () => {
  if (client.connected) {
    client.disconnect("[log] Disconnected from the Server...");
  }
};
