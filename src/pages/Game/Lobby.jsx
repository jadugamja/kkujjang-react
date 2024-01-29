import React, { useState, useEffect } from "react";
import styled from "styled-components";

import GameHeader from "@/components/Game/Shared/GameHeader";
import { ContentWrapper, WideContent, Main, Box } from "@/styles/CommonStyle";
import { FlexBox } from "@/styles/FlexStyle";
import Ranking from "@/components/Game/Lobby/Ranking";
import Profile from "../../components/Game/Shared/Profile";
import LobbyRoomList from "@/components/Game/Lobby/LobbyRoomList";
import {
  SideTab,
  MainTab,
  CreateRoomButton,
  EnterRoomButton
} from "@/components/Game/Shared/Tab";
import { HelpButton } from "@/components/Game/Lobby/Help";
import { SettingButton } from "@/components/Game/Lobby/Setting";
import Footer from "@/components/Web/Shared/Layout/Footer";

const Lobby = () => {
  const [rooms, setRooms] = useState();

  useEffect(() => {
    // 방 목록 정보 불러오기 api 호출

    // 임시 데이터
    const timeLimits = [60, 90, 120, 150];
    const init = Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      name: `Room ${i + 1}`,
      isPlaying: i % 2 === 0,
      roundCnt: Math.floor(Math.random() * 10) + 1,
      timeLimit: timeLimits[Math.floor(Math.random() * timeLimits.length)],
      isLocked: Math.random() > 0.5,
      playerCnt: Math.floor(Math.random() * 8) + 1,
      maxPlayerCnt: 8
    }));

    setRooms(init);
  }, []);

  return (
    <ContentWrapper row="center" col="center">
      <WideContent dir="col">
        <GameHeader />
        <Main>
          <Box>
            <SideContentWrapper dir="col">
              <SideTab />
              <Ranking />
              <Profile />
            </SideContentWrapper>
            <MainContentWrapper dir="col">
              <TabWrapper row="between" col="end">
                <TabWrapper>
                  <MainTab bgColor="#779DC5">방 목록</MainTab>
                  <CreateRoomButton />
                  <EnterRoomButton rooms={rooms} />
                </TabWrapper>
                <div>
                  <HelpButton />
                  <SettingButton />
                </div>
              </TabWrapper>
              <LobbyRoomList rooms={rooms} />
            </MainContentWrapper>
          </Box>
        </Main>
        <Footer />
      </WideContent>
    </ContentWrapper>
  );
};

const SideContentWrapper = styled(FlexBox)`
  width: 16.5rem;
  height: 100%;
`;

const MainContentWrapper = styled(FlexBox)``;

const TabWrapper = styled(FlexBox)`
  & > * + * {
    margin-left: 5px;
  }
`;

export default Lobby;
