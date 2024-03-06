import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import PropTypes from "prop-types";

import { userState, userNameState, waitingPlayerListState } from "@/recoil/userState";
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
  GameModalMessage,
  GameModalLongMessage,
  GameModalButton,
  GameModalSelect,
  GameModalInputWrapper,
  GameModalInput,
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
import AvatarCanvas from "../Shared/AvatarCanvas";
import { createRoom, changeRoomConfig, leaveRoom } from "@/services/socket";
import useAxios from "@/hooks/useAxios";

const GameModal = ({
  type,
  isOpen,
  setIsOpen,
  setIsPlaying,
  roomId,
  height = "",
  children
}) => {
  const [roomInfoList, setRoomInfoList] = useRecoilState(roomInfoListState);
  const [roomInfo, setRoomInfo] = useRecoilState(roomInfoState);
  const [bgCurrVolume, setBgCurrVolume] = useRecoilState(bgVolumeState);
  const [fxCurrVolume, setFxCurrVolume] = useRecoilState(fxVolumeState);
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [password, setPassword] = useState("");
  const [isCorrectPassword, setIsCorrectPassword] = useState(true);
  const [avatarImage, setAvatarImage] = useState(null);
  const [currAvatar, setCurrAvatar] = useState(0);
  const setUser = useSetRecoilState(userState);
  const userId = useRecoilValue(userNameState);
  const setRoomId = useSetRecoilState(roomIdState);
  const [apiConfig, setApiConfig] = useState(null);
  const { response, loading, error, fetchData } = useAxios(apiConfig, false);

  let titleText = "";

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
      height = "20rem";
      break;
    case "help":
      titleText = "도움말";
      height = "25.625rem";
      break;
    case "result":
      titleText = "게임 결과";
      height = "20rem";
      break;
    case "error":
      titleText = "경고";
      height !== "" ? "18rem" : height;
      break;
  }

  const accessories = [
    "",
    "emo1",
    "emo2",
    "eye1",
    "eye2",
    "eye3",
    "head1",
    "head2",
    "fx1",
    "fx2"
  ];

  useEffect(() => {
    if (roomInfo.id) {
      if (roomInfoList.some((room) => room.id === roomInfo.id)) {
        // 방 정보 PUT API 호출
        setRoomInfoList((prev) =>
          prev.map((room) => (room.id === roomInfo.id ? { ...room, ...roomInfo } : room))
        );
      } else {
        // 방 정보 POST API 호출
        setRoomInfoList((prev) => [...prev, { ...roomInfo }]);
      }
    }
  }, [roomInfo]);

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
  }, [roomId, roomInfo.id]);

  const onAvatarLeftClick = () => {
    const index = currAvatar > 0 ? currAvatar - 1 : accessories.length - 1;
    setCurrAvatar(index);
  };

  const onAvatarRightClick = () => {
    const index = (currAvatar + 1) % accessories.length;
    setCurrAvatar(index);
  };

  const onConfirmAvatarUrl = () => {
    setUser((prev) => ({ ...prev, avatarUrl: avatarImage }));
    setIsOpen(false);
  };

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

    // 임시 roomId
    const roomId = roomInfoList.length + 1;

    if (roomInfoList.some((room) => room.id === roomId)) {
      changeRoomConfig(roomInfo, (room) => {
        setRoomInfo(room);
      });
      setRoomInfoList((prev) =>
        prev.map((room) =>
          room.id === roomId ? { ...room, ...roomInfo, id: roomId } : room
        )
      );
    } else {
      createRoom(roomInfo, (room) => {
        setRoomId(roomId);
        setRoomInfo(room);
      });

      // setWaitingPlayerList();

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

  const onExitRoom = () => {
    leaveRoom(roomId, userId, () => {
      setIsOpen(false);
      navigate("/game");
    });
  };

  return (
    isOpen && (
      <>
        <GameModalBackground />
        <GameModalContent dir="col" col="center" height={height}>
          <GameModalHeader row={titleText !== "" ? "between" : "end"} col="center">
            {titleText !== "" && <span>{titleText}</span>}
            {!["avatar", "result", "error"].includes(type) && (
              <ExitMiniCircle onClick={() => setIsOpen(false)} />
            )}
          </GameModalHeader>

          {/* 아바타 설정 modal */}
          {type === "avatar" && (
            <GameModalBody top="0" marginTop="0">
              <ButtonWrapper row="start" col="center" margin="9px 0 0">
                <GameModalMessage fontSize="22px">캐릭터</GameModalMessage>
              </ButtonWrapper>
              <ButtonWrapper row="center" col="center" margin="0">
                <ArrowIconImage src={leftArrow} onClick={onAvatarLeftClick} />
                <AvatarCanvas
                  avatar={avatar}
                  item={accessories[currAvatar]}
                  setAvatarImage={setAvatarImage}
                />
                <ArrowIconImage src={rightArrow} onClick={onAvatarRightClick} />
              </ButtonWrapper>
              <ButtonWrapper row="center" col="center" margin="10px 0 0">
                <GameModalButton onClick={onConfirmAvatarUrl}>확인</GameModalButton>
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
                        value={!roomInfo?.isSecure}
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
          {type === "help" && <GameModalLongMessage>{children}</GameModalLongMessage>}

          {/* 경고 modal */}
          {type === "alert" && (
            <GameModalBody top="43px">
              <GameModalMessage fontSize="20px" fontWeight="500">
                {children}
              </GameModalMessage>
              <ButtonWrapper row="center" col="center" margin="50px 0px 32px">
                <GameModalButton onClick={() => setIsOpen(false)}>확인</GameModalButton>
              </ButtonWrapper>
            </GameModalBody>
          )}

          {/* 퇴장 modal */}
          {type === "exit" && (
            <GameModalBody top="43px">
              <GameModalMessage fontSize="20px" fontWeight="500">
                {children}
              </GameModalMessage>
              <ButtonWrapper row="center" col="center" margin="50px 0px 32px">
                <GameModalButton onClick={onExitRoom}>확인</GameModalButton>
              </ButtonWrapper>
            </GameModalBody>
          )}

          {/* 게임 결과 modal */}
          {type === "result" && (
            <GameModalBody>
              <Table>
                <Tbody>
                  {children?.map(({ userId, score }, idx) => (
                    <Tr key={idx} bgColor="#fff">
                      <TdLabel width="2.5rem" textAlign="center">
                        {idx + 1}
                      </TdLabel>
                      <TdContent flexBasis="18rem" flexGrow="0" padding="0 5px">
                        {userId}
                      </TdContent>
                      <TdContent>{score}점</TdContent>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <ButtonWrapper row="center" col="center" margin="50px 0px 32px">
                <GameModalButton
                  onClick={() => {
                    setIsOpen(false);
                    setIsPlaying(false);
                  }}
                >
                  확인
                </GameModalButton>
              </ButtonWrapper>
            </GameModalBody>
          )}

          {/* 에러 modal */}
          {type === "error" && (
            <GameModalBody top="43px">
              <GameModalMessage fontSize="20px" fontWeight="500">
                {children}
              </GameModalMessage>
              <ButtonWrapper row="center" col="center" margin="50px 0px 32px">
                <GameModalButton
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/");
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
    "avatar",
    "error",
    "result"
  ]),
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func,
  setIsPlaying: PropTypes.func,
  roomId: PropTypes.number,
  height: PropTypes.string,
  children: PropTypes.node
};

export default GameModal;
