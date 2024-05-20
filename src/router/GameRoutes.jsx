import { lazy, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { initSocket, disconnectSocket, onBanned } from "../services/socket";
import Modal from "../components/Game/Shared/GameModal";
import { audioPlayState } from "../recoil/soundState";

const Lobby = lazy(() => import("@/pages/Game/Lobby"));
const GameRoom = lazy(() => import("@/pages/Game/GameRoom"));

const GameRoute = () => {
  const location = useLocation();
  const setAudioPlay = useSetRecoilState(audioPlayState);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (location.pathname.startsWith("/game")) {
      setAudioPlay(true);
      initSocket((error) => {
        setErrorMessage(error);
        setIsModalOpen(true);
        return;
      });

      onBanned((bannedData) => {
        setErrorMessage(bannedData);
        setIsModalOpen(true);
        return;
      });

      return () => {
        setAudioPlay(false);
        disconnectSocket();
      };
    }
  }, [location]);

  return (
    <>
      {isModalOpen && (
        <Modal
          type="error"
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          height="14rem"
        >
          {errorMessage}
        </Modal>
      )}
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path=":roomId" element={<GameRoom />} />
      </Routes>
    </>
  );
};

export default GameRoute;
