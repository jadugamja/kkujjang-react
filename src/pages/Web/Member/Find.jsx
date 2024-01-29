import React from "react";
import { useLocation } from "react-router-dom";

import Header from "@/components/Web/Shared/Layout/Header";
import Footer from "@/components/Web/Shared/Layout/Footer";

const Find = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const type = query.get("type");

  return (
    <>
      <Header />
    </>
  );
};

export default Find;
