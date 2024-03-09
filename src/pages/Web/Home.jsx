import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useCookies } from "react-cookie";

import { userState } from "../../recoil/userState";
import { Gradation } from "@/styles/CommonStyle";
import Footer from "@/components/Web/Shared/Layout/Footer";
import HomeUser from "./HomeUser";
import HomeAdmin from "./HomeAdmin";

const Home = () => {
  const location = useLocation();
  const [cookies] = useCookies(["sessionId"]);
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const sessionId = cookies.sessionId;
    if (sessionId) {
      setUser({ sessionId });
    }
  }, []);

  return (
    <>
      <Gradation />
      <Footer />
      <Outlet />

      {location.pathname === "/" && (
        <>{user?.role !== "admin" ? <HomeUser /> : <HomeAdmin />}</>
      )}
    </>
  );
};

export default Home;
