import React from "react";

// ===== style import =====
import { FlexBox } from "@/styles/FlexStyle";

// ===== components import =====
import Header from "@/components/Web/Shared/Layout/Header";
import SignupForm from "@/components/Web/Member/SignupForm";

// ===== component =====
const Signup = () => {
  return (
    <>
      <FlexBox row="center" col="center">
        <Header type="big" />
        <FlexBox width="35.75rem" height="fit-content">
          <FlexBox as="main" row="center" width="100%" margin="10.1rem 0 3.5rem">
            <SignupForm />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default Signup;
