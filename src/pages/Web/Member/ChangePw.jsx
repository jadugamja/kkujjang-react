import React from "react";

// ===== components import =====
import Header from "@/components/Web/Shared/Layout/Header";
import ChangepwForm from "@/components/Web/Member/ChangepwForm";

// ===== style import =====
import { ContentWrapper, NarrowContent, Main } from "@/styles/CommonStyle";

const ChangePw = () => {
  return (
    <>
      <ContentWrapper row="center" col="center">
        <Header type="big" />
        <NarrowContent>
          <Main type="big">
            <ChangepwForm />
          </Main>
        </NarrowContent>
      </ContentWrapper>
    </>
  );
};

export default ChangePw;
