import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
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
  const [cookies] = useCookies(["sessionId"]);
  const [questionData, setQuestionData] = useState(null);
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
        url: `/inquiry/${itemId}?page=1`,
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

  useEffect(() => {
    if (response !== null) {
      setIsAnswerCompleted(!response.result.needAnswer);
      // setIsAnswerCompleted((prevState) => ({
      //   ...prevState,
      //   [response.result.threadId]: !response.result.needAnswer
      // }));
      setQuestionData(response.result);
    }
  }, [response]);

  useEffect(() => {
    if (questionData !== null) {
      setIsActiveSideContentType(1);
    }
  }, [questionData]);

  const onThreadOpen = (id) => {
    setApiConfig({
      method: "get",
      url: `/inquiry/${id}?page=1`,
      headers: {
        sessionId: cookies.sessionId
      }
    });
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

export default InquiryManagement;
