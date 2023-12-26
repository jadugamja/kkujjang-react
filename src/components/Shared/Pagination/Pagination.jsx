import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  PaginationWrapper,
  FirstButton,
  PrevButton,
  NextButton,
  LastButton,
  PageList,
  PageItem
} from "./PaginationStyle";

const Pagination = ({ page, setPage, limit, lastPageIdx = 4 }) => {
  // 마지막 페이지 번호를 통해 배열 초기화
  const pageList = Array.from({ length: lastPageIdx }, (_, i) => i);

  let tempString = "<<";
  useEffect(() => {}, [page]);

  // 
  return (
    <PaginationWrapper row="center" col="center">
      <FirstButton onClick={() => setPage(1)}>{tempString}</FirstButton>
      <PrevButton>{tempString}</PrevButton>
      <PageList>
        {pageList.map((i) => (
          <PageItem key={i + 1} onClick={() => setPage(i + 1)}>
            {i + 1}
          </PageItem>
        ))}
      </PageList>
      <NextButton onClick={() => setPage(lastPageIdx)}>{tempString}</NextButton>
      <LastButton onClick={() => setPage(lastPageIdx)}>{tempString}</LastButton>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  page: PropTypes.number, // 현재 페이지 번호
  setPage: PropTypes.func, // 현재 페이지 업데이트 함수
  limit: PropTypes.number, // 
  lastPageIdx: PropTypes.number // 마지막 페이지 번호
};

export default Pagination;
