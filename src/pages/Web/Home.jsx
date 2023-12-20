import React from "react";
import { Outlet } from "react-router-dom";

import { Gradation } from "../../styles/CommonStyle";

const Home = () => {
  return (
    <>
      {/* 모든 컴포넌트에 공통으로 나타나는 부분 */}
      <Gradation />
      {/* 모든 컴포넌트에 공통으로 나타나는 부분 */}

      {/* 다른 컴포넌트로 갈아끼워지는 부분 */}
      <Outlet />
      {/* 다른 컴포넌트로 갈아끼워지는 부분 */}
    </>
  );
};

export default Home;
