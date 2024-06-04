import { lazy, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";

import { initSocket, disconnectSocket, onBanned } from "../services/socket";
import Modal from "../components/Game/Shared/GameModal";
import { audioPlayState } from "../recoil/soundState";
import { hadVisitedState } from "../recoil/gameState";

const Lobby = lazy(() => import("@/pages/Game/Lobby"));
const GameRoom = lazy(() => import("@/pages/Game/GameRoom"));

const GameRoute = () => {
  const [, , removeCookie] = useCookies(["sessionId"]);
  const navigate = useNavigate();

  const setAudioPlay = useSetRecoilState(audioPlayState);
  const [hadVisited, setHadVisited] = useRecoilState(hadVisitedState);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (hadVisited) window.location.reload();

    setAudioPlay(true);

    initSocket((error) => {
      let message = error.message;
      if (message?.startsWith("Error")) message = message.slice(7);
      setErrorMessage(message ? message : error);
      setIsModalOpen(true);
      return;
    });

    onBanned((bannedData) => {
      setErrorMessage(
        `사용이 금지된 회원입니다.
        금지 사유: ${bannedData.bannedReason}
        금지 기간: ${bannedData.bannedDays}`
      );
      setIsModalOpen(true);

      return;
    });

    setHadVisited(true);

    return () => {
      setAudioPlay(false);
      disconnectSocket();
    };
  }, []);

  const onCloseModal = () => {
    setIsModalOpen(false);
    logout();
  };

  const logout = () => {
    removeCookie("sessionId", { path: "/" });
    navigate("/");
  };

  return (
    <>
      {isModalOpen && (
        <Modal type="error" isOpen={isModalOpen} setIsOpen={onCloseModal} height="16rem">
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
