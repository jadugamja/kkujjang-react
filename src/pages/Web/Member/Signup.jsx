import React from "react";

// ===== components import =====
import Member from "@/components/Web/Member/Member";
import SignupForm from "@/components/Web/Member/SignupForm";

// ===== component =====
const Signup = () => {
  return (
    <Member type="big">
      <SignupForm />
    </Member>
  );
};

export default Signup;
