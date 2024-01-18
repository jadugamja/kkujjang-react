import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { isAcitveSideContentTypeState } from "../../../recoil/displayState";
import { FlexBox } from "@/styles/FlexStyle";
import Header from "@/components/Web/Shared/Layout/Header";
import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";
import InquiryManagementList from "@/components/Web/Admin/InquiryManagementList";
import InquiryManagementThread from "../../../components/Web/Admin/InquiryManagementThread";

const InquiryManagement = () => {
  // 0: is not active, 1: active
  const [isAcitveSideContentType, setIsActiveSideContentType] = useRecoilState(
    isAcitveSideContentTypeState
  );
  const [questionData, setQuestionData] = useState({});

  const onThreadOpen = (id) => {
    // 문의 스레드 상세 조회 api 호출 (inquirys/:id)

    // 임시 데이터
    const question = {
      needAnswer: false,
      threadId: "252b1d9b-3e83-4951-983e-59932f625222",
      authorId: 86,
      type: 5,
      threadTitle: "렉 걸립니다",
      nickname: "스테이지어스#86",
      updatedAt: "2024-01-15 16:44:44",
      lastPage: 1,
      list: [
        {
          isAnswer: false,
          authorId: 86,
          content: "해결해주세요",
          file: [
            "https://backend15.s3.ap-northeast-2.amazonaws.com/thread/252b1d9b-3e83-4951-983e-59932f625222/1705304608063-1.png",
            "https://backend15.s3.ap-northeast-2.amazonaws.com/thread/252b1d9b-3e83-4951-983e-59932f625222/1705304608064-2.png"
          ]
        },
        {
          isAnswer: false,
          authorId: 86,
          content: "사진 첨부합니다",
          file: [
            "https://backend15.s3.ap-northeast-2.amazonaws.com/thread/252b1d9b-3e83-4951-983e-59932f625222/1705304642997-1.png",
            "https://backend15.s3.ap-northeast-2.amazonaws.com/thread/252b1d9b-3e83-4951-983e-59932f625222/1705304642997-2.png"
          ]
        },
        {
          isAnswer: true,
          authorId: 87,
          content: "운영자입니다\n제보감사합니다",
          file: null
        }
      ]
    };

    const thread = {
      type: 0,
      threadTitle: "렉 걸립니다",
      nickname: "스테이지어스#86",
      updatedAt: "2024-01-15 16:44:44",
      content: "해결해주세요",
      file: [
        "https://backend15.s3.ap-northeast-2.amazonaws.com/thread/252b1d9b-3e83-4951-983e-59932f625222/1705304608063-1.png",
        "https://backend15.s3.ap-northeast-2.amazonaws.com/thread/252b1d9b-3e83-4951-983e-59932f625222/1705304608064-2.png"
      ]
    };

    setQuestionData(thread);
    setIsActiveSideContentType(1);
  };

  return (
    <ContentWrapper row="center" col="center">
      <WideContent width="80rem" dir="col">
        <Header type="admin" />
        <Main type="admin" row="between">
          <ListWrapper row="between">
            <InquiryManagementList onThreadOpen={onThreadOpen} />
            {isAcitveSideContentType === 1 && (
              <Box>
                <InquiryManagementThread data={questionData} />
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
`;

export default InquiryManagement;
