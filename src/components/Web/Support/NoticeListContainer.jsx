import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

// ===== hooks import =====
import useAxios from "@/hooks/useAxios";

// ===== service import =====
import { POST_SEARCH_WORD_REGEX } from "../../../services/regexp";

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
      if (apiConfig.url.includes("/search?q=")) {
        setLastPageIdx(1);
        setListData(response.result);
        console.log(response.result);
      } else {
        setLastPageIdx(response.lastPage === 0 ? 1 : response.lastPage);
        setListData(response.list);
        console.log(response.list);
      }
    } else {
      setLastPageIdx(1);
      setListData([]);
    }
  }, [response, error]);

  // 페이지 변경, 검색 시 호출
  useEffect(() => {
    if (searchKeyword === "" || !POST_SEARCH_WORD_REGEX.test(searchKeyword)) return;

    setApiConfig({
      ...apiConfig,
      url: `/notice/search?q=${searchKeyword}&page=${currPage}`
    });
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
