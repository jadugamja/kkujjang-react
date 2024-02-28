import React from "react";

// ===== components import =====
import Member from "@/pages/Web/Member/Member";
import LoginForm from "@/components/Web/Member/LoginForm";

// ===== component =====
const Login = () => {
  return (
    <Member type="big">
      <LoginForm />
    </Member>
  );
};

export default Login;
