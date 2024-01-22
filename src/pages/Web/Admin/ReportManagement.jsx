import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { isAcitveSideContentTypeState } from "@/recoil/displayState";
import ReportManagementList from "@/components/Web/Admin/ReportManagementList";
import ReportManagementDetail from "@/components/Web/Admin/ReportManagementDetail";
import Header from "@/components/Web/Shared/Layout/Header";
import { FlexBox } from "@/styles/FlexStyle";
import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";

const ReportManagement = () => {
  const [isAcitveSideContentType, setIsActiveSideContentType] = useRecoilState(
    isAcitveSideContentTypeState
  );
  const [reportData, setReportData] = useState();
  const [gameroomData, setGameroomData] = useState();
  const [gameroomChatData, setGameroomChatData] = useState();

  const onSideOpen = (id) => {
    // 신고 상세 조회 api 호출 (report/:reportId)
    // 신고 게임방 로그 조회 api 호출 (room/:roomId)
    // 신고 게임방 채팅 내역 조회 api 호출 (chat/search)

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

    const roomRes = {
      roomId: "fd3a5ebc-9043-4fd9-9ccf-62db80a5dd3c",
      users: [
        {
          id: 5,
          nickname: "김스테이지어스#5"
        },
        {
          id: 3,
          nickname: "김스테이지어스#3"
        }
      ],
      createdAt: "yyyy-MM-dd hh:mm:ss",
      expiredAt: "yyyy-MM-dd hh:mm:ss",
      history: [
        {
          keyword: "리어카",
          createdAt: "yyyy-MM-dd hh:mm:ss"
        }
      ]
    };

    const chatRes = [
      {
        username: 3,
        nickname: "김스테이지어스#3",
        createdAt: "yyyy-MM-dd hh:mm:ss",
        content: "채팅 테스트 11111"
      },
      {
        username: 3,
        nickname: "김스테이지어스#3",
        createdAt: "yyyy-MM-dd hh:mm:ss",
        content: "채팅 테스트 2222"
      },
      {
        username: 3,
        nickname: "김스테이지어스#3",
        createdAt: "yyyy-MM-dd hh:mm:ss",
        content: "채팅 테스트 333"
      },
      {
        username: 3,
        nickname: "김스테이지어스#3",
        createdAt: "yyyy-MM-dd hh:mm:ss",
        content: "채팅 테스트 444"
      },
      {
        username: 3,
        nickname: "김스테이지어스#3",
        createdAt: "yyyy-MM-dd hh:mm:ss",
        content: "채팅 테스트 555"
      },
      {
        username: 3,
        nickname: "김스테이지어스#3",
        createdAt: "yyyy-MM-dd hh:mm:ss",
        content: "채팅 테스트 6666"
      },
      {
        username: 3,
        nickname: "김스테이지어스#3",
        createdAt: "yyyy-MM-dd hh:mm:ss",
        content: "채팅 테스트 777"
      }
    ];

    setIsActiveSideContentType(1);
  };

  useEffect(() => {
    setIsActiveSideContentType(0);
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
