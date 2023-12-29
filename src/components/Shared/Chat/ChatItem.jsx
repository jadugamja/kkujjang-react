import PropTypes from "prop-types";
import { ChatContent, NickName, Message } from "./ChatStyle";
const ChatItem = ({ nickname, message }) => {
  return (
    <ChatContent>
      <NickName row="center" col="center">
        <span>{nickname}</span>
      </NickName>
      <Message col="center">
        <span>{message}</span>
      </Message>
    </ChatContent>
  );
};

ChatItem.propTypes = {
  nickname: PropTypes.string,
  message: PropTypes.string
};

export default ChatItem;
