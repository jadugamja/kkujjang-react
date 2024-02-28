import React from "react";
import { useLocation } from "react-router-dom";

// ===== components import =====
import Member from "@/components/Web/Member/Member";
import FindidForm from "@/components/Web/Member/FindidForm";
import FindpwForm from "@/components/Web/Member/FindpwForm";

// ===== component =====
const Find = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const type = query.get("type");

  return (
    <Member type="big">
      {type === "id" && <FindidForm />}
      {type === "pw" && <FindpwForm />}
    </Member>
  );
};

export default Find;
