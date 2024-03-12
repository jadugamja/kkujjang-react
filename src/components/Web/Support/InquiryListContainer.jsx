import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

// ===== hooks import =====
import useAxios from "@/hooks/useAxios";

// ===== components import =====
import BoardTitle from "@/components/Web/Shared/Board/BoardTitle";
import BoardItem from "@/components/Web/Shared/Board/BoardItem";
import Pagination from "@/components/Web/Shared/Board/Pagination";
import Button from "@/components/Web/Shared/Buttons/Button";
import Thread from "@/components/Web/Shared/Board/Thread";

// ===== style =====
const InquiryWrapper = styled(FlexBox)`
  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
`;

const InquiryListBox = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "fit-content"};
  min-height: ${(props) => props.minHeight || null};
  border-top: ${(props) => props.borderTop || null};
  border-bottom: ${(props) => props.borderBottom || null};
  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
`;

// ===== component =====
const InquiryListContainer = () => {
  // === state ===
  const [listData, setListData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [lastPageIdx, setLastPageIdx] = useState(30);
  const [selectedInquiryId, setSelectedInquiryId] = useState(null);
  // (api 관련)
  const [apiConfig, setApiConfig] = useState({
    method: "get",
    url: `/inquiry/list?page=${currPage}`
  });
  const { response, error, loading, fetchData } = useAxios(apiConfig);

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [apiConfig]);

  useEffect(() => {
    if (response !== null) {
      setLastPageIdx(response.lastPage === 0 ? 1 : response.lastPage);
      setListData(response.list);
    } else {
      setLastPageIdx(1);
      setListData([]);
    }
  }, [response]);

  useEffect(() => {
    setApiConfig({
      ...apiConfig,
      url: `/inquiry/list?page=${currPage}`
    });
  }, [currPage]);

  const handleMoveCreate = () => {
    navigate(`/inquiry/create`);
  };

  const handleThreadOpen = (inquiryId) => {
    setSelectedInquiryId((prevId) => (prevId === inquiryId ? null : inquiryId));
  };

  return (
    <InquiryListBox width="75rem" marginLeft="auto" marginRight="auto">
      <BoardTitle type="inquiry" />

      {/* 버튼 */}
      <InquiryWrapper row="end" marginBottom="20px">
        <Button type="smallDark" message="문의 쓰기" onClick={handleMoveCreate} />
      </InquiryWrapper>

      {/* 문의 목록 */}
      <InquiryListBox minHeight="480px" borderTop="5px solid #C2C2C2">
        <BoardItem boardType="header" />
        {listData?.map((listData, index) => (
          <div key={index}>
            <BoardItem
              boardType="inquiry"
              id={listData.id}
              data={listData}
              onClick={() => handleThreadOpen(listData.id)}
            />
            {selectedInquiryId === listData.id && (
              <Thread inquiryId={selectedInquiryId} />
            )}
          </div>
        ))}
      </InquiryListBox>

      {/* 페이지네이션 */}
      <InquiryWrapper marginTop="25px">
        <Pagination
          currPage={currPage}
          setCurrPage={setCurrPage}
          lastPageIdx={lastPageIdx}
        />
      </InquiryWrapper>
    </InquiryListBox>
  );
};

InquiryListContainer.propTypes = {};

export default InquiryListContainer;
