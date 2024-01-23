import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { FlexBox } from "@/styles/FlexStyle";

// mode 0: default(with plus icon), mode 1: secondary(with text)
const ImageFileUpload = ({ appendFilesToFormData, width, height, mode = 0 }) => {
  // 화면에 출력되는 이미지 썸네일
  const [previewImgs, setPreviewImgs] = useState([]);
  // 서버 전달용 파일 리스트
  const [selectedFiles, setSelectedFiles] = useState([]);
  const inputRef = useRef(null);

  const onSelectFile = (e) => {
    e.preventDefault();
    e.persist();

    // 유사 배열 객체인 File을 배열로 변환
    const newSelectedFiles = Array.from(e.target.files);
    const fileUrlList = [];

    for (let i = 0; i < newSelectedFiles.length; i++) {
      // 파일 크기 제한
      if (newSelectedFiles[i].size > 1024 * 1024 * 5) {
        alert("파일당 5MB를 초과할 수 없습니다.");
        return;
      }

      // 파일명 중복 체크
      if (selectedFiles.some((file) => file.name === newSelectedFiles[i].name)) {
        alert("같은 이름의 파일이 존재합니다.");
        return;
      }

      const currUrl = URL.createObjectURL(newSelectedFiles[i]);
      fileUrlList.push(currUrl);
    }

    // 기존 파일 리스트에 새로운 파일 추가
    setSelectedFiles((prevFiles) => {
      appendFilesToFormData([...prevFiles, ...newSelectedFiles]);
      return [...prevFiles, ...newSelectedFiles];
    });

    // 브라우저 상에 보여질 썸네일 이미지
    const thumbnailImageArray = fileUrlList?.map((url, i) => {
      return { name: newSelectedFiles[i].name, url: url };
    });

    // 첨부 파일 삭제 시
    setPreviewImgs((prev) => prev.concat(thumbnailImageArray));
    e.target.value = "";
  };

  const onDeleteFile = (fileName) => {
    setSelectedFiles((prevFiles) => prevFiles?.filter((file) => file.name !== fileName));
    setPreviewImgs((prevImage) => prevImage?.filter((image) => image.name !== fileName));
  };

  // 미리보기 이미지
  const previewImg = previewImgs?.map((image, idx) => (
    <div key={idx}>
      <ThumbnailImage src={image.url} alt={image.name} />
      <DeleteButton onClick={() => onDeleteFile(image.name)}>
        <DeleteIcon icon={faX} />
      </DeleteButton>
    </div>
  ));

  // 미리보기 파일명
  const previewName = selectedFiles?.map((file, idx) => (
    <PreviewNameBox key={idx} col="center">
      <PreviewNameSpan>{file.name}</PreviewNameSpan>
      <DeleteButton onClick={() => onDeleteFile(file.name)}>
        <DeleteIcon icon={faX} />
      </DeleteButton>
    </PreviewNameBox>
  ));

  return (
    <ImageFileUploadWrapper mode={mode} col={mode !== 0 && "center"}>
      {mode === 0 && previewImgs.length !== 0 && (
        <PreviewImgWrapper>{previewImg}</PreviewImgWrapper>
      )}
      {mode !== 0 && previewImgs.length !== 0 && (
        <PreviewImgWrapper>{previewName}</PreviewImgWrapper>
      )}
      {previewImgs.length < 3 && (
        <FileUploadButton
          width={width}
          height={height}
          mode={mode}
          onClick={() => inputRef.current && inputRef.current.click()}
        >
          {mode === 0 ? (
            <PlusIcon icon={faPlus} />
          ) : (
            <AttachmentText>첨부파일</AttachmentText>
          )}
        </FileUploadButton>
      )}
      <UnvisibleInput
        ref={inputRef}
        name="images"
        onChange={onSelectFile}
        accept="image/*"
      />
    </ImageFileUploadWrapper>
  );
};

ImageFileUpload.propTypes = {
  appendFilesToFormData: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  mode: PropTypes.number
};

const CommonWrapper = styled(FlexBox)`
  & > * + * {
    margin-left: 5px;
  }
`;

const ImageFileUploadWrapper = styled(CommonWrapper)`
  width: ${({ mode }) => mode !== 0 && "100%"};
  margin-left: ${({ mode }) => mode !== 0 && "5px"};
  overflow-x: auto;
`;

const PreviewImgWrapper = styled(CommonWrapper)``;

// ========= 파일명 미리보기 =========
const PreviewNameBox = styled(FlexBox)`
  width: fit-content;
  height: 2.25rem;
  padding: 0 1.5rem 0 1rem;
  background-color: #eee;
  border-radius: 30px;
`;

const PreviewNameSpan = styled.span`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AttachmentText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxxs};
`;

// ========= 이미지 미리보기 =========
const ThumbnailImage = styled.img`
  width: 6.25rem;
  height: 5.625rem;
  object-fit: cover;
`;

const DeleteButton = styled.button`
  position: relative;
  top: ${({ mode }) => mode !== 0 && "0"};
  bottom: ${({ mode }) => mode === 0 && "78%"};
  right: ${({ mode }) => (mode === 0 ? "calc(16% + 2px)" : "-12px")};
  background-color: #000;
  opacity: 0.7;
  border-radius: ${({ mode }) => mode !== 0 && "50%"};
`;

const DeleteIcon = styled(FontAwesomeIcon)`
  color: #fff;
`;

// ========= 파일 업로드 =========
const FileUploadButton = styled.button`
  width: ${({ width }) => width || "6.25rem"};
  height: ${({ height }) => height || "5.625rem"};
  background-color: ${({ mode }) => (mode === 0 ? "#585858" : "#EBE8E1")};
  color: ${({ mode }) => mode !== 0 && "#3F3F3F"};
  font-size: ${({ mode, theme }) => mode !== 0 && theme.fontSize.xxxs};

  min-width: ${({ mode }) => mode !== 0 && "5.5rem"};
  margin-left: ${({ mode }) => mode !== 0 && "auto"};
`;

const PlusIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: #fff;
`;

const UnvisibleInput = styled.input.attrs(() => ({ type: "file" }))`
  display: none;
  -webkit-appearance: none;
  appearance: none;
`;

export default ImageFileUpload;
