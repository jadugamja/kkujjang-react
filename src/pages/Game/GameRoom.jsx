import React, { useState } from "react";
import styled from "styled-components";

import { FlexBox } from "@/styles/FlexStyle";
import { ContentWrapper, WideContent, Main, SkyblueBox } from "@/styles/CommonStyle";
import GameHeader from "@/components/Game/Shared/GameHeader";
import { MainTab } from "@/components/Game/Lobby/Tab";
import PlayerList from "../../components/Game/Waiting/PlayerList";
import { HelpButton } from "@/components/Game/Lobby/Help";
import { SettingButton } from "@/components/Game/Lobby/Setting";
import { ExitButton } from "../../components/Game/Shared/Button";
import Profile from "../../components/Game/Shared/Profile";
import Chat from "@/components/Game/Shared/Chat";
import GameModal from "../../components/Game/Shared/GameModal";

const GameRoom = () => {
  const [isHost, setIsHost] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickTest = () => {
    debugger;
  };

  return (
    <ContentWrapper row="center" col="center">
      <WideContent dir="col">
        <GameHeader />
        <Main>
          <SkyblueBox>
            <MainContentWrapper dir="col">
              <HeaderWrapper row="between" col="end">
                <TabWrapper>
                  <MainTab bgColor="sub">대기실</MainTab>
                  {isHost ? (
                    <>
                      <MainTab bgColor="#cdeba1">시작</MainTab>
                      <MainTab bgColor="#FFC67F" onClick={() => setIsModalOpen(true)}>
                        방 설정
                      </MainTab>
                    </>
                  ) : isReady ? (
                    <MainTab
                      bgColor="#676767"
                      color="#fff"
                      onClick={() => setIsReady(!isReady)}
                    >
                      대기
                    </MainTab>
                  ) : (
                    <MainTab bgColor="#cdeba1" onClick={() => setIsReady(!isReady)}>
                      준비
                    </MainTab>
                  )}
                </TabWrapper>
                <div>
                  <HelpButton />
                  <SettingButton />
                  <ExitButton />
                </div>
              </HeaderWrapper>
              <BodyWrapper dir="col">
                <PlayerList isHost={isHost} isReady={isReady} />
                <LowerWrapper>
                  <Profile />
                  <Chat />
                  {/* <ButtonWrapper dir="col" row="center" col="center">
                    <div>
                      <ReadyButton>준비</ReadyButton>
                    </div>
                  </ButtonWrapper> */}
                </LowerWrapper>
              </BodyWrapper>
            </MainContentWrapper>
            {isModalOpen ? (
              <GameModal type="room" isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
            ) : null}
          </SkyblueBox>
        </Main>
      </WideContent>
    </ContentWrapper>
  );
};

const MainContentWrapper = styled(FlexBox)`
  flex-grow: 1;
`;

const HeaderWrapper = styled(FlexBox)``;

const BodyWrapper = styled(FlexBox)`
  width: 100%;
  height: 100%;
  border: 1px solid #7d7d7d;
`;

const TabWrapper = styled(FlexBox)`
  & > * + * {
    margin-left: 5px;
  }
`;

const LowerWrapper = styled(FlexBox)``;

const ButtonWrapper = styled(FlexBox)`
  flex-grow: 1;
  background-color: #eee;
`;

const ReadyButton = styled.button`
  padding: 14px 26px;
  background-color: #ffd700;
  font-family: "DNFBitBitv2";
  font-size: 32px;
  letter-spacing: 10px;
  transition-duration: 0.4s;
  border-radius: 6px;

  &:hover {
    background-color: #8b4513;
    color: black;
  }

  &:first-letter {
    margin-left: 10px;
  }
`;

export default GameRoom;
