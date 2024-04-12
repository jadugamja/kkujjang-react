import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";

import useAxios from "@/hooks/useAxios";
import { isActiveSideContentTypeState } from "@/recoil/displayState";
import { itemIdState } from "@/recoil/boardState";
import { FlexBox as ListWrapper } from "@/styles/FlexStyle";
import { Box } from "@/components/Game/Shared/Layout";
import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";
import Header from "@/components/Web/Shared/Layout/Header";
import ReportManagementList from "@/components/Web/Admin/ReportManagementList";
import ReportManagementDetail from "@/components/Web/Admin/ReportManagementDetail";

const ReportManagement = () => {
  const [isAcitveSideContentType, setIsActiveSideContentType] = useRecoilState(
    isActiveSideContentTypeState
  );
  const [itemId, setItemId] = useRecoilState(itemIdState);
  const [cookies] = useCookies(["sessionId"]);
  const [reportData, setReportData] = useState(null);
  const [apiConfig, setApiConfig] = useState(null);
  const { response, loading, error, fetchData } = useAxios(apiConfig, false);

  useEffect(() => {
    if (itemId === null) {
      setIsActiveSideContentType(0);
    } else {
      setApiConfig({
        method: "get",
        url: `/report/${itemId}`,
        headers: { sessionId: cookies.sessionId }
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
      const { isOffensive, isCheating, isPoorManner, note, ...rest } = response.result;
      setReportData({
        ...rest,
        types: { isOffensive, isCheating, isPoorManner, note }
      });
    }
  }, [response]);

  useEffect(() => {
    if (reportData !== null) {
      setIsActiveSideContentType(1);
    }
  }, [reportData]);

  const onSideOpen = (id) => {
    setItemId(id);
    setApiConfig({
      method: "get",
      url: `/report/${id}`,
      headers: { sessionId: cookies.sessionId }
    });
  };

  return (
    <ContentWrapper row="center" col="center">
      <WideContent width="82rem" dir="col">
        <Header type="admin-detail" />
        <Main type="admin" row="between">
          <ListWrapper row="between">
            <ReportManagementList onSideOpen={onSideOpen} />
            {isAcitveSideContentType === 1 && (
              <Box>
                <ReportManagementDetail data={reportData} />
              </Box>
            )}
          </ListWrapper>
        </Main>
      </WideContent>
    </ContentWrapper>
  );
};

export default ReportManagement;
