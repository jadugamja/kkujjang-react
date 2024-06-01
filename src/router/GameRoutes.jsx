import { lazy, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { initSocket, disconnectSocket, onBanned } from "../services/socket";
import Modal from "../components/Game/Shared/GameModal";
import { audioPlayState } from "../recoil/soundState";
import { useCookies } from "react-cookie";

const Lobby = lazy(() => import("@/pages/Game/Lobby"));
const GameRoom = lazy(() => import("@/pages/Game/GameRoom"));

const GameRoute = () => {
  const [, , removeCookie] = useCookies(["sessionId"]);
  const navigate = useNavigate();

  const setAudioPlay = useSetRecoilState(audioPlayState);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const logout = () => {
    removeCookie("sessionId", { path: "/" });
    navigate("/");
  };

  useEffect(() => {
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
        `
        활동이 정지된 회원입니다.
        비활성화 사유: ${bannedData.bannedReason}
        비활성화 기간: ${bannedData.bannedDays}`
      );
      setIsModalOpen(true);

      return;
    });

    return () => {
      setAudioPlay(false);
      disconnectSocket();
    };
  }, []);

  const onCloseModal = () => {
    setIsModalOpen(false);
    logout();
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
