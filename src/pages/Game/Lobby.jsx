import React from "react";
import styled from "styled-components";

import GameHeader from "@/components/Game/Shared/GameHeader";
import { ContentWrapper, WideContent, Main, SkyblueBox } from "@/styles/CommonStyle";
import { FlexBox } from "@/styles/FlexStyle";
import Ranking from "@/components/Game/Lobby/Ranking";
import Profile from "../../components/Game/Shared/Profile";
import RoomList from "@/components/Game/Lobby/RoomList";
import { SideTab, MainTab } from "@/components/Game/Lobby/Tab";
import CreateRoomButton from "../../components/Game/Lobby/CreateRoomButton";
import { HelpButton } from "@/components/Game/Lobby/Help";
import { SettingButton } from "@/components/Game/Lobby/Setting";
import Footer from "@/components/Web/Shared/Layout/Footer";

const Lobby = () => {
  return (
    <ContentWrapper row="center" col="center">
      <WideContent dir="col">
        <GameHeader />
        <Main>
          <SkyblueBox>
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
                  <MainTab bgColor="#A0CFD5">게임시작</MainTab>
                </TabWrapper>
                <div>
                  <HelpButton />
                  <SettingButton />
                </div>
              </TabWrapper>
              <RoomList />
            </MainContentWrapper>
          </SkyblueBox>
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

// const ProfileWrapper = styled.div`
//   padding: 3px 5px;
//   background-color: #d6d6d6;
//   flex-grow: 1;
//   border: 1px solid #ccc;
// `;

const TabWrapper = styled(FlexBox)`
  & > * + * {
    margin-left: 5px;
  }
`;

// const TitleBar = styled(FlexBox).attrs({
//   col: "center"
// })`
//   width: 100%;
//   height: 1.5rem;
//   padding: 0 7px;
//   background-color: rgba(221, 221, 221, 0.5);
//   border-radius: 4px;
//   box-shadow: 2px 2px 1px #00000025;
//   font-size: 14px;
//   font-weight: 700;

//   & > * + * {
//     margin-left: 5px;
//   }
// `;

export default Lobby;
