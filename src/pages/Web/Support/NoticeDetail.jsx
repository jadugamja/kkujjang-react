import React from "react";
import { useTheme } from "styled-components";

// ===== style import =====
import { ContentWrapper, WideContent } from "@/styles/CommonStyle";
import { Main as NoticeDetailMain } from "@/styles/StyledComponents";

// ===== components import =====
import Header from "@/components/Web/Shared/Layout/Header";
import NoticeDetailContainer from "@/components/Web/Support/NoticeDetailContainer";

// ===== component =====
const NoticeDetail = () => {
  const theme = useTheme();

  return (
    <ContentWrapper row="center" col="center">
      <Header type="detail" />
      <WideContent dir="col" width="100%">
        <NoticeDetailMain
          $width="100%"
          $height="100vh"
          $margin="7.5rem 0 0"
          $padding="0 24.5rem"
          $bgColor={theme.colors.content}
        >
          <NoticeDetailContainer />
        </NoticeDetailMain>
      </WideContent>
    </ContentWrapper>
  );
};

export default NoticeDetail;
