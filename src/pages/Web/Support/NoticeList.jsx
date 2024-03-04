import React from "react";
import styled from "styled-components";

// ===== style import =====
import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";

// ===== components import =====
import Header from "@/components/Web/Shared/Layout/Header";
import NoticeListContainer from "@/components/Web/Support/NoticeListContainer";

// ===== style =====
const NoticeListMain = styled(Main)`
  background-color: ${({ theme }) => theme.colors.content};
  height: 100vh;
`;

// ===== component =====
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
