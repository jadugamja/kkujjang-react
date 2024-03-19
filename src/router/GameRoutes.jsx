import { lazy, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { initSocket, disconnectSocket } from "../services/socket";

const Lobby = lazy(() => import("@/pages/Game/Lobby"));
const GameRoom = lazy(() => import("@/pages/Game/GameRoom"));

const GameRoute = () => {
  const [error, setError] = useState(null);
  const [rooms, setRooms] = useState([]);

  let isMounted = false;

  useEffect(() => {
    initSocket(
      () => {},
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
