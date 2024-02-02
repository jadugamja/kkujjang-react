import io from "socket.io-client";

const WEBSOCKET_URL = process.env.REACT_APP_WEBSOCKET_URL;
const client = io(WEBSOCKET_URL);

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