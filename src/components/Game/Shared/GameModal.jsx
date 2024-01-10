import React, { useState } from "react";
import PropTypes from "prop-types";

import ValidationMessage from "@/components/Web/Shared/Form/ValidationMessage";
import {
  GameModalBackground,
  GameModalWrapper,
  GameModalContent,
  GameModalHeader,
  GameModalMessageWrapper,
  GameModalMessage,
  GameModalSubMessage,
  GameModalButton,
  GameModalSelect,
  GameModalInputWrapper,
  GameModalInput,
  GameModalAvatarWrapper,
  AvatarImage,
  ArrowIconImage,
  ExitMiniCircle
} from "./GameModalStyle";
import leftArrow from "@/assets/images/left-arrow.png";
import rightArrow from "@/assets/images/right-arrow.png";
import avatar from "@/assets/images/avatar.png";

const GameModal = ({
  isSetting,
  hasInput,
  isCorrect = true,
  isMakingRoom,
  hasText,
  message,
  hasButton
}) => {
  // props에 따라 (어떤 content인지에 따라) buttonMessage랑 전체 height 지정
  let buttonMessage = "";
  let height = "";

  if (hasText) {
    buttonMessage = "확인";
  } else if (isSetting) {
    buttonMessage = "확인";
    height = "29.188rem";
  } else if (hasInput) {
    buttonMessage = "확인";
    height = "18.75rem";
  } else if (isMakingRoom) {
    buttonMessage = "확인";
    height = "25.625rem";
  }

  return (
    <>
      <GameModalBackground></GameModalBackground>
      <GameModalWrapper>
        {/* 전체 height 지정해 주는 부분 */}
        <GameModalContent dir="col" col="center" height={height}>
          <GameModalHeader row="end" col="center">
            <ExitMiniCircle></ExitMiniCircle>
          </GameModalHeader>
          <>
            {/* 처음 닉네임, 아바타 (캐릭터) 사진 고르는 modal */}
            {isSetting && (
              <>
                {/* 닉네임 부분 */}
                <GameModalInputWrapper paddingBottom="15px">
                  <GameModalMessage paddingBottom="15px" fontSize="22px">
                    닉네임
                  </GameModalMessage>
                  <GameModalInput placeholder="닉네임 입력"></GameModalInput>
                  <GameModalSubMessage>
                    ※최대 15자, 한글/영어/숫자 가능, 공백 불가능
                  </GameModalSubMessage>
                </GameModalInputWrapper>
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
            {hasInput && (
              <>
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
              </>
            )}
          </>
          <>
            {/* 방 만들기 modal */}
            {isMakingRoom && (
              <>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <GameModalMessage>방 제목</GameModalMessage>
                      </td>
                      <td>
                        <GameModalInput
                          width="16.063rem"
                          height="2.625rem"
                          placeholder="방 제목"
                        ></GameModalInput>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <GameModalMessage>비밀번호</GameModalMessage>
                      </td>
                      <td>
                        <GameModalInput
                          width="16.063rem"
                          height="2.625rem"
                          placeholder="비밀번호"
                        ></GameModalInput>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <GameModalMessage>플레이어 수</GameModalMessage>
                      </td>
                      <td>
                        <GameModalInput
                          type="number"
                          max="8"
                          min="1"
                          step="1"
                          value="5"
                        ></GameModalInput>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <GameModalMessage>라운드 수</GameModalMessage>
                      </td>
                      <td>
                        <GameModalInput
                          type="number"
                          max="8"
                          min="2"
                          step="1"
                          value="8"
                        ></GameModalInput>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <GameModalMessage>라운드 시간</GameModalMessage>
                      </td>
                      <td>
                        <GameModalSelect>
                          <option value="60">60초</option>
                          <option value="90">90초</option>
                          <option value="120">120초</option>
                          <option value="150">150초</option>
                        </GameModalSelect>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
          </>
          {/* 메시지 출력 부분 */}
          {hasText && <GameModalMessage>{message}</GameModalMessage>}
          {/* 버튼 출력 부분 / 도움말 modal에는 버튼이 없음 */}
          {hasButton && <GameModalButton>{buttonMessage}</GameModalButton>}
        </GameModalContent>
      </GameModalWrapper>
    </>
  );
};

GameModal.propTypes = {
  isSetting: PropTypes.bool,
  hasInput: PropTypes.bool,
  isCorrect: PropTypes.bool,
  isMakingRoom: PropTypes.bool,
  hasText: PropTypes.bool,
  message: PropTypes.string,
  hasButton: PropTypes.bool
};

export default GameModal;
