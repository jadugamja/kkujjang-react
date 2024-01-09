import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAnglesLeft,
  faAngleLeft,
  faAngleRight,
  faAnglesRight
} from "@fortawesome/free-solid-svg-icons";
import FlexBox from "@/styles/FlexStyle";

const Pagination = ({ currPage = 1, setCurrPage, lastPageIdx = 1 }) => {
  // 페이지 그룹 크기
  const size = 10;

  // 현재 페이지가 속한 페이지 그룹 (1 ~ 10)
  const currentPageGroup = Math.floor((currPage - 1) / size);

  // 총 페이지 그룹
  const totalPageGroup = Math.floor((lastPageIdx - 1) / size);

  // 페이지 그룹의 시작 페이지 번호
  const startPageIdx = currentPageGroup * size + 1;

  // 현재 페이지에서 나타나는 페이지 목록
  const pageListLength =
    currentPageGroup === totalPageGroup && lastPageIdx % size !== 0
      ? lastPageIdx % size
      : size;
  const pageList = Array.from({ length: pageListLength }, (_, i) => startPageIdx + i);

  return (
    <PaginationWrapper row="center" col="center">
      <FirstButton icon={faAnglesLeft} onClick={() => setCurrPage(1)}></FirstButton>
      <PrevListButton
        icon={faAngleLeft}
        onClick={() => setCurrPage(Math.max(1, startPageIdx - size))}
      ></PrevListButton>
      <PageList>
        {pageList?.map((page) => (
          <PageItem
            key={page}
            onClick={() => setCurrPage(page)}
            active={currPage === page}
          >
            {page}
          </PageItem>
        ))}
      </PageList>
      <NextListButton
        icon={faAngleRight}
        onClick={() => setCurrPage(Math.min(lastPageIdx, startPageIdx + size))}
      ></NextListButton>
      <LastButton
        icon={faAnglesRight}
        onClick={() => setCurrPage(lastPageIdx)}
      ></LastButton>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  currPage: PropTypes.number, // 현재 페이지 번호
  setCurrPage: PropTypes.func, // 현재 페이지 번호 업데이트 함수
  lastPageIdx: PropTypes.number // 마지막 페이지 번호
};

// 페이지네이션을 감싸는 태그
const PaginationWrapper = styled(FlexBox)`
  width: 100%;
  height: 30px;
  margin-top: 10px;
`;

// 페이지네이션에 쓰이는 공통 버튼 스타일
const PaginationButton = styled(FontAwesomeIcon)`
  margin: 8px;
  font-size: 1rem;
  color: #687587;
  cursor: pointer;
`;

// 맨 앞으로 가기 버튼
const FirstButton = styled(PaginationButton)``;

// 이전 페이지 리스트로 가기 버튼
const PrevListButton = styled(PaginationButton)``;

// 다음 페이지 리스트로 가기 버튼
const NextListButton = styled(PaginationButton)``;

// 맨 마지막으로 가기 버튼
const LastButton = styled(PaginationButton)``;

// 페이지 번호를 감싸는 태그
const PageList = styled(FlexBox)``;

// 페이지 번호
const PageItem = styled.button`
  background-color: transparent;
  font-family: "Pretendard Variable";
  width: 32px;
  height: 32px;
  font-size: 16px;
  margin: 0 2px;
  font-weight: ${({ active }) => (active ? "700" : "500")};
  color: ${({ active }) => (active ? "#2C333C" : "#B0B5BE")};
  text-decoration: ${({ active }) => (active ? "underline" : "none")};

  &:hover {
    background-color: #ffffff90;
    border-radius: 50%;
  }
`;

export default Pagination;
