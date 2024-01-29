import React from "react";

// ===== components import =====
import Header from "@/components/Web/Shared/Layout/Header";
import WithdrawalForm from "@/components/Web/Member/WithdrawalForm";

// ===== style import =====
import { ContentWrapper, NarrowContent, Main } from "@/styles/CommonStyle";

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
