import PropTypes from "prop-types";

import { BodyWrapper, UpperWrapper, Wrapper } from "../Shared/Layout";
import TitleBar from "../Shared/TitleBar";
import WaitingPlayerList from "./WaitingPlayerList";
import Profile from "../Shared/Profile";
import Chat from "../Shared/Chat";

const WaitingContainer = ({ roomInfo }) => {
  return (
    <BodyWrapper dir="col">
      <UpperWrapper dir="col" type="wait">
        <TitleBar type="room" info={roomInfo} />
        <WaitingPlayerList />
      </UpperWrapper>
      <Wrapper>
        <Profile />
        <Chat isPlaying={roomInfo?.state === "playing"} />
      </Wrapper>
    </BodyWrapper>
  );
};

WaitingContainer.propTypes = {
  roomInfo: PropTypes.object
};

export default WaitingContainer;
