import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["sessionId", "userRole"]);
  const [user, setUser] = useRecoilState(userInfoState);

  useEffect(() => {
    const sessionId = cookies.sessionId;
    if (sessionId) {
      setUser((attr) => ({ ...attr, role: cookies.userRole }));
      if (!user) getUserInfo();
    } else {
      setUser(null);
    }
  }, [cookies?.sessionId]);

  const getUserInfo = async () => {
    try {
      const userInfo = await getCurrentUserInfo();
      if (userInfo) setUser({ ...userInfo, role: cookies.userRole });
    } catch (err) {
      logout();
    }
  };

  const logout = () => {
    removeCookie("sessionId", { path: "/" });
    removeCookie("userRole", { path: "/" });
    setUser(null);
    navigate("/");
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
