import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { FlexBox } from "@/styles/FlexStyle";

const ImageFileUpload = ({ appendFilesToFormData }) => {
  // 화면에 출력되는 이미지 썸네일
  const [thumbnailImages, setThumbnailImages] = useState([]);
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
      // 5MB 제한
      if (newSelectedFiles[i].size > 1024 * 1024 * 5) {
        alert("파일당 5MB를 초과할 수 없습니다.");
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
    setThumbnailImages((prev) => prev.concat(thumbnailImageArray));
    e.target.value = "";
  };

  const onDeleteFile = (fileName) => {
    setSelectedFiles((prevFiles) => prevFiles?.filter((file) => file.name !== fileName));
    setThumbnailImages((prevImage) =>
      prevImage?.filter((image) => image.name !== fileName)
    );
  };

  const thumbnailFile = thumbnailImages?.map((image, idx) => (
    <div key={idx}>
      <ThumbnailImage src={image.url} alt={image.name} />
      <DeleteButton onClick={() => onDeleteFile(image.name)}>
        <DeleteIcon icon={faX} />
      </DeleteButton>
    </div>
  ));

  return (
    <ImageFileUploadWrapper>
      {thumbnailImages.length !== 0 && (
        <ThumbnailImageWrapper>{thumbnailFile}</ThumbnailImageWrapper>
      )}
      {thumbnailImages.length < 3 && (
        <FileUploadButton onClick={() => inputRef.current.click()}>
          <PlusIcon icon={faPlus} />
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
  appendFilesToFormData: PropTypes.func
};

const CommonWrapper = styled(FlexBox)`
  & > * + * {
    margin-left: 5px;
  }
`;

const ImageFileUploadWrapper = styled(CommonWrapper)``;

const ThumbnailImageWrapper = styled(CommonWrapper)``;

// ========= 이미지 미리보기 =========
const ThumbnailImage = styled.img`
  width: 6.25rem;
  height: 5.625rem;
  object-fit: cover;
`;

const DeleteButton = styled.button`
  position: relative;
  bottom: 78%;
  right: calc(16% + 2px);
  background-color: #000;
  opacity: 0.7;
`;

const DeleteIcon = styled(FontAwesomeIcon)`
  color: #fff;
`;

// ========= 파일 업로드 =========
const FileUploadButton = styled.button`
  width: 6.25rem;
  height: 5.625rem;
  background-color: #585858;
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
