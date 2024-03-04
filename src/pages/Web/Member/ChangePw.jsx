import React from "react";

// ===== style import =====
import { ContentWrapper, NarrowContent, Main } from "@/styles/CommonStyle";

// ===== components import =====
import Header from "@/components/Web/Shared/Layout/Header";
import ChangepwForm from "@/components/Web/Member/ChangepwForm";

// ===== component =====
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
