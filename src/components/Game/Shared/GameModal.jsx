import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { useCookies } from "react-cookie";
import PropTypes from "prop-types";

import { userInfoState, userNameState, waitingPlayerListState } from "@/recoil/userState";
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
import {
  createRoom,
  changeRoomConfig,
  leaveRoom,
  joinRoom,
  loadRoom
} from "@/services/socket";
import useAxios from "@/hooks/useAxios";
import { updateCurrentUserAvatar } from "@/services/user";
import { SPECIAL_CHARACTERS_REGEX } from "@/services/regexp";

const GameModal = ({
  type,
  isOpen,
  setIsOpen,
  setIsPlaying,
  roomId,
  setIsDataFetched,
  height = "",
  children
}) => {
  // ====== room ======
  const [roomInfoList, setRoomInfoList] = useRecoilState(roomInfoListState);
  const [roomInfo, setRoomInfo] = useRecoilState(roomInfoState);
  const setRoomId = useSetRecoilState(roomIdState);
  const setWaitingPlayerList = useSetRecoilState(waitingPlayerListState);
  const [roomNumber, setRoomNumber] = useState(null);

  const [bgCurrVolume, setBgCurrVolume] = useRecoilState(bgVolumeState);
  const [fxCurrVolume, setFxCurrVolume] = useRecoilState(fxVolumeState);
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [password, setPassword] = useState("");
  const [isCorrectPassword, setIsCorrectPassword] = useState(true);
  const [avatarImage, setAvatarImage] = useState(null);
  const [currAvatar, setCurrAvatar] = useState(0);
  const [user, setUser] = useRecoilState(userInfoState);
  const userId = useRecoilValue(userNameState);

  const [, setCookie] = useCookies(["userId"]);
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
      titleText = !roomId ? "방 만들기" : "방 설정";
      height = "28.3rem";
      break;
    case "profile":
      titleText = "프로필";
      height !== "" ? "14rem" : height;
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
    if (type === "room" && !roomId) {
      setRoomInfo({
        title: "",
        password: "",
        maxUserCount: 8,
        maxRound: 5,
        roundTimeLimit: 90000
      });
    }
  }, []);

  // roomInfo -> roomInfoList
  useEffect(() => {
    if (roomInfo?.id) {
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
    if (roomNumber !== null) {
      setIsOpen(false);
      navigate(`/game/${roomNumber}`);
    }
  }, [roomNumber]);

  useEffect(() => {
    if (roomId && roomId !== roomInfo?.id) {
      setRoomInfo({
        title: "",
        password: "",
        currentUserCount: 1,
        maxUserCount: 8,
        maxRound: 5,
        roundTimeLimit: 90,
        state: "preparing"
      });
    }
  }, [roomId, roomInfo?.id]);

  // ====== avatar ======
  const onAvatarLeftClick = () => {
    const index = currAvatar > 0 ? currAvatar - 1 : accessories.length - 1;
    setCurrAvatar(index);
  };

  const onAvatarRightClick = () => {
    const index = (currAvatar + 1) % accessories.length;
    setCurrAvatar(index);
  };

  const onConfirmAvatarUrl = async () => {
    const res = await updateCurrentUserAvatar(currAvatar, user.nickname);

    if (res) {
      setUser((prev) => ({ ...prev, avatarUrl: avatarImage }));
      setIsOpen(false);
    }
  };

  const navigate = useNavigate();

  // ====== room ======
  const onValidateChange = (e) => {
    const t = e.target;
    let v = parseInt(t.value);

    if (isNaN(parseInt(v))) {
      return;
    }

    if (SPECIAL_CHARACTERS_REGEX.test(v)) {
      return;
    }

    if (v < parseInt(t.min)) {
      v = parseInt(t.min);
    } else if (v > parseInt(t.max)) {
      v = parseInt(t.max);
    }

    setRoomInfo({
      ...roomInfo,
      [t.name]: v
    });
  };

  const onValidateSubmit = (e) => {
    e.preventDefault();

    if (!roomInfo.title) {
      setIsTitleEmpty(true);
      return;
    }

    if (roomInfoList.some((room) => room.id === roomId)) {
      let { title, password, maxUserCount, maxRound, roundTimeLimit } = roomInfo;
      password = password || "";
      changeRoomConfig(
        { title, password, maxUserCount, maxRound, roundTimeLimit },
        (room) => {
          setRoomInfo(room);
          setIsOpen(false);
        }
      );
      setRoomInfoList((prev) =>
        prev.map((room) =>
          room.id === roomId ? { ...room, ...roomInfo, id: roomId } : room
        )
      );
    } else {
      createRoom(roomInfo, () => {
        loadRoom((room) => {
          setRoomNumber(room.roomNumber);
          setRoomId(room.id);
          setRoomInfo(room);
          setCookie("userId", room.roomOwnerUserId, { path: "/" });
          setUser((prev) => ({ userId: room.roomOwnerUserId, ...prev }));
        });
      });
    }
  };

  // ====== password ======
  const onCheckSamePassword = () => {
    const authorization = { roomId, password };
    joinRoom(
      authorization,
      () => {
        setIsOpen(false);
        navigate(`/game/${roomId}`);
      },
      (error) => {
        console.log(`[Error]: ${error}`);
        setIsCorrectPassword(false);
        return;
      }
    );
  };

  // ====== exit ======
  const onExitRoom = () => {
    leaveRoom(() => {
      setWaitingPlayerList(null);
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
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setRoomInfo({ ...roomInfo, password: e.target.value });
                        }}
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
                        min={2}
                        step={1}
                        name="maxUserCount"
                        value={roomInfo?.maxUserCount}
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
                        name="maxRound"
                        value={roomInfo?.maxRound}
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
                        name="roundTimeLimit"
                        value={roomInfo?.roundTimeLimit}
                        onChange={(e) => onValidateChange(e)}
                      >
                        <option value={60000}>60초</option>
                        <option value={90000}>90초</option>
                        <option value={120000}>120초</option>
                        <option value={150000}>150초</option>
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
                <GameModalButton type="submit">확인</GameModalButton>
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
                    loadRoom();
                    setIsOpen(false);
                    setIsPlaying(false);
                    // 모든 플레이어의 isReady: false로...
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
  roomId: PropTypes.string,
  setIsDataFetched: PropTypes.func,
  height: PropTypes.string,
  children: PropTypes.node
};

export default GameModal;
