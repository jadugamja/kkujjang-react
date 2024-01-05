import React from "react";

import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";
import GameHeader from "@/components/Game/Shared/GameHeader";
import Footer from "@/components/Web/Shared/Layout/Footer";

const Lobby = () => {
  return (
    <ContentWrapper row="center" col="center">
      <WideContent dir="col">
        <GameHeader />
        <Main></Main>
        <Footer />
      </WideContent>
    </ContentWrapper>
  );
};

export default Lobby;
