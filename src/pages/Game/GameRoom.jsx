import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { userNameState } from "@/recoil/userState";
import { FlexBox } from "@/styles/FlexStyle";
import { ContentWrapper, WideContent, Main, Box } from "@/styles/CommonStyle";
import GameHeader from "@/components/Game/Shared/GameHeader";
import { Button } from "@/components/Game/Shared/Button";
import TitleBar from "@/components/Game/Shared/TitleBar";
import Profile from "@/components/Game/Shared/Profile";
import Chat from "@/components/Game/Shared/Chat";
import WaitingTab from "@/components/Game/Waiting/WaitingTab";
import PlayingTab from "@/components/Game/Playing/PlayingTab";
import WaitingPlayerList from "@/components/Game/Waiting/WaitingPlayerList";
import PlayingPlayerList from "@/components/Game/Playing/PlayingPlayerList";
import WordInput from "@/components/Game/Playing/WordInput";

const GameRoom = () => {
  const [roomInfo, setRoomInfo] = useState({});
  const userName = useRecoilValue(userNameState);
  const [isHost, setIsHost] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  // ready Status API 호출
  const [playerReadyList, setPlayerReadyList] = useState([]);
  const [isReady, setIsReady] = useState(false);

  // 경로의 roomId값 추출
  const { roomId } = useParams();

  useEffect(() => {
    // roomInfo 조회 GET API 호출 (query: roomId)
    const tmp = {
      id: roomId,
      title: "테스트123",
      password: "", // 비밀번호 X
      playerCount: 1,
      maxPlayerCount: 8,
      roundCount: 5,
      roundTime: 90,
      hostUserName: "abcd1234",
      isPlaying: false
    };

    // 1. roomInfo 전체를 state에 저장
    // 2. 현재 플레이어의 username과 roomInfo 내 host userId 비교
    setRoomInfo(tmp);
    setIsPlaying(roomInfo.isPlaying);
    setIsHost(userName === tmp.hostUserName ? true : false);
  }, []);

  useEffect(() => {}, []);

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
                  <Button type="help" />
                  <Button type="setting" />
                  <Button type="exit" location={isPlaying ? "playing" : "waiting"} />
                </div>
              </HeaderWrapper>
              <BodyWrapper dir="col">
                <GameRoomWrapper dir="col" type={isPlaying ? "play" : "wait"}>
                  <TitleBar type="room" info={roomInfo} />
                  {isPlaying ? (
                    <>
                      <WordInput
                        roundCount={roomInfo.roundCount}
                        roundTime={roomInfo.roundTime}
                      />
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
