import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import {
  ChatWrapper,
  ChatHeader,
  ChatIcon,
  ChatItemWrapper,
  ChatInputWrapper,
  ChatInput,
  ChatSubmitButton
} from "./ChatStyle";
import ChatItem from "./ChatItem";

// 환경 변수 가져오기
const WEBSOCKET_URL = process.env.REACT_APP_WEBSOCKET_URL;

const Chat = ({ sessionId, roomId }) => {
  const [toMessage, setToMessage] = useState("");
  const [chats, setChats] = useState([]);

  const chatResult = useRef(null);
  const chatInput = useRef();
  const ws = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();

    if (ws.current && toMessage) {
      const _chat = {
        type: "CHAT",
        sessionId: sessionId,
        roomId: roomId,
        nickname: "테스트",
        message: toMessage
      };

      ws.current.onopen = () => {
        console.log(ws.current.readyState);
        ws.current.send(JSON.stringify(_chat));
      };
      setChats([...chats, { nickname: "테스트", message: toMessage }]);
      setToMessage("");
      chatInput.current.focus();
    }
  };

  // 사용자가 메시지를 입력한 경우
  useEffect(() => {
    if (chatResult.current) {
      chatResult.current.scrollTop = chatResult.current.scrollHeight;
    }
  }, [chats]);

  // 다른 사용자가 메시지를 입력한 경우
  useEffect(() => {
    // 웹 소켓 연결 초기화
    ws.current = new WebSocket(WEBSOCKET_URL);

    // 웹 소켓으로부터 받은 메시지
    ws.current.onmessage = (e) => {
      const { fromNickname, fromMessage } = JSON.parse(e.data);

      // 사용자가 스크롤 제어하는지 확인
      const isUserScrolling =
        chatResult.current.scrollHeight - chatResult.current.scrollTop !==
        chatResult.current.clientHeight;

      // 사용자가 스크롤을 제어하지 않는 경우
      if (!isUserScrolling) {
        // messages 상태 변경되는 경우, 스크롤 위치 아래로 이동
        chatResult.current.scrollTop = chatResult.current.scrollHeight;
      }

      setChats((prevChat) => [
        ...prevChat,
        { nickname: fromNickname, message: fromMessage }
      ]);
    };

    // 컴포넌트 언마운트될 때 WebSocket 연결 종료
    return () => {
      ws.current.close();
    };
  }, [chats]);

  return (
    <ChatWrapper dir="col">
      <ChatHeader>
        <ChatIcon icon={faComment} />
        채팅
      </ChatHeader>
      <ChatItemWrapper dir="col" ref={chatResult}>
        {chats.map((chat, i) => (
          <ChatItem key={i} nickname={chat.nickname} message={chat.message} />
        ))}
      </ChatItemWrapper>
      <ChatInputWrapper row="between">
        <ChatInput
          type="text"
          value={toMessage}
          onChange={(e) => setToMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage(e);
          }}
          ref={chatInput}
        />
        <ChatSubmitButton col="center" row="center" onClick={sendMessage}>
          전송
        </ChatSubmitButton>
      </ChatInputWrapper>
    </ChatWrapper>
  );
};

Chat.propTypes = {
  sessionId: PropTypes.string,
  roomId: PropTypes.string
};

export default Chat;
