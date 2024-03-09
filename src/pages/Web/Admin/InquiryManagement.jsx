import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import PropTypes from "prop-types";

import { isActiveSideContentTypeState } from "@/recoil/displayState";
import { itemIdState } from "@/recoil/boardState";
import { isAnswerCompletedState } from "@/recoil/boardState";
import InquiryManagementList from "@/components/Web/Admin/InquiryManagementList";
import InquiryManagementThread from "@/components/Web/Admin/InquiryManagementThread";
import Header from "@/components/Web/Shared/Layout/Header";
import { FlexBox } from "@/styles/FlexStyle";
import { Box } from "../../../components/Game/Shared/Layout";
import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";
import useAxios from "@/hooks/useAxios";

const InquiryManagement = ({ type }) => {
  // 0: is not active, 1: active
  const [isAcitveSideContentType, setIsActiveSideContentType] = useRecoilState(
    isActiveSideContentTypeState
  );
  const [itemId, setItemId] = useRecoilState(itemIdState);
  const [questionData, setQuestionData] = useState({});
  const [isAnswerCompleted, setIsAnswerCompleted] =
    useRecoilState(isAnswerCompletedState);
  const [apiConfig, setApiConfig] = useState(null);
  const { response, loading, error, fetchData } = useAxios(apiConfig, false);

  useEffect(() => {
    if (itemId === null) {
      setIsActiveSideContentType(0);
    } else {
      setIsActiveSideContentType(1);
      setApiConfig({
        method: "get",
        url: `/inquiry/${itemId}`
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
      isAnswerCompleted((prevState) => ({
        ...prevState,
        [response.threadId]: !response.needsAnswer
      }));
      setQuestionData(response);
      setIsActiveSideContentType(1);
      setItemId(response.threadId);
    }
  }, [response]);

  const onThreadOpen = (id) => {
    // 문의 스레드 상세 조회 api 호출 (inquirys/:id)
    setApiConfig({
      method: "get",
      url: `/inquiry/${id}`
    });

    // 임시 데이터
    const thread = {
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

    setQuestionData(thread);
    setIsAnswerCompleted((prevState) => ({ ...prevState, [id]: !thread.needAnswer }));
    setIsActiveSideContentType(1);
    setItemId(thread.threadId);
  };

  return (
    <ContentWrapper row="center" col="center">
      <WideContent width="82rem" dir="col">
        <Header type="admin-detail" />
        <Main type="admin" row="between">
          <ListWrapper row="between">
            <InquiryManagementList
              type={type}
              onThreadOpen={onThreadOpen}
              isAnswerCompleted={isAnswerCompleted}
              setIsAnswerCompleted={setIsAnswerCompleted}
            />
            {isAcitveSideContentType === 1 && (
              <Box>
                <InquiryManagementThread
                  data={questionData}
                  isAnswerCompleted={isAnswerCompleted}
                  setIsAnswerCompleted={setIsAnswerCompleted}
                />
              </Box>
            )}
          </ListWrapper>
        </Main>
      </WideContent>
    </ContentWrapper>
  );
};

InquiryManagement.propTypes = {
  type: PropTypes.string
};

const ListWrapper = styled(FlexBox)``;

// const Box = styled.div`
//   width: ${({ type }) => (type === "home" ? "28rem" : "37.5rem")};
//   height: ${({ type }) => (type === "home" ? "48.6rem" : "49.6rem")};
//   padding: 10px;
//   background-color: ${({ type, theme }) =>
//     type === "home" ? "#fff" : theme.colors.content};
//   overflow-y: auto;
// `;

export default InquiryManagement;
