import React from "react";

// ===== components import =====
import Header from "@/components/Web/Shared/Layout/Header";
import SignupForm from "@/components/Web/Member/SignupForm";

// ===== style import =====
import { ContentWrapper, NarrowContent, Main } from "@/styles/CommonStyle";

const Signup = () => {
  return (
    <>
      <ContentWrapper row="center" col="center">
        <Header />
        <NarrowContent>
          <Main>
            <SignupForm />
          </Main>
        </NarrowContent>
      </ContentWrapper>
    </>
  );
};

export default Signup;
