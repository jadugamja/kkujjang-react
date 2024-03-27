import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useSetRecoilState } from "recoil";
import PropTypes from "prop-types";
import styled from "styled-components";

import ManagementTitle from "./ManagementTitle";
import ManagementList from "./ManagementList";
import SearchBar from "../Shared/Board/SearchBar";
import Pagination from "../Shared/Board/Pagination";
import { FlexBox } from "@/styles/FlexStyle";
import { Box } from "../../Game/Shared/Layout";
import { isActiveAccountState } from "@/recoil/userState";
import useAxios from "@/hooks/useAxios";

const UserManagementList = ({ type, onSideOpen }) => {
  const [cookies] = useCookies(["sessionId"]);
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [lastPageIdx, setLastPageIdx] = useState(30);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showBanned, setShowBanned] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const setAccountStates = useSetRecoilState(isActiveAccountState);
  const [apiConfig, setApiConfig] = useState({
    method: "get",
    url: `/user/search?page=${currPage}`,
    headers: {
      sessionId: cookies.sessionId
    }
  });
  const { response, loading, error, fetchData } = useAxios(apiConfig);

  useEffect(() => {
    setCurrPage(1);
    // setSearchKeyword("");
    setApiConfig({
      method: "get",
      url: `/user/search?page=1`,
      headers: {
        sessionId: cookies.sessionId
      }
    });
  }, []);

  useEffect(() => {
    if (response !== null) {
      setLastPageIdx(response.result.lastPage === 0 ? 1 : response.result.lastPage);
      setData(response.result.list);
      data?.forEach((user) => {
        setAccountStates((oldState) => ({ ...oldState, [user.id]: user.isBanned }));
      });
    } else {
      setLastPageIdx(1);
      setData([]);
    }
  }, [response]);

  useEffect(() => {
    fetchData();
  }, [apiConfig]);

  // 페이지 변경, 검색 시
  useEffect(() => {
    if (data?.length === 0 || searchKeyword === "") {
      return;
    }

    let queryString;
    if (searchKeyword !== "") {
      queryString = `?page=${currPage}&nickname=${searchKeyword}`;
    } else {
      queryString = `?page=${currPage}`;
    }

    setApiConfig({
      ...apiConfig,
      url: `/user/search${queryString}`
    });
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

const HeaderWrapper = styled(FlexBox)`
  padding-bottom: 14px;
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
