import React, { useState, useEffect, useRef, useCallback } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";
import useAxios from "@/hooks/useAxios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

// ===== components import =====
import ThreadItem from "@/components/Web/Shared/Board/ThreadItem";
import ImageFileUpload from "@/components/Web/Shared/Board/ImageFileUpload";
import WebModal from "@/components/Web/Shared/Modal/WebModal";

// ===== style =====
const TreadBox = styled(FlexBox)`
  width: ${(props) => props.width || "100%"};
  height: fit-content;
  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
  background-color: #ecebe6;
`;

const ThreadInput = styled.input`
  width: 91%;
  height: 3rem;
  background-color: transparent;
  border: 0;
  border: 1px solid #ccc;
`;

const ThreadButton = styled.button`
  flex: 1;
  height: 3rem;
  background-color: transparent;
  border: 1px solid #ccc;
`;

const SubmitIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  transform: rotate(43deg);
`;

const AttachmentWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "100%"};
  margin-top: ${({ marginTop }) => marginTop || "6px"};
  height: ${({ height }) => height || "3rem"};
  border: 1px solid #ccc;
  overflow-x: auto;
`;

// ===== component ======
const Thread = ({ inquiryId, currPage, title, type }) => {
  // === ref ===
  const inputRef = useRef(null);

  // === state ===
  const [threadData, setThreadData] = useState([]);
  const [threadId, setThreadId] = useState("");
  const [files, setFiles] = useState([]);
  // (modal 관련)
  const [createModalOpen, setCreateModalOpen] = useState(false); // 문의 등록 실패 알림 modal state

  // === cookie ===
  const [cookies] = useCookies(["sessionId"]);

  // (api 관련)
  const [apiConfig, setApiConfig] = useState({
    method: "get",
    url: `/inquiry/${inquiryId}?page=${currPage}`,
    headers: {
      sessionId: cookies.sessionId
    }
  });
  const { response, loading, error, fetchData } = useAxios(apiConfig);

  useEffect(() => {
    if (apiConfig !== null) {
      fetchData();
    }
  }, [apiConfig]);

  useEffect(() => {
    if (apiConfig?.url.startsWith(`/inquiry/${inquiryId}?page=`)) {
      if (response !== null) {
        setThreadData(response.result.list);
        setThreadId(response.result.threadId);
        console.log(response.result.list);
      } else {
        setThreadData([]);
      }
    } else if (apiConfig?.url.startsWith(`/inquiry/${threadId}`)) {
      if (response !== null) {
        setApiConfig({
          method: "get",
          url: `/inquiry/${inquiryId}?page=${currPage}`,
          headers: {
            sessionId: cookies.sessionId
          }
        });

        if (response !== null) {
          setThreadData(response.result.list);
        } else {
          setThreadData([]);
        }
      } else {
        setCreateModalOpen(true);
      }
    }
  }, [response]);

  const appendFilesToFormData = (_files) => {
    if (_files) {
      setFiles(_files);
    } else {
      setFiles([]);
    }
  };

  useEffect(() => {
    console.log(files);
  }, [files]);

  const handleClickSubmitButton = () => {
    const content = inputRef.current.value;

    if (content.length < 1 || content.length > 2000) {
      setCreateModalOpen(true);
    } else {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("files", files);
      formData.append("type", type);

      console.log(formData);

      console.log(formData.get("title"));
      console.log(formData.get("content"));
      console.log(formData.get("files"));
      console.log(formData.get("type"));

      // 문의 등록 API 호출
      setApiConfig({
        method: "post",
        url: `/inquiry/${threadId}`,
        headers: {
          "Content-Type": "multipart/form-data",
          sessionId: cookies.sessionId
        },
        data: formData
      });
    }
  };

  return (
    <>
      {/* 문의 등록 실패 Modal */}
      {createModalOpen && (
        <WebModal setIsOpen={setCreateModalOpen} hasButton={true}>
          내용을 입력해 주세요.
        </WebModal>
      )}

      <TreadBox dir="col">
        {/* 상세 스레드 조회 부분 */}
        {threadData?.map((threadItem, index) => (
          <ThreadItem
            key={index}
            isAnswer={threadItem.isAnswer}
            content={threadItem.content}
            createdAt={threadItem.createdAt}
            files={threadItem.file}
          />
        ))}

        {/* 문의 입력, 이미지 업로드 */}
        <TreadBox dir="col" col="center" marginBottom="10px">
          {/* 문의 입력 */}
          <TreadBox width="98%">
            <ThreadInput ref={inputRef} />
            <ThreadButton onClick={handleClickSubmitButton}>
              <SubmitIcon icon={faLocationArrow} />
            </ThreadButton>
          </TreadBox>

          {/* 이미지 업로드 */}
          <AttachmentWrapper
            width="98%"
            dir="col"
            row="between"
            col="center"
            height="none"
          >
            <ImageFileUpload
              width="7rem"
              height="2.9rem"
              mode={1}
              appendFilesToFormData={appendFilesToFormData}
            />
          </AttachmentWrapper>
        </TreadBox>
      </TreadBox>
    </>
  );
};

Thread.propTypes = {
  inquiryId: PropTypes.number,
  currPage: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.number
};

export default Thread;
