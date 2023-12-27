import React, { useState, useEffect } from "react";

import { ContentWrapper, WideContent } from "@/styles/CommonStyle";
import Header from "@/components/Shared/Layout/Header/Header";
import Pagination from "@/components/Shared/Board/Pagination/Pagination";

const NoticeList = () => {
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {}, [currPage]);

  return (
    <ContentWrapper row="center" col="center">
      <WideContent dir="col">
        <Header type="detail" />
        <Pagination currPage={currPage} setCurrPage={setCurrPage}></Pagination>
      </WideContent>
    </ContentWrapper>
  );
};

export default NoticeList;
