import React, { useState } from "react";
import styled from "styled-components";

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

const info = {
  id: 3,
  name: "방제목1",
  playerCount: 1,
  maxPlayerCount: 8,
  roundCount: 5,
  roundTime: 60
};

const GameRoom = () => {
  const [isHost, setIsHost] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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
                    isReady={isReady}
                    setIsReady={setIsReady}
                    roomInfo={info}
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
                  <TitleBar type="room" info={info} />
                  {isPlaying ? (
                    <>
                      <WordInput roundTime={info.roundTime} />
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
