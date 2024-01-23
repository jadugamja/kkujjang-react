import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import PropTypes from "prop-types";
import styled from "styled-components";

import ManagementTitle from "./ManagementTitle";
import ManagementList from "./ManagementList";
import SearchBar from "../Shared/Board/SearchBar";
import Pagination from "../Shared/Board/Pagination";
import { FlexBox } from "@/styles/FlexStyle";
import { isActiveAccountState } from "@/recoil/userState";

const UserManagementList = ({ type, onSideOpen }) => {
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [lastPageIdx, setLastPageIdx] = useState(30);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showBanned, setShowBanned] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const setAccountStates = useSetRecoilState(isActiveAccountState);

  useEffect(() => {
    const tmp = [
      {
        id: 0,
        nickname: "닉네임1",
        username: "아이디1",
        createdAt: "2024-01-01 03:10",
        isBanned: false
      },
      {
        id: 1,
        nickname: "닉네임2",
        username: "아이디2",
        createdAt: "2024-01-01 03:10",
        isBanned: false
      },
      {
        id: 2,
        nickname: "닉네임3",
        username: "아이디3",
        createdAt: "2024-01-01 03:10",
        isBanned: true
      }
    ];

    // 사용자 목록 조회 api 호출 및 성공 시 값 세팅
    // setLastPageIdx(data.result.lastPage)
    if (tmp.length === 0) {
      setData([]);
    } else {
      setData(tmp);
      data?.forEach((user) => {
        setAccountStates((oldState) => ({ ...oldState, [user.id]: user.isBanned }));
      });
    }
  }, []);

  useEffect(() => {
    data?.forEach((user) => {
      setAccountStates((oldState) => ({ ...oldState, [user.id]: user.isBanned }));
    });
  }, [data, setAccountStates]);

  // 페이지 변경, 검색 시 호출
  useEffect(() => {
    if (data.length === 0) {
      return;
    }

    let queryString = `?page=${currPage}${
      searchKeyword !== "" ? `&q=${searchKeyword}` : ""
    }`;
    // 공지사항 목록 조회 api 호출
  }, [currPage, searchKeyword]);

  // 밴 여부 체크박스 클릭 제어
  useEffect(() => {
    if (showBanned) {
      setFilteredData(data.filter((user) => user.isBanned));
    } else {
      setFilteredData(data);
    }
  }, [showBanned, data]);

  return (
    <>
      {type !== "home" ? (
        <>
          <Box>
            <HeaderWrapper row="between">
              <ManagementTitle title="user" />
              <Label>
                <input
                  type="checkbox"
                  checked={showBanned}
                  onChange={(e) => setShowBanned(e.target.checked)}
                />
                밴 사용자
              </Label>
              <SearchBarWrapper marginTop="14px" marginRight="10px">
                <SearchBar searchType="닉네임" setSearchKeyword={setSearchKeyword} />
              </SearchBarWrapper>
            </HeaderWrapper>
            <ManagementList
              isHome={false}
              title="user"
              data={filteredData}
              onSideOpen={onSideOpen}
            />
            <Pagination
              currPage={currPage}
              setCurrPage={setCurrPage}
              lastPageIdx={lastPageIdx}
            />
          </Box>
        </>
      ) : (
        <Box type={type}>
          <ManagementTitle type={type} title="user" />
          <ManagementList
            isHome={true}
            title="user"
            data={data}
            onSideOpen={onSideOpen}
          />
        </Box>
      )}
    </>
  );
};

UserManagementList.propTypes = {
  type: PropTypes.string,
  onSideOpen: PropTypes.func
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

const Label = styled.label`
  margin-left: 1.125rem;
  padding-top: 2.25rem;
`;

export default UserManagementList;
