import React from "react";
import styled from "styled-components";

// ===== style import =====
import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";

// ===== components import =====
import Header from "@/components/Web/Shared/Layout/Header";
import InquiryListContainer from "@/components/Web/Support/InquiryListContainer";

// ===== style =====
const InquiryListMain = styled(Main)`
  background-color: ${({ theme }) => theme.colors.content};
  height: 100vh;
`;

// ===== component =====
const InquiryList = () => {
  return (
    <ContentWrapper row="center" col="center">
      <Header type="detail" />
      <WideContent dir="col" width="100%">
        <InquiryListMain>
          <InquiryListContainer />
        </InquiryListMain>
      </WideContent>
    </ContentWrapper>
  );
};
export default InquiryList;
