import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import { bgVolumeState, fxVolumeState } from "@/recoil/soundState";

import VolumeControl from "./VolumeControl";
import Profile from "./Profile";
import ValidationMessage from "@/components/Web/Shared/Form/ValidationMessage";
import {
  GameModalBackground,
  GameModalContent,
  GameModalHeader,
  GameModalBody,
  GameModalMessageWrapper,
  GameModalMessage,
  GameModalLongMessage,
  GameModalSubMessage,
  GameModalButton,
  GameModalSelect,
  GameModalInputWrapper,
  GameModalInput,
  GameModalAvatarWrapper,
  AvatarImage,
  ArrowIconImage,
  ExitMiniCircle,
  Table,
  Tbody,
  Tr,
  TdLabel,
  TdContent,
  ButtonWrapper
} from "./GameModalStyle";
import leftArrow from "@/assets/images/left-arrow.png";
import rightArrow from "@/assets/images/right-arrow.png";
import avatar from "@/assets/images/avatar.png";

const GameModal = ({ type, message, isOpen, setIsOpen }) => {
  const [maxPlayerCount, setMaxPlayerCount] = useState(5);
  const [roundCount, setRoundCount] = useState(8);
  const [roundTime, setRoundTime] = useState("60");
  const [bgCurrVolume, setBgCurrVolume] = useRecoilState(bgVolumeState);
  const [fxCurrVolume, setFxCurrVolume] = useRecoilState(fxVolumeState);
  const [isCorrectPassword, setIsCorrectPassword] = useState();

  let title = "";
  let buttonMessage = "확인";
  let height = "";
  let hasButton = "";

  switch (type) {
    case "alert":
      title = "경고";
      hasButton = true;
      break;
    case "input":
      hasButton = true;
      height = "18.75rem";
      break;
    case "avatar":
      height = "29.188rem";
      break;
    case "password":
      hasButton = true;
      height = "18.75rem";
      break;
    case "room":
      title = "방 만들기";
      hasButton = true;
      height = "27.6rem";
      break;
    case "profile":
      title = "프로필";
      hasButton = false;
      height = "13.75rem";
      break;
    case "setting":
      title = "환경설정";
      hasButton = true;
      buttonMessage = "저장";
      height = "20rem";
      break;
    case "help":
      title = "도움말";
      hasButton = false;
      height = "25.625rem";
      break;
    default:
      hasButton = false;
  }

  const onValidateChange = (e) => {
    const t = e.target;
    let v = t.value;

    if (/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(v)) {
      return;
    }

    if (isNaN(parseInt(v))) {
      return;
    }

    if (v < parseInt(t.min)) {
      v = t.min;
    } else if (v > parseInt(t.max)) {
      v = t.max;
    }

    if (t.name === "MaxPlayerCount") {
      setMaxPlayerCount(v);
    } else if (t.name === "roundCount") {
      setRoundCount(v);
    } else if (t.name === "roundTime") {
      setRoundTime(v);
    }
  };

  return (
    isOpen && (
      <>
        <GameModalBackground />
        <GameModalContent dir="col" col="center" height={height}>
          <GameModalHeader row={title !== "" ? "between" : "end"} col="center">
            {title !== "" && <span>{title}</span>}
            <ExitMiniCircle onClick={() => setIsOpen(false)} />
          </GameModalHeader>

          {/* 아바타 설정 modal */}
          {type === "avatar" && (
            <GameModalBody top="0">
              {/* 닉네임 부분 */}
              {/* <GameModalInputWrapper paddingBottom="15px">
                  <GameModalMessage paddingBottom="15px" fontSize="22px">
                    닉네임
                  </GameModalMessage>
                  <GameModalInput placeholder="닉네임 입력"></GameModalInput>
                  <GameModalSubMessage>
                    ※최대 15자, 한글/영어/숫자 가능, 공백 불가능
                  </GameModalSubMessage>
                </GameModalInputWrapper> */}
              {/* 아바타 (캐릭터) 사진 부분  */}
              <GameModalMessageWrapper>
                <GameModalMessage fontSize="22px">캐릭터</GameModalMessage>
              </GameModalMessageWrapper>
              <GameModalAvatarWrapper col="center">
                <ArrowIconImage src={leftArrow}></ArrowIconImage>
                <AvatarImage src={avatar}></AvatarImage>
                <ArrowIconImage src={rightArrow}></ArrowIconImage>
              </GameModalAvatarWrapper>
            </GameModalBody>
          )}

          {/* 비밀번호 입력 modal */}
          {type === "password" && (
            <GameModalBody top="0">
              <GameModalInputWrapper paddingTop="25px" paddingBottom="15px">
                <GameModalMessage paddingBottom="15px">
                  비밀번호를 입력하세요.
                </GameModalMessage>
                <GameModalInput marginBottom="10px" maxLength={30} />
                {!isCorrectPassword && (
                  <ValidationMessage message="비밀번호가 일치하지 않습니다." />
                )}
              </GameModalInputWrapper>
            </GameModalBody>
          )}

          {/* 방 만들기 modal */}
          {type === "room" && (
            <Table>
              <Tbody>
                <Tr>
                  <TdLabel>
                    <GameModalMessage>방 제목</GameModalMessage>
                  </TdLabel>
                  <TdContent>
                    <GameModalInput
                      type="text"
                      placeholder="방 제목"
                      maxLength={20}
                    ></GameModalInput>
                  </TdContent>
                </Tr>
                <Tr>
                  <TdLabel>
                    <GameModalMessage>비밀번호</GameModalMessage>
                  </TdLabel>
                  <TdContent>
                    <GameModalInput
                      type="text"
                      placeholder="비밀번호"
                      maxLength={30}
                    ></GameModalInput>
                  </TdContent>
                </Tr>
                <Tr>
                  <TdLabel>
                    <GameModalMessage>플레이어 수</GameModalMessage>
                  </TdLabel>
                  <TdContent>
                    <GameModalInput
                      type="number"
                      max={8}
                      min={1}
                      step={1}
                      name="maxPlayerCount"
                      value={maxPlayerCount}
                      onChange={(e) => onValidateChange(e)}
                    ></GameModalInput>
                  </TdContent>
                </Tr>
                <Tr>
                  <TdLabel>
                    <GameModalMessage>라운드 수</GameModalMessage>
                  </TdLabel>
                  <TdContent>
                    <GameModalInput
                      type="number"
                      max={8}
                      min={2}
                      step={1}
                      name="roundCount"
                      value={roundCount}
                      onChange={(e) => onValidateChange(e)}
                    ></GameModalInput>
                  </TdContent>
                </Tr>
                <Tr>
                  <TdLabel>
                    <GameModalMessage>라운드 시간</GameModalMessage>
                  </TdLabel>
                  <TdContent>
                    <GameModalSelect
                      name="roundTime"
                      value={roundTime}
                      onChange={(e) => onValidateChange(e)}
                    >
                      <option value="60">60초</option>
                      <option value="90">90초</option>
                      <option value="120">120초</option>
                      <option value="150">150초</option>
                    </GameModalSelect>
                  </TdContent>
                </Tr>
              </Tbody>
            </Table>
          )}

          {/* 환경 설정 modal */}
          {type === "setting" && (
            <GameModalBody>
              <VolumeControl
                label="배경음 조절"
                currVolume={bgCurrVolume}
                setCurrVolume={setBgCurrVolume}
              />
              <VolumeControl
                label="효과음 조절"
                currVolume={fxCurrVolume}
                setCurrVolume={setFxCurrVolume}
              />
            </GameModalBody>
          )}

          {/* 프로필 modal */}
          {type === "profile" && (
            <GameModalBody top="0" marginTop="8px">
              <Profile type="modal" />
              <ButtonWrapper row="end" col="center">
                <GameModalButton onClick={(e) => onValidateChange(e)}>
                  수정
                </GameModalButton>
              </ButtonWrapper>
            </GameModalBody>
          )}

          {/* 도움말 modal */}
          {type === "help" && <GameModalLongMessage>{message}</GameModalLongMessage>}

          {/*  modal */}
          {type === "alert" && (
            <GameModalBody top="43px">
              <GameModalMessage fontSize="20px" fontWeight="500">
                {message}
              </GameModalMessage>
            </GameModalBody>
          )}

          {/* 버튼 출력 부분 */}
          {hasButton && (
            <ButtonWrapper row="center" col="center">
              <GameModalButton onClick={(e) => onValidateChange(e)}>
                {buttonMessage}
              </GameModalButton>
            </ButtonWrapper>
          )}
        </GameModalContent>
      </>
    )
  );
};

GameModal.propTypes = {
  type: PropTypes.oneOf([
    "alert",
    "input",
    "password",
    "room",
    "profile",
    "setting",
    "help"
  ]),
  message: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired
};

export default GameModal;
