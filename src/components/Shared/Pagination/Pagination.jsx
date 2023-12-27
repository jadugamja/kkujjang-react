import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  PaginationWrapper,
  FirstButton,
  PrevListButton,
  NextListButton,
  LastButton,
  PageList,
  PageItem
} from "./PaginationStyle";

const Pagination = ({ currPage, setCurrPage, totalPageIdx = 101 }) => {
  // 페이지 그룹 크기
  const size = 10;

  // 현재 페이지가 속한 페이지 그룹 (1 ~ 10)
  const currentPageGroup = Math.floor((currPage - 1) / size);

  // 총 페이지 그룹
  const totalPageGroup = Math.floor((totalPageIdx - 1) / size);

  // 페이지 그룹의 시작 페이지 번호
  const startPageIdx = currentPageGroup * size + 1;

  // 현재 페이지에서 나타나는 페이지 목록
  const pageListLength =
    currentPageGroup === totalPageGroup && totalPageIdx % size !== 0
      ? totalPageIdx % size
      : size;
  const pageList = Array.from({ length: pageListLength }, (_, i) => startPageIdx + i);

  useEffect(() => {}, [currPage]);

  return (
    <PaginationWrapper row="center" col="center">
      <FirstButton onClick={() => setCurrPage(1)}>{"<<"}</FirstButton>
      <PrevListButton onClick={() => setCurrPage(Math.max(1, startPageIdx - size))}>
        {"<"}
      </PrevListButton>
      <PageList>
        {pageList.map((page) => (
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
        onClick={() => setCurrPage(Math.min(totalPageIdx, startPageIdx + size))}
      >
        {">"}
      </NextListButton>
      <LastButton onClick={() => setCurrPage(totalPageIdx)}>{">>"}</LastButton>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  currPage: PropTypes.number, // 현재 페이지 번호
  setCurrPage: PropTypes.func, // 현재 페이지 업데이트 함수
  totalPageIdx: PropTypes.number // 마지막 페이지 번호
};

export default Pagination;
