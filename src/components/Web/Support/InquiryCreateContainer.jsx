import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

// ===== hooks import =====
import useAxios from "@/hooks/useAxios";

// ===== components import =====
import BoardTitle from "@/components/Web/Shared/Board/BoardTitle";
import ImageFileUpload from "@/components/Web/Shared/Board/ImageFileUpload";
import Button from "@/components/Web/Shared/Buttons/Button";
import ValidationMessage from "@/components/Web/Shared/Form/ValidationMessage";
import WebModal from "@/components/Web/Shared/Modal/WebModal";

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
  width: 57rem;
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

export const InquirySelect = styled.select`
  border: 2px solid #e5e5e5;
  background-color: transparent;
  color: #767676;
  font-size: 14px;
`;

export const InquiryOption = styled.option`
  background-color: transparent;
`;

// ===== component =====
const InquiryCreateContainer = () => {
  // === ref ===
  const titleRef = useRef("");
  const contentRef = useRef("");
  const selectRef = useRef("");

  // === state ===
  const [files, setFiles] = useState([]);
  // (modal 관련)
  const [createModalOpen, setCreateModalOpen] = useState(false); // 문의 등록 실패 알림 modal state
  // (api 관련)
  const [apiConfig, setApiConfig] = useState(null);
  const { response, error, loading, fetchData } = useAxios(apiConfig, false);

  // === navigate ===
  const navigate = useNavigate();

  // === cookie ===
  const [cookies] = useCookies(["sessionId"]);

  useEffect(() => {
    if (apiConfig !== null) {
      fetchData();
    }
  }, [apiConfig]);

  useEffect(() => {
    if (response !== null) {
      if (apiConfig?.url.startsWith("/inquiry/new")) {
        navigate(`/inquiry/list`);
      }
    } else {
      if (apiConfig?.url.startsWith("/inquiry/new")) {
        setCreateModalOpen(true);
      }
    }
  }, [response, error]);

  const appendFilesToFormData = (_files) => {
    if (_files) {
      setFiles(_files);
    } else {
      setFiles([]);
    }
  };

  const handleClickSaveButton = () => {
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const type = selectRef.current.value;

    if (title.length < 1 || title.length > 100 || type == -1) {
      setCreateModalOpen(true);
    } else {
      if (content.length < 1 || content.length > 2000) {
        setCreateModalOpen(true);
      } else {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        files.forEach((file) => {
          formData.append("files", file);
        });
        formData.append("type", type);

        // 문의 등록 API 호출
        setApiConfig({
          method: "post",
          url: "/inquiry/new",
          headers: {
            "Content-Type": "multipart/form-data",
            sessionId: cookies.sessionId
          },
          data: formData
        });
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
          제목, 문의 유형 또는 내용을 입력해 주세요.
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
              <InquiryCreateWrapper row="between">
                <InquiryCreateInput placeholder="제목을 입력하세요." ref={titleRef} />

                <InquirySelect ref={selectRef}>
                  <InquiryOption value={-1}>문의 유형</InquiryOption>
                  <InquiryOption value={0}>버그 제보 / 문제 해결</InquiryOption>
                  <InquiryOption value={1}>계정 관련 문제</InquiryOption>
                  <InquiryOption value={2}>서비스 이용 관련 문의</InquiryOption>
                  <InquiryOption value={99}>기타 문의</InquiryOption>
                </InquirySelect>
              </InquiryCreateWrapper>

              <InquiryCreateTextArea placeholder="내용을 입력하세요." ref={contentRef} />
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
