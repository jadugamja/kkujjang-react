import styled from "styled-components";
import { useRecoilState } from "recoil";

import { isAnswerCompletedState } from "@/recoil/boardState";
import { FlexBox } from "@/styles/FlexStyle";
import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";
import Header from "@/components/Web/Shared/Layout/Header";
import NoticeManagementList from "@/components/Web/Admin/NoticeManagementList";
import InquiryManagement from "./Admin/InquiryManagement";
import InquiryManagementList from "@/components/Web/Admin/InquiryManagementList";
import ReportManagementList from "@/components/Web/Admin/ReportManagementList";
import UserManagementList from "@/components/Web/Admin/UserManagementList";

const HomeAdmin = () => {
  const [isAnswerCompleted, setIsAnswerCompleted] =
    useRecoilState(isAnswerCompletedState);

  return (
    <ContentWrapper row="center" col="center">
      <WideContent width="114rem" dir="col">
        <Header type="admin" />
        <Main>
          <ListWrapper row="between">
            <NoticeManagementList type="home" />
            <InquiryManagementList
              type="home"
              isAnswerCompleted={isAnswerCompleted}
              setIsAnswerCompleted={setIsAnswerCompleted}
            />
            <ReportManagementList type="home" />
            <UserManagementList type="home" />
          </ListWrapper>
        </Main>
      </WideContent>
    </ContentWrapper>
  );
};

const ListWrapper = styled(FlexBox)``;

export default HomeAdmin;
