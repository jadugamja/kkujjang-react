import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
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
  const [cookies] = useCookies(["sessionId"]);
  const [listData, setListData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [lastPageIdx, setLastPageIdx] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [apiConfig, setApiConfig] = useState({
    method: "get",
    url: `/notice/list?page=${currPage}`,
    headers: {
      Authorization: `Bearer ${cookies.sessionId}`
    }
  });
  const { response, loading, error, fetchData } = useAxios(apiConfig);

  useEffect(() => {
    if (response !== null) {
      setLastPageIdx(response.lastPage + 1);
      setListData(response.list);
    } else {
      setLastPageIdx(1);
      setListData([]);
    }

    const list = [
      {
        title: "[안내] 이용 제한 조치/제재 및 이의 제기 관련 업무 안내",
        createdAt: "2024-02-01",
        id: 1
      },
      {
        title: "[단어소식] 주제별 단어 검토 기준 (ver. 20240101)",
        createdAt: "2024-01-20",
        id: 2
      },
      {
        title: "[모집공고] 끝짱 관리 팀원 모집 공고",
        createdAt: "2021-09-01",
        id: 3
      },
      {
        title: "[안내] 이용 제한 조치/제재 및 이의 제기 관련 업무 안내",
        createdAt: "2024-02-01",
        id: 4
      },
      {
        title: "[단어소식] 주제별 단어 검토 기준 (ver. 20240101)",
        createdAt: "2024-01-20",
        id: 5
      },
      {
        title: "[모집공고] 끝짱 관리 팀원 모집 공고",
        createdAt: "2021-09-01",
        id: 6
      },
      {
        title: "[안내] 이용 제한 조치/제재 및 이의 제기 관련 업무 안내",
        createdAt: "2024-02-01",
        id: 7
      },
      {
        title: "[단어소식] 주제별 단어 검토 기준 (ver. 20240101)",
        createdAt: "2024-01-20",
        id: 8
      },
      {
        title: "[모집공고] 끝짱 관리 팀원 모집 공고",
        createdAt: "2021-09-01",
        id: 9
      },
      {
        title: "[안내] 이용 제한 조치/제재 및 이의 제기 관련 업무 안내",
        createdAt: "2024-02-01",
        id: 10
      }
    ];
    setListData(list);
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
  width: ${({ type }) => (type === "home" ? "28rem" : "40.5rem")};
  height: ${({ type }) => (type === "home" ? "43.6rem" : "49.6rem")};
  padding: 10px 22px;
  background-color: #fff;
  border-radius: ${({ type }) => (type === "home" ? "25px" : "10px")};
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.25);
`;

const HeaderWrapper = styled(FlexBox)`
  padding-bottom: 14px;
  /* border-bottom: 5px solid ${({ theme }) => theme.colors.gray400}; */
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
