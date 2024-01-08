import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Gradation, ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";
import Header from "@/components/Web/Shared/Layout/Header";
import Footer from "@/components/Web/Shared/Layout/Footer";

const Home = () => {
  const location = useLocation();

  return (
    <>
      <Gradation />
      <Footer />

      <Outlet />
      {location.pathname === "/" && (
        <ContentWrapper row="center" col="center">
          <WideContent dir="col">
            <Header />
            <Main></Main>
          </WideContent>
        </ContentWrapper>
      )}
    </>
  );
};

export default Home;
