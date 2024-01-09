import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { FlexBox } from "@/styles/FlexStyle";
import ManagementTitle from "./ManagementTitle";
import ManagementList from "./ManagementList";
import Pagination from "../Shared/Board/Pagination";
import SearchBar from "../Shared/Board/SearchBar";
import Button from "../Shared/Buttons/Button";
import NoticeManagementDetail from "./NoticeManagementDetail";
import NoticeManagementCreate from "./NoticeManagementCreate";

const NoticeManagementList = ({ type }) => {
  const [listData, setListData] = useState([]);
  const [detailData, setDetailData] = useState({});
  const [currPage, setCurrPage] = useState(1);
  const [lastPageIdx, setLastPageIdx] = useState(30);
  const [searchKeyword, setSearchKeyword] = useState("");

  const [isOpenRightSide, setIsOpenRightSide] = useState(0);

  // 컴포넌트 마운트될 때 조회
  useEffect(() => {
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

    // 공지사항 목록 조회 api 호출 및 성공 시 값 세팅
    // setLastPageIdx(data.result.lastPage)

    if (list.length === 0) {
      setListData([]);
    } else {
      setListData(list);
    }
  }, []);

  // 검색어 요청 때마다 통신
  useEffect(() => {
    let queryString = `?page=${currPage}${
      searchKeyword !== "" ? `&q=${searchKeyword}` : ""
    }`;
    // 공지사항 목록 조회 api 호출
  }, [currPage, searchKeyword]);

  const onDetailOpen = (id) => {
    // 공지사항 상세 조회 api 호출
    const detail = {
      id: id,
      title: "제목1111",
      content: "본문1111",
      createdAt: "2024-01-01 03:10",
      views: 10
    };
    setDetailData(detail);
    setIsOpenRightSide(1);
  };

  return (
    <>
      {type !== "home" ? (
        <>
          <Box>
            <HeaderWrapper row="between" col="center">
              <ManagementTitle title="notice" />
              <SearchBarWrapper marginTop="14px" marginRight="10px">
                <SearchBar setSearchKeyword={setSearchKeyword} />
              </SearchBarWrapper>
            </HeaderWrapper>
            <ManagementList title="notice" data={listData} onDetailOpen={onDetailOpen} />
            <Pagination
              currPage={currPage}
              setCurrPage={setCurrPage}
              lastPageIdx={lastPageIdx}
            />
            <ButtonWrapper row="end">
              <CreateButton onClick={() => setIsOpenRightSide(2)} />
            </ButtonWrapper>
          </Box>
          {isOpenRightSide === 1 ? (
            <Box>
              <NoticeManagementDetail data={detailData} />
            </Box>
          ) : isOpenRightSide === 2 ? (
            <Box>
              <NoticeManagementCreate />
            </Box>
          ) : (
            ""
          )}
        </>
      ) : (
        <Box type={type}>
          <ManagementTitle type={type} title="notice" />
          <ManagementList title="notice" data={listData} />
        </Box>
      )}
    </>
  );
};

NoticeManagementList.propTypes = {
  type: PropTypes.string
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
