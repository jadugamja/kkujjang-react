import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GameHeader from "@/components/Game/Shared/GameHeader";
import Footer from "@/components/Web/Shared/Layout/Footer";
import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";
import { FlexBox } from "@/styles/FlexStyle";
import {
  faCouch,
  faTrophy,
  faListUl,
  faCircleQuestion,
  faGear
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Ranking from "../../components/Game/Lobby/Ranking";
import RoomList from "../../components/Game/Lobby/RoomList";

const Lobby = () => {
  const [showWaitingRoom, setShowWaitingRoom] = useState(false);
  const [showOpenRoom, setShowOpenRoom] = useState(false);

  return (
    <ContentWrapper row="center" col="center">
      <WideContent dir="col">
        <GameHeader />
        <Main>
          <SkyblueBox>
            <SideContentWrapper dir="col">
              <Tab row="center" col="center">
                <TabIcon icon={faTrophy} />
                <TabSpan>랭킹</TabSpan>
              </Tab>
              <RankingWrapper>
                <TitleBar>랭킹</TitleBar>
                <Ranking />
              </RankingWrapper>
              <ProfileWrapper>
                <TitleBar>프로필</TitleBar>
              </ProfileWrapper>
            </SideContentWrapper>
            <MainContentWrapper dir="col">
              <TabWrapper row="between" col="end">
                <Tab row="center" col="center" bgColor="#748F9B80">
                  <TabSpan>방 목록</TabSpan>
                </Tab>
                <div>
                  <GuideButton>
                    <TabIcon icon={faCircleQuestion} fontSize="21px" />
                  </GuideButton>
                  <SettingButton>
                    <TabIcon icon={faGear} fontSize="21px" />
                  </SettingButton>
                </div>
              </TabWrapper>
              <RoomListWrapper dir="col">
                <TitleBar row="between">
                  <div>
                    <TitleIcon icon={faListUl} />
                    <span>방 목록</span>
                  </div>
                  <CheckboxWrapper>
                    <label>
                      <input
                        type="checkbox"
                        checked={showWaitingRoom}
                        onChange={(e) => setShowWaitingRoom(e.target.checked)}
                      />
                      대기방만 보기
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        checked={showOpenRoom}
                        onChange={(e) => setShowOpenRoom(e.target.checked)}
                      />
                      열린 방만 보기
                    </label>
                  </CheckboxWrapper>
                </TitleBar>
                <RoomList />
              </RoomListWrapper>
            </MainContentWrapper>
          </SkyblueBox>
        </Main>
        <Footer />
      </WideContent>
    </ContentWrapper>
  );
};

const SkyblueBox = styled(FlexBox)`
  width: 100%;
  max-width: 100%;
  height: 43.25rem;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.content};
`;

const SideContentWrapper = styled(FlexBox)`
  width: 16.5rem;
  height: 100%;
`;

const MainContentWrapper = styled(FlexBox)``;

const RankingWrapper = styled.div`
  width: 100%;
  height: 28.25rem;
  padding: 3px 5px;
  background-color: #f3f3f3;
  border: 1px solid #ccc;
  border-bottom: 0;
`;

const ProfileWrapper = styled.div`
  padding: 3px 5px;
  background-color: #d6d6d6;
  flex-grow: 1;
  border: 1px solid #ccc;
`;

const RoomListWrapper = styled(FlexBox)`
  width: 57.6rem;
  height: 100%;
  padding: 3px 5px;
  background-color: #748f9b80;
  border: 1px solid #ccc;
`;

const CheckboxWrapper = styled.div`
  & > * + * {
    margin-left: 10px;
  }
`;

const TabWrapper = styled(FlexBox)``;

const Tab = styled(FlexBox)`
  position: relative;
  z-index: 10;
  width: 8.75rem;
  height: 3rem;
  background-color: ${({ bgColor }) => bgColor || "#f3f3f3"};
  border: 1px solid #ccc;
  border-bottom: 0;
  border-radius: 12px 12px 0 0;
  flex-shrink: 0;

  & > * + * {
    margin-left: 7px;
  }
`;

const TabIcon = styled(FontAwesomeIcon)`
  font-size: ${({ fontSize }) => fontSize || "19px"};
`;

const TabSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
`;

const TitleBar = styled(FlexBox).attrs({
  col: "center"
})`
  width: 100%;
  height: 1.5rem;
  padding: 0 7px;
  background-color: rgba(221, 221, 221, 0.5);
  border-radius: 4px;
  box-shadow: 2px 2px 1px #00000025;
  font-size: 14px;
  font-weight: 700;

  & > * + * {
    margin-left: 5px;
  }
`;

const TitleIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  font-size: ${({ theme }) => theme.fontSize.xxxxs};
`;

const ExtraButton = styled.button`
  width: 50px;
  height: 42px;
  border-radius: 15px 15px 0 0;
`;

const GuideButton = styled(ExtraButton)`
  background-color: #ccc;
`;

const SettingButton = styled(ExtraButton)`
  background-color: #bbbbb9;
`;

export default Lobby;
