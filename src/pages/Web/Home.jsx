import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Gradation, ContentWrapper, WideContent } from "@/styles/CommonStyle";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";

const Home = () => {
  const location = useLocation();

  return (
    <>
      {/* 모든 컴포넌트에 공통으로 나타나는 부분 */}
      <Gradation />
      <Footer />
      {/* 모든 컴포넌트에 공통으로 나타나는 부분 */}

      {/* 다른 컴포넌트로 갈아끼워지는 부분 */}
      <Outlet />
      {/* 다른 컴포넌트로 갈아끼워지는 부분 */}

      {/* 현재 컴포넌트에서만 쓰이는 부분 */}
      {location.pathname === "/" && (
        <ContentWrapper row="center" col="center">
          <WideContent dir="col">
            <Header />
          </WideContent>
        </ContentWrapper>
      )}
      {/* 현재 컴포넌트에서만 쓰이는 부분 */}
    </>
  );
};

export default Home;
