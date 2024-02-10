import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import PropTypes from "prop-types";

import { roomIdState, roomInfoListState, roomInfoState } from "@/recoil/roomState";
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

const GameModal = ({ type, message, isOpen, setIsOpen, roomId }) => {
  const [roomInfoList, setRoomInfoList] = useRecoilState(roomInfoListState);
  const [roomInfo, setRoomInfo] = useRecoilState(roomInfoState);
  const [bgCurrVolume, setBgCurrVolume] = useRecoilState(bgVolumeState);
  const [fxCurrVolume, setFxCurrVolume] = useRecoilState(fxVolumeState);
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [password, setPassword] = useState("");
  const [isCorrectPassword, setIsCorrectPassword] = useState(true);
  const setRoomId = useSetRecoilState(roomIdState);

  let titleText = "";
  let buttonMessage = "확인";
  let height = "";

  switch (type) {
    case "alert":
      titleText = "경고";
      break;
    case "input":
      height = "18.75rem";
      break;
    case "avatar":
      titleText = "아바타 설정하기";
      height = "21rem";
      break;
    case "password":
      height = "17.75rem";
      break;
    case "room":
      titleText = "방 만들기";
      height = "28.3rem";
      break;
    case "profile":
      titleText = "프로필";
      height = "13.75rem";
      break;
    case "setting":
      titleText = "환경설정";
      buttonMessage = "저장";
      height = "20rem";
      break;
    case "help":
      titleText = "도움말";
      height = "25.625rem";
      break;
  }

  useEffect(() => {
    if (roomId !== roomInfo.id) {
      setRoomInfo({
        title: "",
        password: "",
        playerCount: 1,
        maxPlayerCount: 8,
        roundCount: 5,
        roundTime: 90
      });
    }
  }, []);

  // 임시: 로컬 스토리지에서 불러오기
  // useEffect(() => {
  //   const storedRoomInfoList = localStorage.getItem("roomInfoList");
  //   if (storedRoomInfoList) {
  //     setRoomInfoList(JSON.parse(storedRoomInfoList));
  //   }
  // }, []);

  // // 임시: 로컬 스토리지에 세팅
  // useEffect(() => {
  //   localStorage.setItem("roomInfoList", JSON.stringify(roomInfoList));
  // }, [roomInfoList]);

  const navigate = useNavigate();

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

    setRoomInfo({
      ...roomInfo,
      [t.name]: v,
      createdAt: new Date().toISOString() // 임시 추가
    });
  };

  const onValidateSubmit = (e) => {
    e.preventDefault();

    if (!roomInfo.title) {
      setIsTitleEmpty(true);
      return;
    }

    const roomId = Math.floor(Math.random() * 100) + 1;

    if (roomInfoList.some((room) => room.id === roomId)) {
      // 방 정보 PUT API 호출
      setRoomInfoList((prev) =>
        prev.map((room) =>
          room.id === roomId ? { ...room, ...roomInfo, id: roomId } : room
        )
      );
    } else {
      // 방 정보 POST API 호출
      // (최초 방 생성 시, 생성한 플레이어의 username을 같이 보내어 roomInfo에 hostId를 같이 저장해둬야 함)
      setRoomId(roomId);
      setRoomInfo((prev) => ({
        ...prev,
        id: roomId
      }));
      setRoomInfoList((prev) => [...prev, { ...roomInfo, id: roomId }]);
    }

    setIsOpen(false);
    navigate(`/game/${roomId}`);
  };

  const onCheckSamePassword = () => {
    // 비밀번호 확인 요청 (body: roomId, password)

    // if (!data.isCorrect)
    {
      setIsCorrectPassword(false);
      return;
    }
    // else
    {
      setIsOpen(false);
      navigate(`/game/${roomId}`);
    }
  };

  return (
    isOpen && (
      <>
        <GameModalBackground />
        <GameModalContent dir="col" col="center" height={height}>
          <GameModalHeader row={titleText !== "" ? "between" : "end"} col="center">
            {titleText !== "" && <span>{titleText}</span>}
            <ExitMiniCircle onClick={() => setIsOpen(false)} />
          </GameModalHeader>

          {/* 아바타 설정 modal */}
          {type === "avatar" && (
            <GameModalBody top="0" marginTop="0">
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
              <ButtonWrapper row="start" col="center" margin="9px 0 0">
                <GameModalMessage fontSize="22px">캐릭터</GameModalMessage>
              </ButtonWrapper>
              <ButtonWrapper row="center" col="center" margin="0">
                <ArrowIconImage src={leftArrow} onClick=""></ArrowIconImage>
                <AvatarImage src={avatar}></AvatarImage>
                <ArrowIconImage src={rightArrow} onClick=""></ArrowIconImage>
              </ButtonWrapper>
              <ButtonWrapper row="center" col="center" margin="25px 0 0">
                <GameModalButton onClick={(e) => onValidateChange(e)}>
                  확인
                </GameModalButton>
              </ButtonWrapper>
            </GameModalBody>
          )}

          {/* 비밀번호 입력 modal */}
          {type === "password" && (
            <GameModalBody top="0">
              <GameModalInputWrapper paddingTop="25px" paddingBottom="15px">
                <GameModalMessage paddingBottom="15px">
                  비밀번호를 입력하세요.
                </GameModalMessage>
                <GameModalInput
                  marginBottom="10px"
                  maxLength={30}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {!isCorrectPassword && (
                  <ValidationMessage message="비밀번호가 일치하지 않습니다." />
                )}
              </GameModalInputWrapper>
              <ButtonWrapper row="center" col="center">
                <GameModalButton onClick={onCheckSamePassword}>확인</GameModalButton>
              </ButtonWrapper>
            </GameModalBody>
          )}

          {/* 방 만들기 modal */}
          {type === "room" && (
            <form onSubmit={onValidateSubmit}>
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
                        name="title"
                        value={roomInfo?.title}
                        onChange={(e) =>
                          setRoomInfo({ ...roomInfo, title: e.target.value })
                        }
                      />
                    </TdContent>
                  </Tr>
                  {isTitleEmpty && (
                    <Tr>
                      <TdLabel />
                      <TdContent>
                        <ValidationMessage message="제목을 입력하세요." fontSize="14px" />
                      </TdContent>
                    </Tr>
                  )}
                  <Tr>
                    <TdLabel>
                      <GameModalMessage>비밀번호</GameModalMessage>
                    </TdLabel>
                    <TdContent>
                      <GameModalInput
                        type="text"
                        placeholder="비밀번호"
                        maxLength={30}
                        value={roomInfo?.password}
                        onChange={(e) =>
                          setRoomInfo({ ...roomInfo, password: e.target.value })
                        }
                      />
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
                        value={roomInfo?.maxPlayerCount}
                        onChange={(e) => onValidateChange(e)}
                      />
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
                        value={roomInfo?.roundCount}
                        onChange={(e) => onValidateChange(e)}
                      />
                    </TdContent>
                  </Tr>
                  <Tr>
                    <TdLabel>
                      <GameModalMessage>라운드 시간</GameModalMessage>
                    </TdLabel>
                    <TdContent>
                      <GameModalSelect
                        name="roundTime"
                        value={roomInfo?.roundTime}
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
              <ButtonWrapper
                row="center"
                col="center"
                margin={isTitleEmpty ? "22px 0 0" : "42px 0 0"}
              >
                <GameModalButton type="submit" onClick={(e) => onValidateChange(e)}>
                  확인
                </GameModalButton>
              </ButtonWrapper>
            </form>
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
              <ButtonWrapper row="center" col="center" margin="30px 0px 20px">
                <GameModalButton onClick={(e) => onValidateChange(e)}>
                  저장
                </GameModalButton>
              </ButtonWrapper>
            </GameModalBody>
          )}

          {/* 프로필 modal */}
          {type === "profile" && (
            <GameModalBody top="0" marginTop="8px">
              <Profile type="modal" />
              <ButtonWrapper row="end" col="center" margin="6px 0">
                <GameModalButton onClick={(e) => onValidateChange(e)}>
                  수정
                </GameModalButton>
              </ButtonWrapper>
            </GameModalBody>
          )}

          {/* 도움말 modal */}
          {type === "help" && <GameModalLongMessage>{message}</GameModalLongMessage>}

          {/* 경고 modal */}
          {type === "alert" && (
            <GameModalBody top="43px">
              <GameModalMessage fontSize="20px" fontWeight="500">
                {message}
              </GameModalMessage>
              <ButtonWrapper row="center" col="center" margin="50px 0px 32px">
                <GameModalButton onClick={() => setIsOpen(false)}>
                  {buttonMessage}
                </GameModalButton>
              </ButtonWrapper>
            </GameModalBody>
          )}

          {/* 퇴장 modal */}
          {type === "exit" && (
            <GameModalBody top="43px">
              <GameModalMessage fontSize="20px" fontWeight="500">
                {message}
              </GameModalMessage>
              <ButtonWrapper row="center" col="center" margin="50px 0px 32px">
                <GameModalButton
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/game");
                  }}
                >
                  확인
                </GameModalButton>
              </ButtonWrapper>
            </GameModalBody>
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
    "help",
    "exit",
    "avatar"
  ]),
  message: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  roomId: PropTypes.number
};

export default GameModal;
