import { useState, useRef, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { io } from "socket.io-client";

import {
  initialCharacterState,
  thisTurnLeftTimeState,
  myTurnState
} from "@/recoil/gameState";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import FlexBox from "@/styles/FlexStyle";
import ChatItem from "./ChatItem";

// 환경 변수 가져오기
const SOCKET_URL = process.env.REACT_APP_SOCKET_URL;

const Chat = ({ sessionId, roomId, size = "default" }) => {
  const [myTurn, setMyTurn] = useRecoilState(myTurnState);
  const leftTime = useRecoilValue(thisTurnLeftTimeState);
  const [initialCharacter, setInitialCharacter] = useRecoilState(initialCharacterState);
  const [toMessage, setToMessage] = useState("");
  const [chats, setChats] = useState([]);

  const chatResult = useRef(null);
  const chatInput = useRef();
  const cs = useRef(null);

  const sendChatMessage = () => {
    if (cs.current && toMessage) {
      const _chat = {
        type: "CHAT",
        sessionId: sessionId,
        roomId: roomId,
        nickname: "테스트",
        message: toMessage
      };

      // 소켓 전송
      cs.current.emit("message", _chat);

      setChats([...chats, { nickname: "테스트", message: toMessage }]);
      setToMessage("");
      chatInput.current.focus();
    }
  };

  const sendGameWord = (word) => {
    if (toMessage.length > 1) {
      if (leftTime > 0) {
        // 유효 단어 여부 확인 API 호출
      } else {
        // 현재 차례 시간 만료
      }
    }

    sendChatMessage(word);
  };

  const handleMessage = (e) => {
    e.preventDefault();

    if (toMessage) {
      // myTurn 임시 index 부여
      if (
        initialCharacter !== "" &&
        myTurn === 0 &&
        toMessage.startsWith(initialCharacter)
      ) {
        sendGameWord(toMessage);
      } else {
        sendChatMessage(toMessage);
      }
    }
  };

  // 사용자가 메시지를 입력한 경우, 스크롤 맨아래 유지
  useEffect(() => {
    if (chatResult.current) {
      chatResult.current.scrollTop = chatResult.current.scrollHeight;
    }
  }, [chats]);

  // 다른 사용자가 메시지를 입력한 경우
  useEffect(() => {
    // 소켓 연결 초기화
    cs.current = io(SOCKET_URL);

    // 소켓으로부터 받은 메시지
    cs.current.on("message", (data) => {
      const { fromNickname, fromMessage } = data;

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
    });
    // 컴포넌트 언마운트될 때 소켓 연결 종료
    return () => cs.current.disconnect();
  }, [chats]);

  return (
    <ChatWrapper dir="col" size={size}>
      <ChatHeader size={size}>
        <ChatIcon icon={faComment} />
        채팅
      </ChatHeader>
      <ChatItemWrapper dir="col" ref={chatResult}>
        {chats?.map((chat, i) => (
          <ChatItem key={i} nickname={chat.nickname} message={chat.message} />
        ))}
      </ChatItemWrapper>
      <ChatInputWrapper row="between">
        <ChatInput
          type="text"
          value={toMessage}
          onChange={(e) => setToMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleMessage(e);
          }}
          ref={chatInput}
        />
        <ChatSubmitButton col="center" row="center" onClick={handleMessage}>
          전송
        </ChatSubmitButton>
      </ChatInputWrapper>
    </ChatWrapper>
  );
};

Chat.propTypes = {
  sessionId: PropTypes.string,
  roomId: PropTypes.string,
  size: PropTypes.string
};

// ver 1. width: 46rem
const ChatWrapper = styled(FlexBox)`
  width: ${({ size }) => (size === "big" ? "100%" : "57rem")};
  height: 12.25rem;
  background-color: #eee;
  padding: 6px 4px;
`;

const ChatHeader = styled.div`
  width: ${({ size }) => (size === "big" ? "calc(100% - 8px)" : "auto")};
  height: 20px;
  margin: 0 5px;
  padding-left: 10px;
  border-radius: 4px;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.25);
  background-color: #dddddd;
  opacity: 0.8;
  color: #000000cc;
  font-size: ${({ theme }) => theme.fontSize.xxxxs};
  font-weight: 700;
`;

const ChatIcon = styled(FontAwesomeIcon)`
  margin-right: 4px;
`;

const ChatItemWrapper = styled(FlexBox)`
  flex-basis: 65%;
  flex-grow: 1;
  margin: 2px 12px;
  overflow-y: auto;
`;

const ChatInputWrapper = styled(FlexBox)`
  position: relative;
  height: 36px;
  border: 1px solid #888;
  border-radius: 10px;
  margin: 0 10px;
`;

const ChatInput = styled.input`
  width: 100%;
  border: 0;
  border-radius: 10px 0 0 10px;
  padding: 0 10px;
  font-size: 16px;
`;

const ChatSubmitButton = styled(FlexBox).attrs({
  as: "button"
})`
  width: 4.625rem;
  font-size: 15px;
  font-weight: 700;
  color: #5590e0;
  border-radius: 0 10px 10px 0;
`;

export default Chat;
