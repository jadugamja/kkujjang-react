import { useState, useRef, useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { isAnswerCompletedState } from "@/recoil/boardState";
import { FlexBox } from "@/styles/FlexStyle";
import {
  faUser,
  faClock,
  faHandHoldingHeart,
  faLocationArrow
} from "@fortawesome/free-solid-svg-icons";
import { SmallDarkButton } from "../Shared/Buttons/ButtonStyle";
import ImageFileUpload from "../Shared/Board/ImageFileUpload";
import { Input } from "../Shared/Form/InputFieldStyle";

const InquiryManagementThread = ({ data }) => {
  const { id, type, threadTitle, nickname, updatedAt, content, file } = data;

  const [isAnswerCompleted, setIsAnswerCompleted] =
    useRecoilState(isAnswerCompletedState);
  const [answer, setAnswer] = useState("");
  const [answerFiles, setAnswerFiles] = useState([]);

  const [replyAnswer, setReplyAnswer] = useState("");
  const [replyAnswerFiles, setReplyAnswerFiles] = useState([]);
  const [replyAnswers, setReplyAnswers] = useState([]);

  const replyAnswerRef = useRef(null);

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

  const replaceToBrTag = (str) => {
    return str.replace(/\n/g, "<br />");
  };

  const appendFilesToFormData = useCallback(
    (_files) => {
      if (!isAnswerCompleted[id]) {
        setAnswerFiles(_files);
      } else {
        setReplyAnswerFiles((prevFiles) => {
          let newFiles = [...prevFiles];
          newFiles = _files ? [...newFiles, _files] : [...newFiles, ""];
          return newFiles;
        });
      }
    },
    [isAnswerCompleted, id]
  );

  const updateAnswerStatus = (id, status) =>
    setIsAnswerCompleted((prevStatus) => ({ ...prevStatus, [id]: status }));

  const onAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const onReplyAnswerChange = (e) => {
    setReplyAnswer(e.target.value);
  };

  const onSubmitAnswer = useCallback(
    (e) => {
      e.preventDefault();

      if (answer === "") {
        alert("답변을 입력하세요");
        return;
      }

      const formData = new FormData();
      formData.append("answer", answer);
      formData.append("file", answerFiles);

      // 문의 답변 등록 api 호출

      // 등록 성공 시
      updateAnswerStatus(id, true);
    },
    [id, updateAnswerStatus]
  );

  const onSubmitReplyAnswer = useCallback(
    (e) => {
      e.preventDefault();

      if (replyAnswer === "") {
        alert("답변을 입력하세요");
        return;
      }

      const formData = new FormData();
      formData.append("answer", replyAnswer);
      replyAnswerFiles.forEach((file, idx) => {
        formData.append(`file[${idx}]`, file);
      });

      // 문의 추가 답변 등록 api 호출

      // 호출 성공 시
      setReplyAnswers((prevReplyAnswers) => [
        ...prevReplyAnswers,
        { text: replyAnswer, file: replyAnswerFiles }
      ]);

      replyAnswerRef.current.value = "";
      setReplyAnswerFiles([]);
    },
    [replyAnswer, replyAnswerFiles]
  );

  return (
    <ThreadWrapper>
      <TypeBar col="center">
        <ServiceTypeIcon icon={faHandHoldingHeart} />
        <span>{getTypeName(type)}</span>
      </TypeBar>

      {/* 질문 */}
      <QuestionWrapper>
        <div>
          <QnAText>Q.</QnAText>
        </div>
        <AnswerInputFieldWrapper>
          <HeaderTextWrapper dir="col">
            <TitleWrapper col="center">
              <TitleText>{threadTitle}</TitleText>
            </TitleWrapper>
            <SubTextWrapper row="between" col="center">
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
            <div>
              {file?.length > 0 && file?.map((f, idx) => <img key={idx} src={f} />)}
            </div>
          </ContentWrapper>
        </AnswerInputFieldWrapper>
      </QuestionWrapper>

      {/* 답변 */}
      <AnswerWrapper>
        <div>
          <QnAText>A.</QnAText>
        </div>
        {!isAnswerCompleted[id] ? (
          <AnswerInputFieldWrapper>
            <StyledTextarea placeholder="답변을 입력하세요." onChange={onAnswerChange} />
            <AttachmentWrapper row="between" col="center">
              <Width100>
                <ImageFileUpload
                  width="7rem"
                  height="2.9rem"
                  mode={1}
                  appendFilesToFormData={appendFilesToFormData}
                />
              </Width100>
            </AttachmentWrapper>
            <ButtonWrapper row="end">
              <SaveButton width="7rem" onClick={onSubmitAnswer}>
                저장
              </SaveButton>
            </ButtonWrapper>
          </AnswerInputFieldWrapper>
        ) : (
          <AnswerInputFieldWrapper>
            <Width100 marginTop="10px">
              <AnswerText
                as="div"
                dangerouslySetInnerHTML={{ __html: replaceToBrTag(answer) }}
              />
            </Width100>
            <AttachedImgWrapper>
              {answerFiles.length > 0 &&
                answerFiles?.map((file, idx) => (
                  <AttachedImg key={idx} src={URL.createObjectURL(file)} alt="첨부파일" />
                ))}
            </AttachedImgWrapper>

            {/* 작성 시간 */}
            <SubTextWrapper row="end" col="center">
              <div>
                <StyledIcon icon={faClock} />
                <SubText>{updatedAt}</SubText>
              </div>
            </SubTextWrapper>
          </AnswerInputFieldWrapper>
        )}
      </AnswerWrapper>
      {isAnswerCompleted[id] && replyAnswers.length <= 0 && (
        <div>
          <InputWrapper col="center">
            <StyledInput
              type="text"
              placeholder="추가 답변을 입력하세요."
              onChange={(e) => onReplyAnswerChange(e)}
              ref={replyAnswerRef}
            />
            <ReplySubmitButton value="전송" onClick={(e) => onSubmitReplyAnswer(e)}>
              <SubmitIcon icon={faLocationArrow} />
            </ReplySubmitButton>
          </InputWrapper>
          <AttachmentWrapper row="between" col="center" marginTop="5px">
            <Width100>
              <ImageFileUpload
                width="7rem"
                height="2.9rem"
                mode={1}
                appendFilesToFormData={appendFilesToFormData}
              />
            </Width100>
          </AttachmentWrapper>
        </div>
      )}
      {isAnswerCompleted[id] &&
        replyAnswers.length > 0 &&
        replyAnswers?.map((_replyAnswer, idx) => (
          <AnswerWrapper key={idx}>
            <div>
              <QnAText>A.</QnAText>
            </div>
            <Width100 marginTop="10px">
              <AnswerText>{_replyAnswer.text}</AnswerText>
              {_replyAnswer.file.length > 0 &&
                _replyAnswer.file?.map((file, idx) => (
                  <AttachedImgWrapper key={idx}>
                    <AttachedImg src={URL.createObjectURL(file[idx])} alt="첨부파일" />
                  </AttachedImgWrapper>
                ))}
            </Width100>
          </AnswerWrapper>
        ))}
      {isAnswerCompleted[id] && replyAnswers.length > 0 && (
        <FlexWrapper dir="col">
          <InputWrapper col="center">
            <StyledInput
              type="text"
              placeholder="추가 답변을 입력하세요."
              onChange={(e) => onReplyAnswerChange(e)}
              ref={replyAnswerRef}
            />
            <ReplySubmitButton value="전송" onClick={(e) => onSubmitReplyAnswer(e)}>
              <SubmitIcon icon={faLocationArrow} />
            </ReplySubmitButton>
          </InputWrapper>
          <AttachmentWrapper dir="col" row="between" col="center" height="none">
            <Width100>
              <ImageFileUpload
                width="7rem"
                height="2.9rem"
                mode={1}
                appendFilesToFormData={appendFilesToFormData}
              />
            </Width100>
          </AttachmentWrapper>
        </FlexWrapper>
      )}
    </ThreadWrapper>
  );
};

InquiryManagementThread.propTypes = {
  data: PropTypes.object,
  isAnswerCompleted: PropTypes.bool,
  setIsAnswerCompleted: PropTypes.func
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
const QuestionWrapper = styled(FlexBox)`
  width: 100%;
  margin-top: 2.75rem;

  & > * + * {
    margin-left: 0.75rem;
  }
`;

const HeaderTextWrapper = styled(FlexBox)`
  margin-top: 0.5rem;
  margin-bottom: 1.2rem;
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
  margin-top: 4px;

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
const AnswerWrapper = styled(FlexBox)`
  margin-top: 1rem;

  & > * + * {
    margin-left: 0.75rem;
  }
`;

const FlexWrapper = styled(FlexBox)`
  margin-top: 1rem;
`;

const AnswerInputFieldWrapper = styled.div`
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  background-color: transparent;
  border: 1px solid #ccc;
  width: 100%;
  height: 12.5rem;
  margin-top: 0.5rem;
  padding: 10px 12px;
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

const AttachmentWrapper = styled(FlexBox)`
  margin-top: ${({ marginTop }) => marginTop || "6px"};
  height: ${({ height }) => height || "3rem"};
  border: 1px solid #ccc;
  overflow-x: auto;
`;

const Width100 = styled(FlexBox)`
  width: 100%;
  margin-top: ${({ marginTop }) => marginTop || ""};
`;

const AnswerText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

const AttachedImgWrapper = styled.div``;

// 이미지 크기 임시 고정
const AttachedImg = styled.img`
  width: 100px;
  height: 100px;
`;

const InputWrapper = styled(FlexBox)`
  width: 100%;
  margin-top: 1rem;
`;
const StyledInput = styled(Input)`
  width: calc(100% - 3.75rem);
  height: 3rem;
  margin: 0;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.xxxs};
  font-weight: 400;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }
`;

const ReplySubmitButton = styled.button`
  flex: 1;
  height: 3rem;
  background-color: transparent;
  border: 1px solid #ccc;
`;

const SubmitIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  transform: rotate(43deg);
`;

// ========== //Answer ==========

const ButtonWrapper = styled(FlexBox)`
  margin-top: 1rem;
`;

const SaveButton = styled(SmallDarkButton)``;

export default InquiryManagementThread;
