import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { userNameState } from "@/recoil/userState";
import { ContentWrapper, WideContent, Main, Box } from "@/styles/CommonStyle";
import GameHeader from "@/components/Game/Shared/GameHeader";
import { MainContentWrapper, Wrapper } from "@/components/Game/Shared/Layout";
import { Button } from "@/components/Game/Shared/Button";
import WaitingTab from "@/components/Game/Waiting/WaitingTab";
import PlayingTab from "@/components/Game/Playing/PlayingTab";
import WaitingContainer from "@/components/Game/Waiting/WaitingContainer";
import PlayingContainer from "@/components/Game/Playing/PlayingContainer";

const GameRoom = () => {
  const [roomInfo, setRoomInfo] = useState({});
  const userName = useRecoilValue(userNameState);
  const [isHost, setIsHost] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // ready Status API 호출
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
      isPlaying: true
    };

    // 1. roomInfo 전체를 state에 저장
    // 2. 현재 플레이어의 username과 roomInfo 내 host userId 비교
    setRoomInfo(tmp);
    setIsPlaying(tmp.isPlaying);
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
              <Wrapper row="between" col="end">
                {isPlaying ? (
                  <PlayingTab />
                ) : (
                  <WaitingTab
                    isHost={isHost}
                    roomId={roomInfo.id}
                    playerCount={roomInfo.playerCount}
                  />
                )}
                <div>
                  <Button type="help" />
                  <Button type="setting" />
                  <Button type="exit" location={isPlaying ? "playing" : "waiting"} />
                </div>
              </Wrapper>
              {isPlaying ? (
                <PlayingContainer roomInfo={roomInfo} />
              ) : (
                <WaitingContainer roomInfo={roomInfo} />
              )}
            </MainContentWrapper>
          </Box>
        </Main>
      </WideContent>
    </ContentWrapper>
  );
};

export default GameRoom;
