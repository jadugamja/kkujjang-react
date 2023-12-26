import React, { useState } from "react";

import { ContentWrapper, WideContent } from "@/styles/CommonStyle";
import Header from "@/components/Shared/Layout/Header/Header";
import Pagination from "@/components/Shared/Pagination/Pagination";

const NoticeList = () => {
  const [page, setPage] = useState(1);

  return (
    <ContentWrapper row="center" col="center">
      <WideContent dir="col">
        <Header type="detail" />
        <Pagination page={page} setPage={setPage}></Pagination>
      </WideContent>
    </ContentWrapper>
  );
};

export default NoticeList;
