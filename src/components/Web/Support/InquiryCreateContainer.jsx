import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

// ===== components import =====
import BoardTitle from "@/components/Web/Shared/Board/BoardTitle";
import ImageFileUpload from "@/components/Web/Shared/Board/ImageFileUpload";
import Button from "@/components/Web/Shared/Buttons/Button";
import ValidationMessage from "@/components/Web/Shared/Form/ValidationMessage";
import WebModal from "@/components/Web/Shared/Modal/WebModal";

// import { isInquiryAnswerCompletedState } from "@/recoil/boardState";

// ===== style =====
const InquiryCreateWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "fit-content"};
  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
  border-top: ${(props) => props.borderTop || null};
  border-bottom: ${(props) => props.borderBottom || null};
`;

const InquiryCreateBox = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "fit-content"};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
`;

export const InquiryCreateInput = styled.input`
  width: 67.375rem;
  height: 4.688rem;
  border: 2px solid #e5e5e5;
  background-color: transparent;
  font-size: 23px;
`;

export const InquiryCreateTextArea = styled.textarea`
  width: 67.375rem;
  height: 19.625rem;
  border: 2px solid #e5e5e5;
  background-color: transparent;
  font-size: 23px;
`;

// ===== component =====
const InquiryCreateContainer = () => {
  // === ref ===
  // const inputRef = useRef("");
  // const textareaRef = useRef("");

  // === state ===
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);

  // (modal 관련)
  const [createModalOpen, setCreateModalOpen] = useState(false); // 문의 등록 실패 알림 modal state

  // === navigate ===
  const navigate = useNavigate();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const appendFilesToFormData = useCallback((_files) => {
    setFiles(_files);
  }, []);

  const handleClickSaveButton = (e) => {
    e.preventDefault();

    if (title.length < 1 || title.length > 100) {
      setCreateModalOpen(true);
    } else {
      if (content.length < 1 || content.length > 2000) {
        setCreateModalOpen(true);
      } else {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("files", files);

        // 문의 등록 API 호출

        // 프론트엔드 테스트를 위한 백엔드 임시 코드
        const result = true;
        if (!result) {
          setCreateModalOpen(true);
        } else {
          // 문의 등록 성공 시
          navigate(`/inquiry/list`);
        }
      }
    }
  };

  // 목록 버튼 클릭 시
  const handleClickListButton = () => {
    navigate(`/inquiry/list`);
  };

  return (
    <>
      {/* 문의 등록 실패 Modal */}
      {createModalOpen && (
        <WebModal setIsOpen={setCreateModalOpen} hasButton={true}>
          제목 또는 내용을 입력해 주세요.
        </WebModal>
      )}

      <InquiryCreateBox width="75rem" marginLeft="auto" marginRight="auto">
        <BoardTitle type="create" />
        <InquiryCreateWrapper
          dir="col"
          row="center"
          borderTop="5px solid #C2C2C2"
          borderBottom="5px solid #C2C2C2"
          marginTop="10px"
        >
          <InquiryCreateBox marginLeft="auto" marginRight="auto" width="67.375rem">
            {/* 제목, 내용 */}
            <InquiryCreateWrapper
              dir="col"
              height="410px"
              row="between"
              marginTop="10px"
              marginBottom="10px"
            >
              <InquiryCreateInput
                placeholder="제목을 입력하세요."
                onChange={handleChangeTitle}
              />
              <InquiryCreateTextArea
                placeholder="내용을 입력하세요."
                onChange={handleChangeContent}
              />
            </InquiryCreateWrapper>

            {/* 이미지 업로드 */}
            <InquiryCreateWrapper marginTop="10px">
              <ImageFileUpload appendFilesToFormData={appendFilesToFormData} />
              <InquiryCreateWrapper
                dir="col"
                height="90px"
                row="between"
                marginLeft="15px"
              >
                <ValidationMessage message="• 이미지 파일만 첨부 가능합니다." />
                <ValidationMessage message="• 첨부 파일은 최대 3개까지 등록 가능합니다." />
                <ValidationMessage message="• 파일당 최대 10MB의 용량 제한이 있습니다." />
              </InquiryCreateWrapper>
            </InquiryCreateWrapper>

            {/* 버튼 */}
            <InquiryCreateWrapper row="end" marginBottom="10px">
              <InquiryCreateWrapper row="between" width="210px">
                <Button type="smallDark" message="저장" onClick={handleClickSaveButton} />
                <Button type="smallGray" message="목록" onClick={handleClickListButton} />
              </InquiryCreateWrapper>
            </InquiryCreateWrapper>
          </InquiryCreateBox>
        </InquiryCreateWrapper>
      </InquiryCreateBox>
    </>
  );
};

export default InquiryCreateContainer;
