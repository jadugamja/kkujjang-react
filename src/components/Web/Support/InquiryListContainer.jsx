import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

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

  // const [isAnswer, setIsAnswer] = useState(false);
  const [selectedInquiryId, setSelectedInquiryId] = useState(null);

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    // 문의 목록 조회 api 호출

    // 임시 데이터
    const tmp = [
      {
        id: 0,
        type: 1,
        title: "제목1",
        createdAt: "2024-01-01",
        needsAnswer: false
      },
      {
        id: 1,
        type: 2,
        title: "제목2",
        createdAt: "2024-01-01",
        needsAnswer: false
      },
      {
        id: 2,
        type: 3,
        title: "제목3",
        createdAt: "2024-01-01",
        needsAnswer: false
      },
      {
        id: 3,
        type: 3,
        title: "제목4",
        createdAt: "2024-01-01",
        needsAnswer: false
      },
      {
        id: 4,
        type: 1,
        title: "제목5",
        createdAt: "2024-01-01",
        needsAnswer: false
      }
    ];

    if (tmp.length === 0) {
      setListData([]);
    } else {
      setListData(tmp);
    }
  }, []);

  // const updateIsAnswer = (value) => {
  //   setIsAnswer(value);
  //   console.log("문의", isAnswer);
  // };

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
