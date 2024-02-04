import io from "socket.io-client";

const client = io("서버 IP:서버포트");

export const initSocket = () => {
  client.on("connect", () => {
    console.log("[log] Connect to the Server ....");
  });
}

export const sendMessage = (message) => {
  if (client.connected) {
    client.emit("message", message);
  }
}

export const receiveMessage = (callBack) => {
  client.on("message", (message) => {
    callBack(message);
  })
}

export const disconnect = () => {
  if (client.connected) {
    client.disconnect("[log] Disconnected from the Server ....");
  }
}