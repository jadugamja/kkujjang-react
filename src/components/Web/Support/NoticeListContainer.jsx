import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

// ===== components import =====
import BoardTitle from "@/components/Web/Shared/Board/BoardTitle";
import SearchBar from "@/components/Web/Shared/Board/SearchBar";
import BoardItem from "@/components/Web/Shared/Board/BoardItem";
import Pagination from "@/components/Web/Shared/Board/Pagination";

// ===== style =====
const Noticewrapper = styled(FlexBox)`
  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
`;

// ===== component =====
const NoticeListContainer = () => {
  // === state ===
  const [listData, setListData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [lastPageIdx, setLastPageIdx] = useState(30);

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {}, [currPage]);

  useEffect(() => {
    const getNoticeListHandler = async () => {
      try {
        const data = await getNoticeList(currPage);
        if (data.list.length === 0) {
          setLastPageIdx(data.lastPage);
          setListData([]);
        } else {
          setLastPageIdx(data.lastPage);
          setListData(data.list);
        }
      } catch (err) {
        console.error(`[Error]: ${err}`);
      }
    };
    getNoticeListHandler();

    // 임시 데이터
    const list = [
      {
        id: 0,
        title: "제목1",
        createdAt: "2024-01-01 03:10",
        views: 0
      },
      {
        id: 1,
        title: "제목2",
        createdAt: "2024-01-01 03:10",
        views: 0
      },
      {
        id: 2,
        title: "제목3",
        createdAt: "2024-01-01 03:10",
        views: 0
      },
      {
        id: 3,
        title: "제목4",
        createdAt: "2024-01-01 03:10",
        views: 0
      },
      {
        id: 4,
        title: "제목5",
        createdAt: "2024-01-01 03:10",
        views: 0
      },
      {
        id: 5,
        title: "제목6",
        createdAt: "2024-01-01 03:10",
        views: 0
      },
      {
        id: 6,
        title: "제목7",
        createdAt: "2024-01-01 03:10",
        views: 0
      },
      {
        id: 7,
        title: "제목8",
        createdAt: "2024-01-01 03:10",
        views: 0
      },
      {
        id: 8,
        title: "제목9",
        createdAt: "2024-01-01 03:10",
        views: 0
      },
      {
        id: 9,
        title: "제목10",
        createdAt: "2024-01-01 03:10",
        views: 0
      }
    ];

    if (list.length === 0) {
      setListData([]);
    } else {
      setListData(list);
    }
  }, []);

  const onDetailOpen = (noticeId) => {
    navigate(`/notice/${noticeId}`);
  };

  return (
    <>
      <BoardTitle type="notice" />
      <Noticewrapper row="end" marginBottom="25px">
        <SearchBar searchType="제목" />
      </Noticewrapper>
      {listData?.map((listData) => (
        <BoardItem
          boardType="notice"
          key={listData.id}
          id={listData.id}
          data={listData}
          onClick={() => onDetailOpen(listData.id)}
        />
      ))}
      <Noticewrapper marginTop="25px">
        <Pagination
          currPage={currPage}
          setCurrPage={setCurrPage}
          lastPageIdx={lastPageIdx}
        />
      </Noticewrapper>
    </>
  );
};

export default NoticeListContainer;
