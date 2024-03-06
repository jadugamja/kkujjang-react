import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

// ===== hooks import =====
import useAxios from "@/hooks/useAxios";

// ===== components import =====
import BoardTitle from "@/components/Web/Shared/Board/BoardTitle";
import SearchBar from "@/components/Web/Shared/Board/SearchBar";
import BoardItem from "@/components/Web/Shared/Board/BoardItem";
import Pagination from "@/components/Web/Shared/Board/Pagination";

// ===== style =====
const NoticeWrapper = styled(FlexBox)`
  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
`;

const NoticeListBox = styled.div`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
`;

// ===== component =====
const NoticeListContainer = () => {
  // === state ===
  const [listData, setListData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [lastPageIdx, setLastPageIdx] = useState(30);
  const [searchKeyword, setSearchKeyword] = useState("");
  // (api 관련)
  const [apiConfig, setApiConfig] = useState({
    method: "get",
    url: `/notice/list?page=${currPage}`
  });
  const { response, error, loading, fetchData } = useAxios(apiConfig);

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [apiConfig]);

  useEffect(() => {
    if (response !== null) {
      setLastPageIdx(response.lastPage);
      setListData(response.list);
    } else {
      setLastPageIdx(1);
      setListData([]);
    }
  }, [response]);

  // 페이지 변경, 검색 시 호출
  useEffect(() => {
    if (searchKeyword !== "") {
      setApiConfig({
        ...apiConfig,
        url: `/notice/search?q=${searchKeyword}&page=${currPage}`
      });
    } else {
      setApiConfig({
        ...apiConfig,
        url: `/notice/list?page=${currPage}`
      });
    }
  }, [currPage, searchKeyword]);

  const onDetailOpen = (noticeId) => {
    navigate(`/notice/${noticeId}`);
  };

  return (
    <>
      <NoticeListBox width="75rem" marginLeft="auto" marginRight="auto">
        <BoardTitle type="notice" />
        <NoticeWrapper row="end" marginBottom="25px">
          <SearchBar searchType="제목" setSearchKeyword={setSearchKeyword} />
        </NoticeWrapper>
        <NoticeListBox width="100%" height="460px">
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
