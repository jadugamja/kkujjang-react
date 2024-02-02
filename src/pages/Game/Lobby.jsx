import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
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
import { Button } from "@/components/Game/Shared/Button";
import Footer from "@/components/Web/Shared/Layout/Footer";

const Lobby = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // 방 목록 정보 불러오기 api 호출
    const storedRoomInfoList = localStorage.getItem("roomInfoList");
    const bgVolume = localStorage.getItem("bgVolume");
    const fxVolume = localStorage.getItem("fxVolume");

    // 임시: 로컬 스토리지에서 불러오기
    if (storedRoomInfoList) {
      const roomList = JSON.parse(storedRoomInfoList);
      roomList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setRooms(roomList);
    }

    // 볼륨 조절
    // Audio.volume = bgVolume
    // Audio.volume = fxVolume
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
                  <Button type="help" />
                  <Button type="setting" />
                </div>
              </TabWrapper>
              <LobbyRoomList rooms={rooms} roomId={null} />
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
