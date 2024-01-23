import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import PropTypes from "prop-types";
import styled from "styled-components";

import { isAnswerCompletedState } from "@/recoil/boardState";
import ManagementTitle from "./ManagementTitle";
import ManagementList from "./ManagementList";
import Filter from "../Shared/Board/Filter";
import Pagination from "../Shared/Board/Pagination";
import { FlexBox } from "@/styles/FlexStyle";

const InquiryManagementList = ({ type, onThreadOpen }) => {
  const [listData, setListData] = useState([]);
  const [selectedFilterOptions, setSelectedFilterOptions] = useState({});
  const [currPage, setCurrPage] = useState(1);
  const [lastPageIdx, setLastPageIdx] = useState(30);
  const [isAnswerCompleted, setIsAnswerCompleted] =
    useRecoilState(isAnswerCompletedState);

  // 필터 key 데이터 추출
  const filterKeys = ["type", "needsAnswer"];

  // 서버에서 받아온 데이터를 filterKeys의 값에 해당하는 것으로만 추출
  const filterOptions = filterKeys?.map((key) => {
    const uniqueValues = [...new Set(listData?.map((item) => item[key]))];
    if (key === "createdAt") {
      uniqueValues?.sort((a, b) => new Date(a) - new Date(b));
    } else {
      uniqueValues?.sort((a, b) => a - b); // 오름차순 정렬
    }
    return { key, values: uniqueValues };
  });

  useEffect(() => {
    // 문의 목록 조회 api 호출

    // 임시 데이터
    const tmp = [
      {
        id: "aldfka-123812lk-dklfal",
        type: 1,
        title: "제목1",
        needsAnswer: true
      },
      {
        id: "aldfka-123812lk-dadkfml",
        type: 2,
        title: "제목2",
        needsAnswer: true
      },
      {
        id: "aldfka-1238194809-dadkfml",
        type: 3,
        title: "제목3",
        needsAnswer: true
      },
      {
        id: "aldfka-908194809-dadkfml",
        type: 3,
        title: "제목4",
        needsAnswer: false
      }
    ];

    if (tmp.length === 0) {
      setListData([]);
    } else {
      // 각 문의 아이템 id마다 답변 여부 매핑
      setIsAnswerCompleted(
        tmp.reduce((acc, item) => ({ ...acc, [item.id]: !item.needsAnswer }), {})
      );
      setListData(tmp);
    }
  }, []);

  // 페이지, 필터 변경 시 호출
  useEffect(() => {
    const queryString = Object.entries(selectedFilterOptions)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    // 필터 적용 문의 목록 조회 api 호출
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

const FilterWrapper = styled.div`
  margin-top: ${({ marginTop }) => marginTop};
  margin-right: ${({ marginRight }) => marginRight};
`;

export default InquiryManagementList;
