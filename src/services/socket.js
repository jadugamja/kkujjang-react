import io from "socket.io-client";
import { Cookies } from "react-cookie";
import { SOCKET_URL } from "./const";

const cookies = new Cookies();

const client = io(SOCKET_URL, {
  path: "/game/socket.io/",
  // transports: ["websocket"],
  reconnection: false,
  sid: cookies.get("sessionId"),
  extraHeaders: {
    // "my-header": "1234"
    sessionId: cookies.get("sessionId")
  }
});

// ====== 소켓 초기화 ======
export const initSocket = (callBack, errorCallBack) => {
  client.on("connect", () => {
    console.log("[log] Connect to the Server...");
    callBack();
  });

  client.on("error", (error) => {
    console.error(`[Error]: ${error}`);
    if (errorCallBack) errorCallBack(error);
  });
};

// ====== 방 목록 조회 ======
export const loadRoomList = (callBack) => {
  client.emit("load room list");

  client.on("complete load room list", (roomList) => {
    console.log("[log] Complete Load Room List: ", roomList);
    callBack(roomList);
  });
};

// ====== 방 목록 갱신: 추가 ======
export const onLoadNewRoom = (callBack) => {
  client.on("load new room", (newRoom) => {
    console.log("[log] Load New Room: ", newRoom);
    callBack(newRoom);
  });
};

// ====== 방 목록 갱신: 삭제 ======
export const onDestroyRoom = (callBack) => {
  client.on("destroy room", (roomId) => {
    console.log("[log] Destroy Room: ", roomId);
    callBack(roomId);
  });
};

// ====== 방 목록 갱신: 참여 인원 변경 ======
export const onUpdateCurrentPlayerCount = (callBack) => {
  client.on("update room member count", (data) => {
    console.log("[log] update room member count: ", data);
    callBack(data);
  });
};

// ====== 방 목록 갱신: 방 설정 변경 ======
export const onUpdateRoomConfig = (callBack) => {
  client.on("update room config", (newRoom) => {
    console.log("[log] update room config: ", newRoom);
    callBack(newRoom);
  });
};

// ====== 방 생성 ======
export const createRoom = (roomData, callBack) => {
  client.emit("create room", roomData);

  client.on("complete create room", () => {
    console.log("[log] complete create room...");
    callBack();
  });

  client.on("error", (error) => {
    console.error(`[Error]: ${error}`);
  });
};

// ====== 방 수정 ======
export const changeRoomConfig = (roomData, callBack, errorCallBack) => {
  client.emit("change room config", roomData);

  client.on("complete change room config", (room) => {
    console.log("[log] complete change room config: ", room);
    callBack(room);
  });

  client.on("error", (error) => {
    console.error(`[Error]: ${error}`);
    errorCallBack(error);
  });
};

// ====== 방 참가 ======
export const joinRoom = (authorization, callBack, errorCallBack) => {
  client.emit("join room", authorization);

  client.on("complete join room", () => {
    console.log("[log] complete join room... ");
    callBack();
  });

  client.on("error", (error) => {
    console.error(`[Error]: ${error}`);
    if (!!errorCallBack) errorCallBack(error);
  });
};

// 다른 유저 참가 알림
export const onUserJoinRoom = (callBack) => {
  client.on("some user join room", (userId) => {
    console.log("[log] some user join room: ", userId);
    callBack(userId);
  });
};

// ====== 방 조회 ======
export const loadRoom = (callBack, errorCallBack) => {
  client.emit("load room");

  client.on("complete load room", (room) => {
    console.log("[log] complete load room: ", room);
    callBack(room);
  });

  client.on("error", (error) => {
    console.error(`[Error]: ${error}`);
    if (errorCallBack) errorCallBack(error);
  });
};

// ====== 방 퇴장 ======
export const leaveRoom = (callBack, errorCallBack) => {
  client.emit("leave room");

  client.on("complete leave room", () => {
    console.log("[log] complete leave room... ");
    callBack();
  });

  client.on("error", (error) => {
    console.error(`[Error]: ${error}`);
    if (errorCallBack) errorCallBack(error);
  });
};

