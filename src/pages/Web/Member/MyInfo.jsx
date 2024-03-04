import React from "react";
import styled from "styled-components";

// ===== style import =====
import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";

// ===== components import =====
import Header from "@/components/Web/Shared/Layout/Header";
import MyInfoContainer from "@/components/Web/Member/MyInfoContainer";

// ===== style =====
const MyInfoMain = styled(Main)`
  padding-top: ${(props) => props.marginTop || "150px"};
  background-color: ${({ theme }) => theme.colors.content};
`;

// ===== component =====
const MyInfo = () => {
  return (
    <>
      <ContentWrapper row="center" col="center">
        <Header type="detail" />
        <WideContent width="100%">
          <MyInfoMain>
            <MyInfoContainer />
          </MyInfoMain>
        </WideContent>
      </ContentWrapper>
    </>
  );
};

export default MyInfo;
