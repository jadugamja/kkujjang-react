import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState, useRecoilValue } from "recoil";
import PropTypes from "prop-types";
import styled from "styled-components";

import { isAnswerCompletedState, remoteApiConfigState } from "@/recoil/boardState";
import ManagementTitle from "./ManagementTitle";
import ManagementList from "./ManagementList";
import Filter from "../Shared/Board/Filter";
import Pagination from "../Shared/Board/Pagination";
import { FlexBox } from "@/styles/FlexStyle";
import { Box } from "../../Game/Shared/Layout";
import useAxios from "@/hooks/useAxios";

const InquiryManagementList = ({ type, onThreadOpen }) => {
  const remoteApiConfig = useRecoilValue(remoteApiConfigState);
  const [cookies] = useCookies(["sessionId"]);
  const [listData, setListData] = useState([]);
  const [selectedFilterOptions, setSelectedFilterOptions] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const [lastPageIdx, setLastPageIdx] = useState(30);
  const [isAnswerCompleted, setIsAnswerCompleted] =
    useRecoilState(isAnswerCompletedState);
  const [apiConfig, setApiConfig] = useState({
    method: "get",
    url: `/inquiry/search?page=${currPage}`,
    headers: {
      sessionId: cookies.sessionId
    }
  });
  const { response, loading, error, fetchData } = useAxios(apiConfig, false);

  // 필터 key 데이터 추출
  const filterKeys = ["type", "needAnswer"];

  // 서버에서 받아온 데이터를 filterKeys의 값에 해당하는 것으로만 추출
  const filterOptions = filterKeys?.map((key) => {
    let uniqueValues;
    if (key === "type") {
      uniqueValues = [0, 1, 2, 5, 99];
    } else if (key === "needAnswer") {
      uniqueValues = [true, false];
    }
    return { key, values: uniqueValues };
  });

  useEffect(() => {
    if (apiConfig !== null) {
      fetchData();
    }
  }, [apiConfig]);

  useEffect(() => {
    if (remoteApiConfig !== null) {
      setApiConfig({
        ...remoteApiConfig,
        url: `/inquiry/search?page=${currPage}`
      });
    }
  }, [remoteApiConfig]);

  useEffect(() => {
    if (response !== null) {
      setLastPageIdx(response.result.lastPage === 0 ? 1 : response.result.lastPage);
      setListData(
        response.result.list?.map(
          ({ updatedAt, createdAt, id, type, title, needAnswer }) => ({
            id,
            type,
            title,
            needAnswer
          })
        )
      );
    } else {
      setLastPageIdx(1);
      setListData([]);
    }
  }, [response]);

  // 페이지, 필터 변경 시 호출
  useEffect(() => {
    if (selectedFilterOptions !== null) {
      const queryString = Object.entries(selectedFilterOptions)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");

      setApiConfig({
        ...apiConfig,
        url: `/inquiry/search?page=${currPage}&${queryString}`
      });
    } else {
      setApiConfig({
        ...apiConfig,
        url: `/inquiry/search?page=${currPage}`
      });
    }
  }, [currPage, selectedFilterOptions]);

  return (
    <>
      {type !== "home" ? (
        <Box>
          <HeaderWrapper row="between" col="center">
            <ManagementTitle title="inquiry" />
            <FilterWrapper marginTop="1.313rem" marginRight="0.75rem">
              <Filter
                filterOptions={filterOptions}
                selectedFilterOptions={selectedFilterOptions}
                setSelectedFilterOptions={setSelectedFilterOptions}
              />
            </FilterWrapper>
          </HeaderWrapper>
          <ManagementList
            isHome={false}
            title="inquiry"
            data={listData}
            onSideOpen={onThreadOpen}
            isAnswerCompleted={isAnswerCompleted}
          />
          <Pagination
            currPage={currPage}
            setCurrPage={setCurrPage}
            lastPageIdx={lastPageIdx}
          />
        </Box>
      ) : (
        <Box type={type}>
          <ManagementTitle type={type} title="inquiry" />
          <ManagementList
            isHome={true}
            title="inquiry"
            data={listData}
            isAnswerCompleted={isAnswerCompleted}
            onSideOpen={onThreadOpen}
          />
        </Box>
      )}
    </>
  );
};

InquiryManagementList.propTypes = {
  type: PropTypes.string,
  onThreadOpen: PropTypes.func,
  isAnswerCompleted: PropTypes.object,
  setIsAnswerCompleted: PropTypes.func
};

const HeaderWrapper = styled(FlexBox)`
  padding-bottom: 14px;
`;

const FilterWrapper = styled.div`
  margin-top: ${({ marginTop }) => marginTop};
  margin-right: ${({ marginRight }) => marginRight};
`;

export default InquiryManagementList;
