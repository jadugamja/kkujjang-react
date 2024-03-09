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
const NoticeWrapper = styled(FlexBox)`
  margin-right: ${(props) => props.marginRight};
  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
`;

const NoticeListBox = styled.div`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
  padding: ${(props) => props.padding};
`;

// ===== component =====
const NoticeListContainer = () => {
  // === state ===
  const [listData, setListData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [lastPageIdx, setLastPageIdx] = useState(30);
  const [searchKeyword, setSearchKeyword] = useState("");

  // === navigate ===
  const navigate = useNavigate();

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
        title: "[안내] 이용 제한 조치/제재 및 이의 제기 관련 업무 안내",
        createdAt: "2024-01-01",
        views: 1
      },
      {
        id: 1,
        title: "[단어소식] 주제별 단어 검토 기준 (ver. 20240101)",
        createdAt: "2024-01-01",
        views: 2
      },
      {
        id: 2,
        title: "[모집공고] 끝짱 관리 팀원 모집 공고",
        createdAt: "2024-01-01",
        views: 3
      },
      {
        id: 3,
        title: "[안내] 이용 제한 조치/제재 및 이의 제기 관련 업무 안내",
        createdAt: "2024-01-01",
        views: 1
      },
      {
        id: 4,
        title: "[단어소식] 주제별 단어 검토 기준 (ver. 20240101)",
        createdAt: "2024-01-01",
        views: 2
      },
      {
        id: 5,
        title: "[모집공고] 끝짱 관리 팀원 모집 공고",
        createdAt: "2024-01-01",
        views: 3
      },
      {
        id: 6,
        title: "[안내] 이용 제한 조치/제재 및 이의 제기 관련 업무 안내",
        createdAt: "2024-01-01",
        views: 1
      },
      {
        id: 7,
        title: "[단어소식] 주제별 단어 검토 기준 (ver. 20240101)",
        createdAt: "2024-01-01",
        views: 2
      },
      {
        id: 8,
        title: "[모집공고] 끝짱 관리 팀원 모집 공고",
        createdAt: "2024-01-01",
        views: 3
      },
      {
        id: 9,
        title: "[안내] 이용 제한 조치/제재 및 이의 제기 관련 업무 안내",
        createdAt: "2024-01-01",
        views: 1
      },
      {
        id: 1,
        title: "[단어소식] 주제별 단어 검토 기준 (ver. 20240101)",
        createdAt: "2024-01-01",
        views: 2
      }
    ];

    if (list.length === 0) {
      setListData([]);
    } else {
      setListData(list);
    }
  }, []);

  // 백엔드 코드, 수정될 부분
  useEffect(() => {
    const getNoticeSearchHandler = async () => {
      try {
        const data = await getNoticeSearch(currPage, searchKeyword);
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
    getNoticeSearchHandler();
  }, [currPage, searchKeyword]);

  const onDetailOpen = (noticeId) => {
    navigate(`/notice/${noticeId}`);
  };

  return (
    <>
      <NoticeListBox width="75rem" marginLeft="auto" marginRight="auto">
        <BoardTitle type="notice" />
        <NoticeWrapper row="end" marginBottom="25px" marginRight="56px">
          <SearchBar searchType="제목" setSearchKeyword={setSearchKeyword} />
        </NoticeWrapper>
        <NoticeListBox width="100%" height="fit-content" padding="10px 72px">
          {listData?.map((listData, index) => (
            <BoardItem
              boardType="notice"
              key={index}
              id={listData.id}
              data={listData}
              onClick={() => onDetailOpen(listData.id)}
            />
          ))}
        </NoticeListBox>
        <NoticeWrapper marginTop="25px">
          <Pagination
            currPage={currPage}
            setCurrPage={setCurrPage}
            lastPageIdx={lastPageIdx}
          />
        </NoticeWrapper>
      </NoticeListBox>
    </>
  );
};

export default NoticeListContainer;
