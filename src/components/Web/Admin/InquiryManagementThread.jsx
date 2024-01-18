import { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FlexBox } from "@/styles/FlexStyle";
import {
  faUser,
  faClock,
  faHandHoldingHeart,
  faX
} from "@fortawesome/free-solid-svg-icons";
import { SmallDarkButton } from "../Shared/Buttons/ButtonStyle";
import ImageFileUpload from "../Shared/Board/ImageFileUpload";

const InquiryManagementThread = ({ data }) => {
  const { type, threadTitle, nickname, updatedAt, content } = data;
  const [files, setFiles] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const getTypeName = (type) => {
    switch (type) {
      case 0:
        return "서비스 문의";
      case 1:
        return "기술 문의";
      case 2:
        return "계정 문의";
      case 3:
        return "단어 추가 문의";
    }
  };

  const appendFilesToFormData = (_files) => setSelectedFiles(_files);

  useEffect(() => {
    setFiles(selectedFiles);
  }, [selectedFiles]);

  return (
    <ThreadWrapper>
      <TypeBar col="center">
        <ServiceTypeIcon icon={faHandHoldingHeart} />
        <span>{getTypeName(type)}</span>
      </TypeBar>
      <div>
        <HeaderTextWrapper dir="col">
          <TitleWrapper col="center">
            <QnAText>Q.</QnAText>
            <TitleText>{threadTitle}</TitleText>
          </TitleWrapper>
          <SubTextWrapper col="center">
            <div>
              <StyledIcon icon={faUser} />
              <SubText>{nickname}</SubText>
            </div>
            <div>
              <StyledIcon icon={faClock} />
              <SubText>{updatedAt}</SubText>
            </div>
          </SubTextWrapper>
        </HeaderTextWrapper>
        <ContentWrapper>
          <div>
            <ContentText>{content}</ContentText>
          </div>
        </ContentWrapper>
      </div>
      <AnswerWrapper>
        <QnAText>A.</QnAText>
        <StyledTextarea placeholder="답변을 입력하세요." />
        <AttachmentWrapper row="between" col="center">
          <AttachmentText>첨부파일</AttachmentText>
          <Width82>
            <ImageFileUpload
              width="7rem"
              height="3rem"
              mode={1}
              appendFilesToFormData={appendFilesToFormData}
            />
          </Width82>
        </AttachmentWrapper>
      </AnswerWrapper>
      <ButtonWrapper row="end">
        <SaveButton width="7rem">저장</SaveButton>
      </ButtonWrapper>
    </ThreadWrapper>
  );
};

InquiryManagementThread.propTypes = {
  data: PropTypes.object
};

const ThreadWrapper = styled.div`
  margin: 0 14px;
`;

const TypeBar = styled(FlexBox)`
  position: relative;
  top: 30px;
  width: calc(100% + 3rem);
  margin-left: -1.5rem;
  padding-left: 1.5rem;
  height: 2rem;
  background-color: #00000020;
  font-weight: 700;

  & > * + * {
    margin-left: 10px;
  }
`;

// ========== Question ==========
const HeaderTextWrapper = styled(FlexBox)`
  margin: 2.75rem 0 1.2rem;
`;

const TitleWrapper = styled(FlexBox)`
  & > * + * {
    margin-left: 10px;
  }
`;

const QnAText = styled.span`
  font-family: "Pretendard Variable";
  font-size: 53px;
  font-weight: 800;
`;

const TitleText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

const ContentText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 500;
`;

const SubTextWrapper = styled(FlexBox)`
  margin: 4px 0px 0 6px;

  & > * + * {
    margin-left: 30px;
  }
`;

const SubText = styled.span`
  margin-left: 9px;
  font-size: 16px;
  color: #a7a7a7;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 16px;
  color: #a7a7a7;
`;

const ServiceTypeIcon = styled(StyledIcon)`
  color: ${({ theme }) => theme.colors.text.main};
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: fit-content;
`;
// ========== //Question ==========

// ========== Answer ==========
const AnswerWrapper = styled.div`
  margin-top: 1rem;
`;

const StyledTextarea = styled.textarea`
  background-color: transparent;
  border: 1px solid #ccc;
  width: 100%;
  height: 12.5rem;
  padding: 10px 12px;
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

const AttachmentWrapper = styled(FlexBox)`
  margin-top: -6px;
  height: 3rem;
  border: 1px solid #ccc;
`;

const AttachmentText = styled.span`
  flex: 1;
  text-align: center;
`;

const Width82 = styled(FlexBox)`
  width: 82%;
  border-left: 1px solid #ccc;
`;

// ========== //Answer ==========

const ButtonWrapper = styled(FlexBox)`
  margin-top: 1rem;
`;

const SaveButton = styled(SmallDarkButton)``;

export default InquiryManagementThread;
