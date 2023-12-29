import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlexBox from "@/styles/FlexStyle";

export const ChatWrapper = styled(FlexBox)`
  width: ${(props) => (props.width === "big" ? "inherit" : "71.75rem")};
  height: ${(props) => (props.height === "big" ? "inherit" : "12.25rem")};
  background-color: #eee;
  margin-top: 400px;
  border: 1px solid red;
`;

export const ChatHeader = styled.div`
  width: ${(props) => (props.width === "big" ? "inherit" : "70.25rem")};
  height: ${(props) => (props.height === "big" ? "inherit" : "20px")};
  margin-left: 10px;
  padding-left: 10px;
  border-radius: 4px;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.25);
  background-color: #dddddd;
  opacity: 0.8;
  color: #000000cc;
  font-size: ${({ theme }) => theme.fontSize.xxxxs};
  font-weight: 700;
`;

export const ChatIcon = styled(FontAwesomeIcon)`
  margin-right: 4px;
`;

export const ChatContent = styled(FlexBox)`
  height: 20px;
`;

export const NickName = styled(FlexBox)`
  width: 104px;
  height: inherit;
  font-weight: 700;
`;

export const Message = styled(FlexBox)`
  height: inherit;
`;

export const ChatItemWrapper = styled(FlexBox)`
  flex-basis: 65%;
  margin: 2px 12px;
  overflow-y: auto;
`;

export const ChatInputWrapper = styled(FlexBox)`
  position: relative;
  height: 36px;
  border: 1px solid #888;
  border-radius: 10px;
  margin: 0 10px;
`;

export const ChatInput = styled.input`
  width: 100%;
  border: 0;
  border-radius: 10px 0 0 10px;
  padding: 0 10px;
  font-size: 16px;
`;

export const ChatSubmitButton = styled(FlexBox).attrs({
  as: "button"
})`
  width: 4.625rem;
  font-size: 15px;
  font-weight: 700;
  color: #5590e0;
  border-radius: 0 10px 10px 0;
`;
