import { useState, useRef, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  initialCharacterState,
  thisTurnLeftTimeState,
  myTurnPlayerIndexState,
  isWordFailState,
  balloonMessageState
} from "@/recoil/gameState";
import { userInfoState } from "@/recoil/userState";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import FlexBox from "@/styles/FlexStyle";
import ChatItem from "./ChatItem";
import { loadRoom, receiveMessage, sendMessage } from "../../../services/socket";
import { getPlayerInfoByUserId } from "@/services/user";
import { waitingPlayerListState } from "../../../recoil/userState";

const Chat = ({ isPlaying, size = "default" }) => {
  const userInfo = useRecoilValue(userInfoState);
  // const [myTurn, setMyTurn] = useRecoilState(myTurnPlayerIndexState);
  const playerList = useRecoilValue(waitingPlayerListState);
  const leftTime = useRecoilValue(thisTurnLeftTimeState);
  const [initialCharacter, setInitialCharacter] = useRecoilState(initialCharacterState);
  const setIsFail = useSetRecoilState(isWordFailState);

  const [toMessage, setToMessage] = useState("");
  const setBalloonMessage = useSetRecoilState(balloonMessageState);
  const [chats, setChats] = useState([]);

  // const messageQueue = useRef([]);
  const chatResult = useRef(null);
  const chatInput = useRef();
  const cs = useRef(null);

  useEffect(() => {
    receiveMessage(async (data) => {
      // 사용자가 스크롤 제어하는지 확인
      const isUserScrolling =
        chatResult.current.scrollHeight - chatResult.current.scrollTop !==
        chatResult.current.clientHeight;

      // 사용자가 스크롤을 제어하지 않는 경우
      if (!isUserScrolling) {
        // messages 상태 변경되는 경우, 스크롤 위치 아래로 이동
        chatResult.current.scrollTop = chatResult.current.scrollHeight;
      }

      const { userId, message } = data;
      const nickname = await getNicknameByUserId(userId);
      setChats((prevChat) => [...prevChat, { nickname: nickname, message: message }]);
      if (isPlaying) setBalloonMessage({ userId: userId, message: message });
    });
  }, []);

  // 사용자가 메시지를 입력한 경우, 스크롤 맨아래 유지
  useEffect(() => {
    if (chatResult.current) {
      chatResult.current.scrollTop = chatResult.current.scrollHeight;
    }
  }, [chats]);

  // const processMessages = async () => {
  //   while (messageQueue.current.length > 0) {
  //     // 사용자가 스크롤 제어하는지 확인
  //     const isUserScrolling =
  //       chatResult.current.scrollHeight - chatResult.current.scrollTop !==
  //       chatResult.current.clientHeight;

  //     // 사용자가 스크롤을 제어하지 않는 경우
  //     if (!isUserScrolling) {
  //       // messages 상태 변경되는 경우, 스크롤 위치 아래로 이동
  //       chatResult.current.scrollTop = chatResult.current.scrollHeight;
  //     }

  //     const data = messageQueue.current.shift();
  //     const { userId, message } = data;
  //     const nickname = await getNicknameByUserId(userId);
  //     setChats((prevChat) => [...prevChat, { nickname: nickname, message: message }]);
  //   }
  // };

  const sendChatMessage = () => {
    sendMessage(toMessage);
    setToMessage("");
    chatInput.current.focus();
  };

  const handleMessage = (e) => {
    e.preventDefault();

    if (toMessage) sendChatMessage(toMessage);
  };

  const getNicknameByUserId = async (userId) => {
    const userInfo = await getPlayerInfoByUserId(userId);
    return userInfo.nickname;
  };

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
  isPlaying: PropTypes.bool,
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
