import React from "react";

// ===== style import =====
import { ContentWrapper, NarrowContent, Main } from "@/styles/CommonStyle";

// ===== components import =====
import Header from "@/components/Web/Shared/Layout/Header";
import WithdrawalForm from "@/components/Web/Member/WithdrawalForm";

// ===== component =====
const Withdrawal = () => {
  return (
    <>
      <ContentWrapper row="center" col="center">
        <Header />
        <NarrowContent>
          <Main>
            <WithdrawalForm />
          </Main>
        </NarrowContent>
      </ContentWrapper>
    </>
  );
};

export default Withdrawal;
