import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import {
  roomIdState,
  roomInfoState,
  roomInfoListState,
  isPlayingRoomState
} from "@/recoil/roomState";
import { isHostUserState } from "@/recoil/userState";
import { FlexBox } from "@/styles/FlexStyle";
import { ContentWrapper, WideContent, Main, Box } from "@/styles/CommonStyle";
import GameHeader from "@/components/Game/Shared/GameHeader";
import { HelpButton } from "@/components/Game/Lobby/Help";
import { SettingButton } from "@/components/Game/Lobby/Setting";
import { ExitButton } from "../../components/Game/Shared/Button";
import TitleBar from "../../components/Game/Shared/TitleBar";
import Profile from "../../components/Game/Shared/Profile";
import Chat from "@/components/Game/Shared/Chat";
import WaitingTab from "../../components/Game/Waiting/WaitingTab";
import PlayingTab from "../../components/Game/Playing/PlayingTab";
import WaitingPlayerList from "../../components/Game/Waiting/WaitingPlayerList";
import PlayingPlayerList from "../../components/Game/Playing/PlayingPlayerList";
import WordInput from "../../components/Game/Playing/WordInput";

const GameRoom = () => {
  const [roomInfoList, setRoomInfoList] = useRecoilState(roomInfoListState);
  const [roomInfo, setRoomInfo] = useRecoilState(roomInfoState);
  const roomId = useRecoilValue(roomIdState);
  const isHost = useRecoilValue(isHostUserState);
  const [playerReadyList, setPlayerReadyList] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingRoomState);

  useEffect(() => {
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    const storedRoomInfoList = localStorage.getItem("roomInfoList");
    if (storedRoomInfoList) {
      setRoomInfoList(JSON.parse(storedRoomInfoList));

      const pickecRoomInfo = roomInfoList.find((room) => room.id === roomId);
      if (roomInfoList.find((room) => room.id === roomId)) {
        setRoomInfo(pickecRoomInfo);
        setPlayerReadyList(Array(pickecRoomInfo.playerCount).fill(false));
      }
    }
  }, [roomId]);

  return (
    <ContentWrapper row="center" col="center">
      <WideContent dir="col">
        <GameHeader />
        <Main>
          <Box bgColor={isPlaying && "#000"}>
            <MainContentWrapper dir="col">
              <HeaderWrapper row="between" col="end">
                {isPlaying ? (
                  <PlayingTab />
                ) : (
                  <WaitingTab
                    isHost={isHost}
                    roomId={roomInfo.id}
                    playerCount={playerReadyList.length}
                  />
                )}
                <div>
                  <HelpButton />
                  <SettingButton />
                  <ExitButton location={isPlaying ? "playing" : "waiting"} />
                </div>
              </HeaderWrapper>
              <BodyWrapper dir="col">
                <GameRoomWrapper dir="col" type={isPlaying ? "play" : "wait"}>
                  <TitleBar type="room" info={roomInfo} />
                  {isPlaying ? (
                    <>
                      <WordInput roundTime={roomInfo.roundTime} />
                      <PlayingPlayerList />
                    </>
                  ) : (
                    <WaitingPlayerList isHost={isHost} isReady={isReady} />
                  )}
                </GameRoomWrapper>
                <LowerWrapper>
                  {isPlaying ? (
                    <Chat size="big" />
                  ) : (
                    <>
                      <Profile />
                      <Chat />
                    </>
                  )}
                  {/* <ButtonWrapper dir="col" row="center" col="center">
                    <div>
                      <ReadyButton>준비</ReadyButton>
                    </div>
                  </ButtonWrapper> */}
                </LowerWrapper>
              </BodyWrapper>
            </MainContentWrapper>
          </Box>
        </Main>
      </WideContent>
    </ContentWrapper>
  );
};

const MainContentWrapper = styled(FlexBox)`
  max-width: 100%;
  flex-grow: 1;
`;

const HeaderWrapper = styled(FlexBox)``;

const BodyWrapper = styled(FlexBox)`
  width: 100%;
  height: 100%;
  border: 1px solid #7d7d7d;
`;

const GameRoomWrapper = styled(FlexBox)`
  height: 100%;
  max-height: 26.65rem;
  padding: 3px 5px;
  background-color: ${({ type }) => (type === "play" ? "#889E7D" : "#f3f3f3")};
`;

const LowerWrapper = styled(FlexBox)``;

// const ButtonWrapper = styled(FlexBox)`
//   flex-grow: 1;
//   background-color: #eee;
// `;

// const ReadyButton = styled.button`
//   padding: 14px 26px;
//   background-color: #ffd700;
//   font-family: "DNFBitBitv2";
//   font-size: 32px;
//   letter-spacing: 10px;
//   transition-duration: 0.4s;
//   border-radius: 6px;

//   &:hover {
//     background-color: #8b4513;
//     color: black;
//   }

//   &:first-letter {
//     margin-left: 10px;
//   }
// `;

export default GameRoom;
