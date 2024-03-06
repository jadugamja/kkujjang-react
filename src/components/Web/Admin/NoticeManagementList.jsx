import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ManagementTitle from "./ManagementTitle";
import ManagementList from "./ManagementList";
import Button from "../Shared/Buttons/Button";
import SearchBar from "../Shared/Board/SearchBar";
import Pagination from "../Shared/Board/Pagination";
import { FlexBox } from "@/styles/FlexStyle";
import useAxios from "@/hooks/useAxios";

const NoticeManagementList = ({ type, onDetailOpen, onCreateOpen }) => {
  const [listData, setListData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [lastPageIdx, setLastPageIdx] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [apiConfig, setApiConfig] = useState({
    method: "get",
    url: `/notice/list?page=${currPage}`
  });
  const { response, loading, error, fetchData } = useAxios(apiConfig);

  // useEffect(() => {}, [apiConfig]);

  useEffect(() => {
    if (response !== null) {
      setLastPageIdx(response.lastPage + 1);
      setListData(response.list);
    } else {
      setLastPageIdx(1);
      setListData([]);
    }
  }, [response]);

  // 페이지 변경, 검색 시 호출
  useEffect(() => {
    if (searchKeyword !== "") {
      fetchData({
        ...apiConfig,
        url: `/notice/search?q=${searchKeyword}&page=${currPage}`
      });
      // setApiConfig({
      //   ...apiConfig,
      //   url: `/notice/search?q=${searchKeyword}&page=${currPage}`
      // });
    } else {
      fetchData({
        ...apiConfig,
        url: `/notice/list?page=${currPage}`
      });

      // setApiConfig({
      //   ...apiConfig,
      //   url: `/notice/list?page=${currPage}`
      // });
    }
    fetchData(apiConfig);
  }, [currPage, searchKeyword]);

  return (
    <>
      {
        /* loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
        ) : */
        type !== "home" ? (
          <Box>
            <HeaderWrapper row="between" col="center">
              <ManagementTitle title="notice" />
              <SearchBarWrapper marginTop="14px" marginRight="10px">
                <SearchBar searchType="제목" setSearchKeyword={setSearchKeyword} />
              </SearchBarWrapper>
            </HeaderWrapper>
            <ManagementList
              isHome={false}
              title="notice"
              data={listData}
              onSideOpen={onDetailOpen}
            />
            <Pagination
              currPage={currPage}
              setCurrPage={setCurrPage}
              lastPageIdx={lastPageIdx}
            />
            <ButtonWrapper row="end">
              <CreateButton onClick={onCreateOpen} />
            </ButtonWrapper>
          </Box>
        ) : (
          <Box type={type}>
            <ManagementTitle type={type} title="notice" />
            <ManagementList
              isHome={true}
              title="notice"
              data={listData}
              onSideOpen={onDetailOpen}
            />
          </Box>
        )
      }
    </>
  );
};

NoticeManagementList.propTypes = {
  type: PropTypes.string,
  onDetailOpen: PropTypes.func,
  onCreateOpen: PropTypes.func
};

const Box = styled.div`
  width: ${({ type }) => (type === "home" ? "28rem" : "37.5rem")};
  height: ${({ type }) => (type === "home" ? "48.6rem" : "49.6rem")};
  padding: 10px;
  background-color: ${({ type, theme }) =>
    type === "home" ? "#fff" : theme.colors.content};
`;

const HeaderWrapper = styled(FlexBox)`
  padding-bottom: 14px;
  border-bottom: 5px solid ${({ theme }) => theme.colors.gray400};
`;

const SearchBarWrapper = styled.div`
  margin-top: ${({ marginTop }) => marginTop};
  margin-right: ${({ marginRight }) => marginRight};
`;

const ButtonWrapper = styled(FlexBox)`
  margin-top: 15px;
`;

const CreateButton = styled(Button).attrs({ type: "smallDark", message: "등록" })``;

export default NoticeManagementList;
