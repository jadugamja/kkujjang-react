import React from "react";

// ===== style import =====
import { ContentWrapper, NarrowContent, Main } from "@/styles/CommonStyle";

// ===== components import =====
import Header from "@/components/Web/Shared/Layout/Header";
import SignupForm from "@/components/Web/Member/SignupForm";

// ===== component =====
const Signup = () => {
  return (
    <>
      <ContentWrapper row="center" col="center">
        <Header type="big" />
        <NarrowContent>
          <Main row="center">
            <SignupForm />
          </Main>
        </NarrowContent>
      </ContentWrapper>
    </>
  );
};

export default Signup;
