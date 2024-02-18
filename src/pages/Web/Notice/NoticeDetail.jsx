import React from "react";

import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";
import Header from "@/components/Web/Shared/Layout/Header";
import NoticeDetailContainer from "@/components/Web/Support/NoticeDetailContainer";

const NoticeDetail = () => {
  return (
    <ContentWrapper row="center" col="center">
      <WideContent dir="col">
        <Header type="detail" />
        <Main row="center">
          <NoticeDetailContainer />
        </Main>
      </WideContent>
    </ContentWrapper>
  );
};

export default NoticeDetail;
