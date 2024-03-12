import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRecoilValue } from "recoil";
import PropTypes from "prop-types";
import styled from "styled-components";

import ManagementTitle from "./ManagementTitle";
import ManagementList from "./ManagementList";
import Button from "../Shared/Buttons/Button";
import SearchBar from "../Shared/Board/SearchBar";
import Pagination from "../Shared/Board/Pagination";
import { Box } from "@/components/Game/Shared/Layout";
import { FlexBox } from "@/styles/FlexStyle";
import useAxios from "@/hooks/useAxios";
import { remoteApiConfigState } from "../../../recoil/boardState";

const NoticeManagementList = ({ type, onDetailOpen, onCreateOpen }) => {
  const remoteApiConfig = useRecoilValue(remoteApiConfigState);
  const [cookies] = useCookies(["sessionId"]);
  const [listData, setListData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [lastPageIdx, setLastPageIdx] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [apiConfig, setApiConfig] = useState({
    method: "get",
    url: `/notice/list?page=${currPage}`,
    headers: {
      sessionId: cookies.sessionId
    }
  });
  const { response, loading, error, fetchData } = useAxios(apiConfig);

  useEffect(() => {
    if (apiConfig !== null) {
      fetchData();
    }
  }, [apiConfig]);

  useEffect(() => {
    if (remoteApiConfig !== null) {
      setApiConfig(remoteApiConfig);
    }
  }, [remoteApiConfig]);

  useEffect(() => {
    if (response !== null) {
      setLastPageIdx(response.lastPage === 0 ? 1 : response.lastPage);
      setListData(
        response.list.map(({ content, created_at, views, ...rest }) => ({
          ...rest,
          created_at: created_at.split("T")[0],
          views: views
        }))
      );
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

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : type !== "home" ? (
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
      )}
    </>
  );
};

NoticeManagementList.propTypes = {
  type: PropTypes.string,
  onDetailOpen: PropTypes.func,
  onCreateOpen: PropTypes.func
};

const HeaderWrapper = styled(FlexBox)`
  padding-bottom: 14px;
`;

const SearchBarWrapper = styled.div`
  margin-top: ${({ marginTop }) => marginTop};
  margin-right: ${({ marginRight }) => marginRight};
`;

const ButtonWrapper = styled(FlexBox)`
  margin-top: 10px;
`;

const CreateButton = styled(Button).attrs({ type: "smallDark", message: "등록" })``;

export default NoticeManagementList;
