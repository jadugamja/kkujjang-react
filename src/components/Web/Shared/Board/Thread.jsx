import React, { useState, useEffect, useRef, useCallback } from "react";
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
const Thread = ({ inquiryId }) => {
  // === ref ===
  const inputRef = useRef(null);

  // === state ===
  const [threadData, setThreadData] = useState([]);
  const [files, setFiles] = useState([]);

  // (modal 관련)
  const [createModalOpen, setCreateModalOpen] = useState(false); // 문의 등록 실패 알림 modal state

  // (api 관련)
  const [apiConfig, setApiConfig] = useState(null);
  const { response, loading, error, fetchData } = useAxios(apiConfig);

  useEffect(() => {
    // 문의 스레드 상세 조회 api 호출 (inquirys/:id)
    setApiConfig({
      method: "get",
      url: `/inquiry/${inquiryId}`
    });

    if (response !== null) {
      setListData(response);
    } else {
      setListData([]);
    }

    // // 임시 데이터
    // const tmp = [
    //   {
    //     needAnswer: false,
    //     threadId: "252b1d9b-3e83-4951-983e-59932f625222",
    //     authorId: 86,
    //     type: 5,
    //     threadTitle: "렉 걸립니다.",
    //     nickname: "스테이지어스#86",
    //     createdAt: "2024-01-15 16:44:44",
    //     lastPage: 1,
    //     list: [
    //       {
    //         isAnswer: false,
    //         authorId: 86,
    //         content: "해결해 주세요.",
    //         createdAt: "2024-01-15 16:44:44",
    //         file: null
    //       },
    //       {
    //         isAnswer: false,
    //         authorId: 86,
    //         content: "사진 첨부합니다.",
    //         createdAt: "2024-01-15 16:44:44",
    //         file: null
    //       },
    //       {
    //         isAnswer: true,
    //         authorId: 87,
    //         content: "운영자입니다. 제보 감사합니다.",
    //         createdAt: "2024-01-15 16:44:44",
    //         file: null
    //       }
    //     ]
    //   }
    // ];
    // setThreadData(tmp);
  }, [inquiryId]);

  const appendFilesToFormData = (_files) => {
    if (_files) {
      setFiles(_files);
    } else {
      setFiles([]);
    }
  };

  const handleClickSubmitButton = () => {
    const content = inputRef.current.value;

    if (content.length < 1 || content.length > 2000) {
      setCreateModalOpen(true);
    } else {
      const formData = new FormData();
      formData.append("content", content);
      formData.append("files", files);

      // 문의 등록 API 호출
      setApiConfig({
        method: "post",
        url: `/inquiry/${inquiryId}`,
        headers: { "Content-Type": "multipart/form-data" },
        data: formData
      });

      fetchData(apiConfig);

      if (response !== null) {
        content === "";
        setFiles([]);

        setApiConfig({
          method: "get",
          url: `/inquiry/${inquiryId}`
        });

        if (response !== null) {
          setListData(response);
        } else {
          setListData([]);
        }
      } else {
        setCreateModalOpen(true);
      }
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
          <div key={index}>
            {threadItem?.list?.map((listItem, listIndex) => (
              <ThreadItem
                key={listIndex}
                isAnswer={listItem.isAnswer}
                content={listItem.content}
                createdAt={listItem.createdAt}
                files={listItem.file}
              />
            ))}
          </div>
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
  updateIsAnswer: PropTypes.func
};

export default Thread;
