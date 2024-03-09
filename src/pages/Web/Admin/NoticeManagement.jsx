import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { isActiveSideContentTypeState } from "@/recoil/displayState";
import { itemIdState } from "@/recoil/boardState";
import { FlexBox } from "@/styles/FlexStyle";
import { Box } from "../../../components/Game/Shared/Layout";
import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";
import Header from "@/components/Web/Shared/Layout/Header";
import NoticeManagementList from "@/components/Web/Admin/NoticeManagementList";
import NoticeManagementDetail from "@/components/Web/Admin/NoticeManagementDetail";
import NoticeManagementCreate from "@/components/Web/Admin/NoticeManagementCreate";
import useAxios from "@/hooks/useAxios";

const NoticeManagement = () => {
  // 0: not active, 1: Detail, 2: Create
  const [isAcitveSideContentType, setIsActiveSideContentType] = useRecoilState(
    isActiveSideContentTypeState
  );
  const [itemId, setItemId] = useRecoilState(itemIdState);
  const [isEditMode, setIsEditMode] = useState(false);
  const [detailData, setDetailData] = useState({});
  const [apiConfig, setApiConfig] = useState(null);
  const { response, error, loading, fetchData } = useAxios(apiConfig, false);

  useEffect(() => {
    if (itemId === null) {
      setIsActiveSideContentType(0);
    } else {
      setIsActiveSideContentType(1);
      setApiConfig({
        method: "get",
        url: `/notice/${itemId}`
      });
    }
  }, []);

  useEffect(() => {
    if (apiConfig !== null) {
      fetchData();
    }
  }, [apiConfig]);

  useEffect(() => {
    if (response !== null) {
      setIsEditMode(false);
      setDetailData(response);
      setIsActiveSideContentType(1);
      setItemId(id);
    }
  }, [response]);

  const onDetailOpen = (id) => {
    setApiConfig({
      method: "get",
      url: `/notice/${id}`
    });

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
    setItemId(id);
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
      <WideContent width="82rem" dir="col">
        <Header type="admin-detail" />
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

// const Box = styled.div`
//   width: ${({ type }) => (type === "home" ? "28rem" : "40.5rem")};
//   height: ${({ type }) => (type === "home" ? "48.6rem" : "49.6rem")};
//   padding: 10px;
//   background-color: ${({ type, theme }) =>
//     type === "home" ? "#fff" : theme.colors.content};
// `;

export default NoticeManagement;
