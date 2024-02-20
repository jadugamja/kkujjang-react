import React from "react";
import styled from "styled-components";

import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";
import Header from "@/components/Web/Shared/Layout/Header";
import NoticeListContainer from "@/components/Web/Support/NoticeListContainer";

const NoticeListMain = styled(Main)`
  background-color: ${({ theme }) => theme.colors.content};
  height: 100vh;
`;

const NoticeList = () => {
  return (
    <ContentWrapper row="center" col="center">
      <Header type="detail" />
      <WideContent dir="col" width="100%">
        <NoticeListMain>
          <NoticeListContainer />
        </NoticeListMain>
      </WideContent>
    </ContentWrapper>
  );
};

export default NoticeList;
