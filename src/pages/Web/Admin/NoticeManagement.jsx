import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";
import Header from "@/components/Web/Shared/Layout/Header";
import NoticeManagementList from "@/components/Web/Admin/NoticeManagementList";
import NoticeManagementDetail from "@/components/Web/Admin/NoticeManagementDetail";
import NoticeManagementCreate from "@/components/Web/Admin/NoticeManagementCreate";

const NoticeManagement = () => {
  // 0: is not active, 1: Detail, 2: Create
  const [isAcitveSideContentType, setIsActiveSideContentType] = useState(0);

  const [isEditMode, setIsEditMode] = useState(false);
  const [detailData, setDetailData] = useState({});

  const onDetailOpen = (id) => {
    // 공지사항 게시물 상세 조회 api 호출 (notice/:id)

    // 임시 데이터
    const detail = {
      id: id,
      title: "제목1111",
      content: "본문1111",
      createdAt: "2024-01-01 03:10",
      views: 10
    };

    setIsEditMode(false);
    setDetailData(detail);
    setIsActiveSideContentType(1);
  };

  const onCreateOpen = () => {
    setIsActiveSideContentType(2);
  };

  const renderSideContent = () => {
    switch (isAcitveSideContentType) {
      case 1:
        return (
          <Box>
            <NoticeManagementDetail
              data={detailData}
              isEditMode={isEditMode}
              setIsEditMode={setIsEditMode}
            />
          </Box>
        );
      case 2:
        return (
          <Box>
            <NoticeManagementCreate />
          </Box>
        );
      case 0:
        return "";
    }
  };

  return (
    <ContentWrapper row="center" col="center">
      <WideContent width="80rem" dir="col">
        <Header type="admin" />
        <Main type="admin" row="between">
          <ListWrapper row="between">
            <NoticeManagementList
              onDetailOpen={onDetailOpen}
              onCreateOpen={onCreateOpen}
            />
            {renderSideContent()}
          </ListWrapper>
        </Main>
      </WideContent>
    </ContentWrapper>
  );
};

const ListWrapper = styled(FlexBox)``;

const Box = styled.div`
  width: ${({ type }) => (type === "home" ? "28rem" : "37.5rem")};
  height: ${({ type }) => (type === "home" ? "48.6rem" : "49.6rem")};
  padding: 10px;
  background-color: ${({ type, theme }) =>
    type === "home" ? "#fff" : theme.colors.content};
`;

export default NoticeManagement;
