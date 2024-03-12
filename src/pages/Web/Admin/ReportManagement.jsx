import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";

import { isActiveSideContentTypeState } from "@/recoil/displayState";
import { itemIdState } from "@/recoil/boardState";
import ReportManagementList from "@/components/Web/Admin/ReportManagementList";
import ReportManagementDetail from "@/components/Web/Admin/ReportManagementDetail";
import Header from "@/components/Web/Shared/Layout/Header";
import { FlexBox as ListWrapper } from "@/styles/FlexStyle";
import { Box } from "@/components/Game/Shared/Layout";
import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";
import useAxios from "@/hooks/useAxios";

const ReportManagement = () => {
  const [isAcitveSideContentType, setIsActiveSideContentType] = useRecoilState(
    isActiveSideContentTypeState
  );
  const [itemId, setItemId] = useRecoilState(itemIdState);
  const [cookies] = useCookies(["sessionId"]);
  const [reportData, setReportData] = useState();
  const [apiConfig, setApiConfig] = useState(null);
  const { response, loading, error, fetchData } = useAxios(apiConfig, false);

  useEffect(() => {
    if (itemId === null) {
      setIsActiveSideContentType(0);
    } else {
      setIsActiveSideContentType(1);
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
      const { isOffensive, isCheating, isPoorManner, ...rest } = response;
      setReportData({
        ...rest,
        types: { isOffensive, isCheating, isPoorManner }
      });
      setIsActiveSideContentType(1);
      setItemId(response.id);
    }
  }, [response]);

  const onSideOpen = (id) => {
    // 신고 상세 조회 api 호출 (report/:reportId)
    setApiConfig({
      method: "get",
      url: `/report/${id}`,
      headers: { sessionId: cookies.sessionId }
    });

    const reportRes = {
      id: 5,
      isOffensive: true,
      isCheating: false,
      isPoorManner: true,
      note: "욕설 사용",
      createdAt: "yyyy-MM-dd hh:mm:ss",
      reporterId: 5,
      reporterNickname: "someNickname#5",
      reporteeId: 4,
      reporteeNickname: "someNickname#4"
    };

    const { isOffensive, isCheating, isPoorManner, ...rest } = reportRes;
    setReportData({
      ...rest,
      types: { isOffensive, isCheating, isPoorManner }
    });
    setIsActiveSideContentType(1);
    setItemId(id);
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
