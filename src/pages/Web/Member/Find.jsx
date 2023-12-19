import React from "react";
import { useLocation } from "react-router-dom";

const Find = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const type = query.get("type");
};

export default Find;
