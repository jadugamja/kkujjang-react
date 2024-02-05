import React from "react";

// ===== components import =====
import Header from "@/components/Web/Shared/Layout/Header";
import MyInfoContainer from "@/components/Web/Member/SignupForm";

// ===== style import =====
import { ContentWrapper, NarrowContent, Main } from "@/styles/CommonStyle";

const MyInfo = () => {
  return (
    <>
      <ContentWrapper row="center" col="center">
        <Header />
        <NarrowContent>
          <Main>
            <MyInfoContainer />
          </Main>
        </NarrowContent>
      </ContentWrapper>
    </>
  );
};

export default MyInfo;
