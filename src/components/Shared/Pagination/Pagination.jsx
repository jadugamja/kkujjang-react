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
  // const [currPageArr, setCurrPageArr] = useState(Array(lastPageIdx.fill(null)));
  // const [pageList, setPageList] = useState(new Array(lastPageIdx));
  // debugger;
  let tempString = "<<";
  useEffect(() => {}, [page]);

  return (
    <PaginationWrapper row="center" col="center">
      <FirstButton>{tempString}</FirstButton>
      <PrevButton>{tempString}</PrevButton>
      <PageList>
        {pageList.map((i) => (
          <PageItem key={i + 1} onClick={() => setPage(i + 1)}>
            {i + 1}
          </PageItem>
        ))}
      </PageList>
      <NextButton>{tempString}</NextButton>
      <LastButton>{tempString}</LastButton>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  page: PropTypes.number, // 현재 페이지 번호
  setPage: PropTypes.func, // 현재 페이지 업데이트 함수
  limit: PropTypes.number, // 한 페이지에 보여줄 게시물 개수
  lastPageIdx: PropTypes.number // 마지막 페이지 번호
};

export default Pagination;
