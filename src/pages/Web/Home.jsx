import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useCookies } from "react-cookie";

import { userInfoState } from "../../recoil/userState";
import { Gradation } from "@/styles/CommonStyle";
import Footer from "@/components/Web/Shared/Layout/Footer";
import HomeUser from "./HomeUser";
import HomeAdmin from "./HomeAdmin";
import { getCurrentUserInfo } from "../../services/user";

const Home = () => {
  const location = useLocation();
  const [cookies] = useCookies(["sessionId", "userRole"]);
  const [user, setUser] = useRecoilState(userInfoState);

  useEffect(() => {
    const sessionId = cookies.sessionId;
    if (sessionId) {
      setUser((attr) => ({ ...attr, role: cookies.userRole }));
      if (!user) getUserInfo();
    } else {
      setUser(null);
    }
  }, []);

  const getUserInfo = async () => {
    const userInfo = await getCurrentUserInfo();
    if (userInfo) setUser({ ...userInfo, role: cookies.userRole });
  };

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
