import React from "react";

// ===== components import =====
import Member from "@/components/Web/Member/Member";
import ChangepwForm from "@/components/Web/Member/ChangepwForm";

// ===== component =====
const ChangePw = () => {
  return (
    <Member type="big" marginTop="10rem">
      <ChangepwForm />
    </Member>
  );
};

export default ChangePw;
