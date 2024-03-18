import { lazy, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { waitingPlayerListState } from "../recoil/userState";
import {
  initSocket,
  disconnectSocket,
  loadRoomList,
  onLoadNewRoom,
  onDestroyRoom,
  onUpdateCurrentPlayerCount,
  onUpdateRoomConfig,
  onUserJoinRoom,
  onUserLeaveRoom,
  onChangeRoomOwner
} from "../services/socket";

const Lobby = lazy(() => import("@/pages/Game/Lobby"));
const GameRoom = lazy(() => import("@/pages/Game/GameRoom"));

const GameRoute = () => {
  const [error, setError] = useState(null);
  const [rooms, setRooms] = useState([]);
  const setWaitingPlayerList = useSetRecoilState(waitingPlayerListState);

  let isMounted = false;

  useEffect(() => {
    initSocket(
      () => {
        /* for Lobby */
        // loadRoomList(setRooms);
        // onLoadNewRoom((newRoom) => {
        //   setRooms((prev) => [newRoom, ...prev]);
        // });
        // onDestroyRoom((roomId) => {
        //   setRooms((prev) => prev.filter((room) => room.id !== roomId));
        // });
        // onUpdateCurrentPlayerCount((data) => {
        //   const { roomId, currentPlayerCount } = data;
        //   setRooms((prev) =>
        //     prev.map((room) =>
        //       room.id === roomId ? { ...room, currentPlayerCount } : room
        //     )
        //   );
        // });
        // onUpdateRoomConfig((newRoom) => {
        //   setRooms((prev) =>
        //     prev.map((room) => (room.id === newRoom.id ? { ...room, ...newRoom } : room))
        //   );
        // });
        /* for GameRoom */
        // onUserJoinRoom((user) => {
        //   setWaitingPlayerList((prev) => [...prev, user]);
        // });
        // onUserLeaveRoom((userId) => {
        //   setWaitingPlayerList((prev) => prev.filter((user) => user.id !== userId));
        // });
        // onChangeRoomOwner((newOwnerIdx) => {
        //   setWaitingPlayerList((prev) => {
        //     const updatedList = [...prev];
        //     updatedList[newOwnerIdx].isHost = true;
        //     return updatedList;
        //   });
        // });
      },
      (error) => {
        setError(error);
        return;
      }
    );

    return () => disconnectSocket();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Lobby />} />
      <Route path=":roomId" element={<GameRoom />} />
    </Routes>
  );
};

export default GameRoute;
