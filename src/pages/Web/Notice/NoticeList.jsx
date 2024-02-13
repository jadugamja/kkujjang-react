import React from "react";

import { ContentWrapper, WideContent } from "@/styles/CommonStyle";
import Header from "@/components/Web/Shared/Layout/Header";

const NoticeList = () => {
  return (
    <ContentWrapper row="center" col="center">
      <WideContent dir="col">
        <Header type="detail" />
      </WideContent>
    </ContentWrapper>
  );
};

export default NoticeList;
