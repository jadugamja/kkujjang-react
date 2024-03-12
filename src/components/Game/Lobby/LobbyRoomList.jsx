import { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FlexBox from "@/styles/FlexStyle";
import TitleBar from "../Shared/TitleBar";
import LobbyRoomItem from "./LobbyRoomItem";

const LobbyRoomList = ({ rooms }) => {
  const [showWaitingRoom, setShowWaitingRoom] = useState(false);
  const [showOpenRoom, setShowOpenRoom] = useState(false);

  useEffect(() => {}, []);

  return (
    <RoomListWrapper dir="col">
      <TitleBar
        type="list"
        row="between"
        showWaitingRoom={showWaitingRoom}
        setShowWaitingRoom={setShowWaitingRoom}
        showOpenRoom={showOpenRoom}
        setShowOpenRoom={setShowOpenRoom}
      />
      <RoomItemWrapper row="between">
        {rooms
          ?.filter((room) => {
            if (showWaitingRoom && room.state === "playing") {
              return false;
            }
            if (showOpenRoom && room.isSecure === true) {
              return false;
            }
            return true;
          })
          .map((room) => (
            <LobbyRoomItem key={room.id} roomInfo={room} />
          ))}
      </RoomItemWrapper>
    </RoomListWrapper>
  );
};

LobbyRoomList.propTypes = {
  rooms: PropTypes.array
};

const RoomListWrapper = styled(FlexBox)`
  width: 57.6rem;
  height: 100%;
  padding: 3px 5px;
  background-color: #748f9b80;
  border: 1px solid #7d7d7d;
`;
const RoomItemWrapper = styled(FlexBox)`
  max-height: 32rem;
  margin: 12px 0;
  padding: 0 24px;
  flex-wrap: wrap;
  overflow: auto;
`;

export default LobbyRoomList;
