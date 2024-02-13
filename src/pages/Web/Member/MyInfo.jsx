import React from "react";
import styled from "styled-components";

// ===== components import =====
import Header from "@/components/Web/Shared/Layout/Header";
import MyInfoContainer from "@/components/Web/Member/MyInfoContainer";

// ===== style import =====
import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";

// ===== style =====
const MyInfoWrapper = styled.div`
  margin-top: ${(props) => props.marginTop || "150px"};
`;

const MyInfo = () => {
  return (
    <>
      <ContentWrapper row="center" col="center">
        <Header type="detail" />
        <WideContent width="1000px">
          <Main>
            <MyInfoWrapper>
              <MyInfoContainer />
            </MyInfoWrapper>
          </Main>
        </WideContent>
      </ContentWrapper>
    </>
  );
};

export default MyInfo;
