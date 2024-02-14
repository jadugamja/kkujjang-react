import React from "react";

import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";
import Header from "@/components/Web/Shared/Layout/Header";
import Pagination from "@/components/Web/Shared/Board/Pagination";
import NoticeListContainer from "@/components/Web/Support/NoticeListContainer";

const NoticeList = () => {
  const [currPage, setCurrPage] = useState(16);
  const [notices, setNotices] = useState([]);

  useEffect(() => {}, [currPage]);

  useEffect(() => {
    // 임시 데이터
    const dataSet = [
      {
        id: 0,
        title: "공지1",
        createdAt: "2024.01.19",
        views: "119"
      },
      {
        id: 1,
        title: "공지2",
        createdAt: "2024.01.20",
        views: "120"
      },
      {
        id: 2,
        title: "공지3",
        createdAt: "2024.01.21",
        views: "121"
      },
      {
        id: 3,
        title: "공지4",
        createdAt: "2024.01.22",
        views: "122"
      }
    ];

    setNotices(dataSet);
  }, []);

  return (
    <ContentWrapper row="center" col="center">
      <WideContent dir="col">
        <Header type="detail" />
        <Main>
          <NoticeListContainer noticeData={notices} />
          <Pagination
            currPage={currPage}
            setCurrPage={setCurrPage}
            totalPageIdx="19"
          ></Pagination>
        </Main>
      </WideContent>
    </ContentWrapper>
  );
};

export default NoticeList;
