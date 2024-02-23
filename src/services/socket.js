import io from "socket.io-client";
import { SOCKET_URL } from "./const";

const client = io(`${SOCKET_URL}/socket`, {
  transports: ["websocket"]
});

// ====== 소켓 초기화 ======
export const initSocket = (setError) => {
  client.on("connect", () => {
    console.log("[log] Connect to the Server ....");
  });

  client.on("error", (error) => {
    console.error(`[log] Error: ${error}`);
    setError(true);
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

// ====== 방 생성 ======
export const createRoom = (roomData, callBack) => {
  client.emit("create room", roomData);

  client.on("complete create room", (room) => {
    callBack(room);
  });
};

// ====== 방 수정(요청 필요) ======
export const updateRoom = (roomData, callBack) => {
  client.emit("update room", roomData);

  client.on("complete update room", (room) => {
    callBack(room);
  });
};

// ====== 방 참가 ======
export const joinRoom = (roomData) => {
  client.emit("join room", roomData);
};

export const onJoinRoom = (callBack) => {
  client.on("complete join room", () => {
    callBack();
  });
};

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
export const leaveRoom = (roomId) => {
  client.emit("leave room", roomId);
};

export const onLeaveRoom = (callBack) => {
  client.on("complete leave room", () => {
    callBack();
  });
};

export const onUserLeaveRoom = (callBack) => {
  client.on("some user leave room", (userId) => {
    callBack(userId);
  });
};

// 준비 완료 요청
export const switchReadyState = (state) => {
  client.emit("switch ready state", state);
};

export const onSwitchReadyState = (callBack) => {
  client.on("complete switch ready state", (state) => {
    callBack(state);
  });
};

// 게임 시작 요청
export const gameStart = () => {
  client.emit("game start");
};

export const onGameStart = (callBack) => {
  client.on("complete game start", (room) => {
    callBack(room);
  });
};

// 라운드 시작 요청
export const roundStart = () => {
  client.emit("round start");
};

export const onRoundStart = (callBack) => {
  client.on("complete round start", (room) => {
    callBack(room);
  });
};

// 턴 시작 요청
export const turnStart = () => {
  client.emit("turn start");
};

export const onTurnStart = (callBack) => {
  client.on("complete turn start", (room) => {
    callBack(room);
  });
};

// 게임

// ====== 채팅 ======
export const sendMessage = (message) => {
  if (client.connected) {
    client.emit("message", message);
  }
};

export const receiveMessage = (callBack) => {
  client.on("message", (message) => {
    // 메시지 구성 {nickname: "", message: ""}
    // const { fromNickname, fromMessage } = message;

    callBack(message);
  });
};

export const disconnectSocket = () => {
  if (client.connected) {
    client.disconnect("[log] Disconnected from the Server ....");
  }
};
