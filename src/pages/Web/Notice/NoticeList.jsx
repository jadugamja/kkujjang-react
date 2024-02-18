import React from "react";

import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";
import Header from "@/components/Web/Shared/Layout/Header";
import NoticeListContainer from "@/components/Web/Support/NoticeListContainer";

const NoticeList = () => {
  return (
    <ContentWrapper row="center" col="center">
      <WideContent dir="col">
        <Header type="detail" />
        <Main row="center">
          <NoticeListContainer />
        </Main>
      </WideContent>
    </ContentWrapper>
  );
};

export default NoticeList;
