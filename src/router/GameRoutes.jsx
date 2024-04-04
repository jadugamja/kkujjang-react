import { lazy, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { initSocket, disconnectSocket, onBanned } from "../services/socket";
import Modal from "../components/Game/Shared/GameModal";

const Lobby = lazy(() => import("@/pages/Game/Lobby"));
const GameRoom = lazy(() => import("@/pages/Game/GameRoom"));

const GameRoute = () => {
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    initSocket(
      () => {},
      (error) => {
        setError(error);
        setIsModalOpen(true);
        return;
      }
    );

    onBanned((bannedData) => {
      setError(bannedData);
      setIsModalOpen(true);
      return;
    });

    return () => disconnectSocket();
  }, []);

  return (
    <Routes>
      {isModalOpen && (
        <Modal
          type="error"
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          height="14rem"
        >
          {error}
        </Modal>
      )}
      <Route path="/" element={<Lobby />} />
      <Route path=":roomId" element={<GameRoom />} />
    </Routes>
  );
};

export default GameRoute;
