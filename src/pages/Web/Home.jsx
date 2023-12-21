import React from "react";
import { Outlet } from "react-router-dom";

import { Gradation, ContentWrapper, WideContent } from "../../styles/CommonStyle";

const Home = () => {
  return (
    <>
      {/* 모든 컴포넌트에 공통으로 나타나는 부분 */}
      <Gradation />
      {/* 모든 컴포넌트에 공통으로 나타나는 부분 */}

      {/* 다른 컴포넌트로 갈아끼워지는 부분 */}
      <Outlet />
      {/* 다른 컴포넌트로 갈아끼워지는 부분 */}

      {/* 현재 컴포넌트에서만 쓰이는 부분 */}
      <ContentWrapper row="center" col="center">
        <WideContent></WideContent>
      </ContentWrapper>
      {/* 현재 컴포넌트에서만 쓰이는 부분 */}
    </>
  );
};

export default Home;
