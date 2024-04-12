import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import { isActiveSideContentTypeState } from "@/recoil/displayState";
import { itemIdState, selectedBoardItemIdState } from "@/recoil/boardState";
import { FlexBox as ListWrapper } from "@/styles/FlexStyle";
import { Box } from "../../../components/Game/Shared/Layout";
import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";
import Header from "@/components/Web/Shared/Layout/Header";
import NoticeManagementList from "@/components/Web/Admin/NoticeManagementList";
import NoticeManagementDetail from "@/components/Web/Admin/NoticeManagementDetail";
import NoticeManagementCreate from "@/components/Web/Admin/NoticeManagementCreate";
import useAxios from "@/hooks/useAxios";

const NoticeManagement = () => {
  const [cookies] = useCookies(["sessionId"]);
  const navigate = useNavigate();
  // 0: not active, 1: Detail, 2: Create
  const [isAcitveSideContentType, setIsActiveSideContentType] = useRecoilState(
    isActiveSideContentTypeState
  );
  const [itemId, setItemId] = useRecoilState(itemIdState);
  const setSelectedBoardItemId = useSetRecoilState(selectedBoardItemIdState);
  const [isEditMode, setIsEditMode] = useState(false);
  const [detailData, setDetailData] = useState({});
  const [apiConfig, setApiConfig] = useState(null);
  const { response, error, loading, fetchData } = useAxios(apiConfig, false);

  useEffect(() => {
    if (!cookies.sessionId) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (itemId === null) {
      setIsActiveSideContentType(0);
    } else {
      setIsActiveSideContentType(1);
      setApiConfig({
        method: "get",
        url: `/notice/${itemId}`,
        headers: {
          sessionId: cookies.sessionId
        }
      });
    }
  }, []);

  useEffect(() => {
    if (apiConfig !== null) {
      fetchData();
    }
  }, [apiConfig]);

  // 게시물 상세 조회
  useEffect(() => {
    if (response !== null) {
      setIsEditMode(false);
      setDetailData(response.result);
      setIsActiveSideContentType(1);
      setItemId(response.result.id);
    }
  }, [response]);

  const onDetailOpen = (id) => {
    setApiConfig({
      method: "get",
      url: `/notice/${id}`,
      headers: {
        sessionId: cookies.sessionId
      }
    });
  };

  const onCreateOpen = () => {
    setSelectedBoardItemId(null);
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
              fetchDetail={fetchData}
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

export default NoticeManagement;