// 다른 유저 퇴장 알림
export const onUserLeaveRoom = (callBack) => {
  client.on("some user leave room", (roomStatus) => {
    console.log("[log] some user leave room, userId: ", roomStatus);
    callBack(roomStatus);
  });
};

// 방장 변경
export const onChangeRoomOwner = (callBack) => {
  client.on("change room owner", (newOwnerIdx) => {
    console.log("[log] change room owner, newOwnerIdx: ", newOwnerIdx);
    callBack(newOwnerIdx);
  });
};

// ====== 준비 요청 ======
export const switchReadyState = (newState, callBack) => {
  client.emit("switch ready state", newState);

  client.on("complete switch ready state", (data) => {
    console.log("[log] complete switch ready state, data: ", data);
    callBack(data);
  });

  client.on("error", (error) => {
    console.error(`[Error]: ${error}`);
    if (errorCallBack) errorCallBack(error);
  });
};

export const onSwitchReadyState = (callBack) => {
  client.on("complete switch ready state", (data) => {
    console.log("[log] complete switch ready state, data: ", data);
    callBack(data);
  });
};

// ====== 게임 시작 요청 ======
export const gameStart = (callBack, errorCallBack) => {
  client.emit("game start");
  client.on("complete game start", (room) => {
    console.log("[log] complete game start, room", room);
    callBack(room);
  });
  client.on("error", (error) => {
    console.log("[Error] error: ", error);
    errorCallBack(error);
  });
};

// ====== 라운드 시작 요청 ======
export const roundStart = (callBack, errorCallBack) => {
  client.emit("round start");
  client.on("complete round start", (gameStatus) => {
    console.log("[log] complete round start, room: ", gameStatus);
    callBack(gameStatus);
  });
  client.on("error", (error) => {
    console.log("[Error]: ", error);
    errorCallBack(error);
  });
};

// ====== 턴 시작 요청 ======
export const turnStart = (callBack, errorCallBack) => {
  client.emit("turn start");
  client.on("complete turn start", (gameStatus) => {
    console.log("[log] complete turn start, room: ", gameStatus);
    callBack(gameStatus);
  });
  client.on("error", (error) => {
    console.log("[Error]: ", error);
    errorCallBack(error);
  });
};

// ====== 채팅 ======
export const sendMessage = (_message, callBack, failureCallBack, successCallBack) => {
  if (client.connected) {
    client.emit("chat", _message);

    client.on("chat", (message) => {
      console.log("[log] chat, message: ", message);
      callBack(message);
    });

    client.on("say word fail", (word) => {
      console.log("[log] say word fail: ", word);
      failureCallBack(word);
    });

    client.on("say word succeed", (data) => {
      console.log("[log] say word succeed: ", data);
      successCallBack(data);
    });
  }
};

export const receiveMessage = (callBack) => {
  client.on("chat", (message) => {
    // 메시지 구성 {nickname: "", message: ""}
    // const { fromNickname, fromMessage } = message;
    console.log("[log] chat, message: ", message);
    callBack(message);
  });
};

export const receiveSayWordFail = (callBack) => {
  client.on("say word fail", (word) => {
    console.log("[log] say word fail: ", word);
    callBack(word);
  });
};

export const receiveSayWordSucceed = (callBack) => {
  client.on("say word succeed", (data) => {
    console.log("[log] say word succeed: ", data);
    callBack(data);
  });
};

// ====== 타이머 ======
export const onTimer = (callBack) => {
  client.on("timer", (data) => {
    console.log("[log] timer: ", data);
    callBack(data);
  });
};

// ====== 턴 종료 ======
export const onTurnEnd = (callBack) => {
  client.on("turn end", () => {
    console.log("[log] turn end... ");
    callBack();
  });
};

// ====== 라운드 종료 ======
export const onRoundEnd = (callBack) => {
  client.on("round end", (roundResult) => {
    console.log("[log] round end... ");
    callBack(roundResult);
  });
};

// ====== 게임 종료 ======
export const onGameEnd = (callBack) => {
  client.on("game end", (ranking) => {
    console.log("[log] game end... ");
    callBack(ranking);
  });
};

export const disconnectSocket = () => {
  debugger;
  if (client.connected) {
    client.disconnect("[log] Disconnected from the Server...");
    // 재연결 시도
    // setTimeout(initSocket, 1000);
  }
};
