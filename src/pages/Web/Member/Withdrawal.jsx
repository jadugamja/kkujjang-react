import React from "react";

// ===== components import =====
import Member from "@/pages/Web/Member/Member";
import WithdrawalForm from "@/components/Web/Member/WithdrawalForm";

// ===== component =====
const Withdrawal = () => {
  return (
    <Member type="big" marginTop="10rem">
      <WithdrawalForm />
    </Member>
  );
};

export default Withdrawal;
