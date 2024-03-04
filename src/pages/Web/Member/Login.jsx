import React from "react";

// ===== style import =====
import { ContentWrapper, NarrowContent, Main } from "@/styles/CommonStyle";

// ===== components import =====
import Header from "@/components/Web/Shared/Layout/Header";
import LoginForm from "@/components/Web/Member/LoginForm";

// ===== component =====
const Login = () => {
  return (
    <>
      <ContentWrapper row="center" col="center">
        <Header type="big" />
        <NarrowContent>
          <Main>
            <LoginForm />
          </Main>
        </NarrowContent>
      </ContentWrapper>
    </>
  );
};

export default Login;
