import React from "react";

// ===== components import =====
import Header from "@/components/Web/Shared/Layout/Header";
import LoginForm from "@/components/Web/Member/LoginForm";

// ===== style import =====
import { ContentWrapper, NarrowContent, Main } from "@/styles/CommonStyle";

const Login = () => {
  return (
    <>
      <ContentWrapper row="center" col="center">
        <Header />
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
