import React from "react";

// ===== style import =====
import { FlexBox } from "@/styles/FlexStyle";
import { Main } from "@/styles/CommonStyle";

// ===== components import =====
import Header from "@/components/Web/Shared/Layout/Header";
import LoginForm from "@/components/Web/Member/LoginForm";

// ===== component =====
const Login = () => {
  return (
    <>
      <FlexBox row="center" col="center">
        <Header type="big" />
        <FlexBox width="28.75rem" height="fit-content">
          <Main>
            <LoginForm />
          </Main>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default Login;
