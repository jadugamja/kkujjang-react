import React, { useEffect } from "react";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

// ===== style =====

// ===== component =====
const NoticeListContainer = () => {
  // 백엔드 통신
  const [data, setData] = useState([]);

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
        createdAt: "2024.01.19",
        views: "120"
      },
      {
        id: 2,
        title: "공지3",
        createdAt: "2024.01.19",
        views: "121"
      }
    ];

    setData(dataSet);
  }, []);

  return (
    <>
      <BoardTitle></BoardTitle>
      <SearchBar></SearchBar>
      <BoardItem></BoardItem>
    </>
  );
};

NoticeListContainer.propTypes = {};

export default NoticeListContainer;
