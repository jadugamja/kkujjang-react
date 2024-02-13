import io from "socket.io-client";
import { BASE_URL } from "./const";

const client = io(BASE_URL);

export const initSocket = () => {
  client.on("connect", () => {
    console.log("[log] Connect to the Server ....");
  });
};

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

export const disconnect = () => {
  if (client.connected) {
    client.disconnect("[log] Disconnected from the Server ....");
  }
};
