import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useLocation } from "react-router-dom";
import { audioPlayState, bgVolumeState, fxVolumeState } from "@/recoil/soundState";

const bgm = "/audio/game_background_sound.mp3";

const Audio = () => {
  const location = useLocation();
  const audioPlay = useRecoilValue(audioPlayState);
  const [bgVolume, setBgVolume] = useRecoilState(bgVolumeState);
  const [fxVolume, setFxVolume] = useRecoilState(fxVolumeState);

  const audioRef = useRef(null);

  useEffect(() => {
    const savedBgVolume = localStorage.getItem("bgVolume");
    const savedFxVolume = localStorage.getItem("fxVolume");

    if (savedBgVolume) {
      setBgVolume(parseFloat(savedBgVolume));
    }

    if (savedFxVolume) {
      setFxVolume(parseFloat(savedFxVolume));
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = bgVolume;
    }
  }, [bgVolume]);

  // useEffect(() => {
  //   if (audioPlay && audioRef.current && audioRef.current.paused) {
  //     onPlayAudio();
  //   }
  // }, [audioPlay]);

  const onPlayAudio = () => {
    if (audioRef.current) {
      const savedBgVolume = localStorage.getItem("bgVolume");
      if (savedBgVolume) {
        audioRef.current.volume = parseFloat(savedBgVolume);
      }
      audioRef.current.play();
    }
  };

  return (
    audioPlay && (
      <audio ref={audioRef} src={bgm} autoPlay loop={true} onPlay={onPlayAudio} />
    )
  );
};

export default Audio;
