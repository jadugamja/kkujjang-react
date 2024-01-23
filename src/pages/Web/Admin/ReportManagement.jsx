import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { isActiveSideContentTypeState } from "@/recoil/displayState";
import { itemIdState } from "@/recoil/boardState";
import ReportManagementList from "@/components/Web/Admin/ReportManagementList";
import ReportManagementDetail from "@/components/Web/Admin/ReportManagementDetail";
import Header from "@/components/Web/Shared/Layout/Header";
import { FlexBox } from "@/styles/FlexStyle";
import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";

const ReportManagement = () => {
  const [isAcitveSideContentType, setIsActiveSideContentType] = useRecoilState(
    isActiveSideContentTypeState
  );
  const [itemId, setItemId] = useRecoilState(itemIdState);
  const [reportData, setReportData] = useState();

  const onSideOpen = (id) => {
    // 신고 상세 조회 api 호출 (report/:reportId)

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

  useEffect(() => {
    if (itemId !== null) {
      const reportRes = {
        id: itemId,
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
    }
  }, [itemId]);

  useEffect(() => {
    if (itemId === null) {
      setIsActiveSideContentType(0);
    }
  }, []);

  return (
    <ContentWrapper row="center" col="center">
      <WideContent width="80rem" dir="col">
        <Header type="admin" />
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

const ListWrapper = styled(FlexBox)``;

const Box = styled.div`
  width: ${({ type }) => (type === "home" ? "28rem" : "37.5rem")};
  height: ${({ type }) => (type === "home" ? "48.6rem" : "49.6rem")};
  padding: 10px;
  background-color: ${({ type, theme }) =>
    type === "home" ? "#fff" : theme.colors.content};
  overflow-y: auto;
`;

export default ReportManagement;
