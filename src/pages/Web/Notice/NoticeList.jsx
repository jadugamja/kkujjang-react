import React, { useState, useEffect } from "react";

import { ContentWrapper, WideContent } from "@/styles/CommonStyle";
import Header from "@/components/Web/Shared/Layout/Header";
import Pagination from "@/components/Web/Shared/Board/Pagination";

const NoticeList = () => {
  const [currPage, setCurrPage] = useState(16);

  useEffect(() => {}, [currPage]);

  return (
    <ContentWrapper row="center" col="center">
      <WideContent dir="col">
        <Header type="detail" />
        <Pagination
          currPage={currPage}
          setCurrPage={setCurrPage}
          totalPageIdx="19"
        ></Pagination>
      </WideContent>
    </ContentWrapper>
  );
};

export default NoticeList;
