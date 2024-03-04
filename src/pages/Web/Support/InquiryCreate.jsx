import React from "react";
import styled from "styled-components";

// ===== style import =====
import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";

// ===== components import =====
import Header from "@/components/Web/Shared/Layout/Header";
import InquiryCreateContainer from "@/components/Web/Support/InquiryCreateContainer";

// ===== style =====
const InquiryCreateMain = styled(Main)`
  background-color: ${({ theme }) => theme.colors.content};
  height: 100vh;
`;

// ===== component =====
const InquiryCreate = () => {
  return (
    <ContentWrapper row="center" col="center">
      <Header type="detail" />
      <WideContent dir="col" width="100%">
        <InquiryCreateMain>
          <InquiryCreateContainer />
        </InquiryCreateMain>
      </WideContent>
    </ContentWrapper>
  );
};

export default InquiryCreate;
