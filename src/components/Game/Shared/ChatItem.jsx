import styled from "styled-components";
import PropTypes from "prop-types";

import FlexBox from "@/styles/FlexStyle";

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

const ChatContent = styled(FlexBox)`
  height: 20px;
`;

const NickName = styled(FlexBox)`
  width: 104px;
  height: inherit;
  font-weight: 700;
`;

const Message = styled(FlexBox)`
  height: inherit;
`;

ChatItem.propTypes = {
  nickname: PropTypes.string,
  message: PropTypes.string
};

export default ChatItem;
