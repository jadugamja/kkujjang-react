import React from "react";

// ===== components import =====
import Member from "@/components/Web/Member/Member";
import MyInfoContainer from "@/components/Web/Member/MyInfoContainer";

// ===== component =====
const MyInfo = () => {
  return (
    <Member type="detail">
      <MyInfoContainer />
    </Member>
  );
};

export default MyInfo;
