import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { userState } from "../../recoil/userState";
import { Gradation } from "@/styles/CommonStyle";
import Footer from "@/components/Web/Shared/Layout/Footer";
import HomeGuest from "./HomeGuest";
import HomeMember from "./HomeMember";
import HomeAdmin from "./HomeAdmin";

const Home = () => {
  const location = useLocation();
  const user = useRecoilValue(userState);
  const isAuthenticated = user != null;

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(user);
    }
  }, []);

  return (
    <>
      <Gradation />
      <Footer />
      <Outlet />

      {location.pathname === "/" && (
        <>
          {!isAuthenticated ? (
            <HomeGuest />
          ) : user?.role !== "admin" ? (
            <HomeMember />
          ) : (
            <HomeAdmin />
          )}
        </>
      )}
    </>
  );
};

export default Home;
