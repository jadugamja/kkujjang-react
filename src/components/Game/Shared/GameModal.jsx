import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import { bgVolumeState, fxVolumeState } from "@/recoil/soundState";

import VolumeControl from "./VolumeControl";
import ValidationMessage from "@/components/Web/Shared/Form/ValidationMessage";
import {
  GameModalBackground,
  GameModalWrapper,
  GameModalContent,
  GameModalHeader,
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
  ContentWrapper,
  ButtonWrapper
} from "./GameModalStyle";
import leftArrow from "@/assets/images/left-arrow.png";
import rightArrow from "@/assets/images/right-arrow.png";
import avatar from "@/assets/images/avatar.png";

const GameModal = ({ type, message, isOpen, setIsOpen }) => {
  // 방 설정
  const [playerCount, setPlayerCount] = useState(5);
  const [roundCount, setRoundCount] = useState(8);
  const [roundTime, setRoundTime] = useState("60");

  // 소리 설정
  const [bgCurrVolume, setBgCurrVolume] = useRecoilState(bgVolumeState);
  const [fxCurrVolume, setFxCurrVolume] = useRecoilState(fxVolumeState);

  let title = "";
  let buttonMessage = "확인";
  let height = "";
  let hasText = "";
  let hasButton = "";

  switch (type) {
    case "alert":
      hasText = true;
      hasButton = true;
      break;
    case "input":
      hasText = true;
      hasButton = true;
      height = "18.75rem";
      break;
    case "avatar":
      height = "29.188rem";
      break;
    case "password":
      hasText = false;
      hasButton = true;
      height = "18.75rem";
      break;
    case "room":
      title = "방 만들기";
      hasText = false;
      hasButton = true;
      height = "27.6rem";
      break;
    case "setting":
      title = "환경설정";
      hasText = false;
      hasButton = true;
      buttonMessage = "저장";
      height = "20rem";
      break;
    case "help":
      title = "도움말";
      hasText = true;
      hasButton = false;
      height = "25.625rem";
      break;
    default:
      hasText = false;
      hasButton = false;
  }

  const onValidateChange = (e) => {
    const t = e.target;
    let v = t.value;

    if (/-/.test(v)) {
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

    if (t.name === "playerCount") {
      setPlayerCount(v);
    } else if (t.name === "roundCount") {
      setRoundCount(v);
    } else if (t.name === "roundTime") {
      setRoundTime(v);
    }
  };

  return (
    isOpen && (
      <>
        <GameModalBackground></GameModalBackground>
        <GameModalWrapper>
          {/* 전체 height 지정해 주는 부분 */}
          <GameModalContent dir="col" col="center" height={height}>
            <GameModalHeader row={title !== "" ? "between" : "end"} col="center">
              {title !== "" && <span>{title}</span>}
              <ExitMiniCircle onClick={() => setIsOpen(false)} />
            </GameModalHeader>
            <>
              {/* 처음 닉네임, 아바타 (캐릭터) 사진 고르는 modal */}
              {type === "avatar" && (
                <>
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
                </>
              )}
            </>
            <>
              {/* 비밀번호 입력 modal */}
              {type === "password" && (
                <GameModalInputWrapper paddingTop="25px" paddingBottom="15px">
                  <GameModalMessage paddingBottom="15px">
                    비밀번호를 입력하세요
                  </GameModalMessage>
                  <GameModalInput marginBottom="10px" />
                  {/* 에러 메시지 (Web/Shared에서 가져 옴) 출력 부분*/}
                  {!isCorrect && (
                    <ValidationMessage message="비밀번호가 일치하지 않습니다" />
                  )}
                </GameModalInputWrapper>
              )}
            </>
            <>
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
                          name="playerCount"
                          value={playerCount}
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
            </>
            <>
              {/* 환경 설정 modal */}
              {type === "setting" && (
                <ContentWrapper>
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
                </ContentWrapper>
              )}
            </>
            {/* 메시지 출력 부분 */}
            {hasText && <GameModalLongMessage>{message}</GameModalLongMessage>}
            {/* 버튼 출력 부분 */}
            {hasButton && (
              <ButtonWrapper row="center" col="center">
                <GameModalButton onClick={() => setIsOpen(false)}>
                  {buttonMessage}
                </GameModalButton>
              </ButtonWrapper>
            )}
          </GameModalContent>
        </GameModalWrapper>
      </>
    )
  );
};

GameModal.propTypes = {
  type: PropTypes.oneOf(["alert", "input", "password", "room", "setting", "help"]),
  message: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired
};

export default GameModal;
