import { useState, useRef, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactQuill from "react-quill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-quill/dist/quill.snow.css";

import { isActiveSideContentTypeState } from "@/recoil/displayState";
import { remoteApiConfigState } from "@/recoil/boardState";
import { formatDateToTimestamp } from "@/services/date";
import FlexBox from "@/styles/FlexStyle";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { EditorWrapper } from "./NoticeManagementCreate";
import { Input } from "../Shared/Form/InputFieldStyle";
import Button from "../Shared/Buttons/Button";
import Modal from "../Shared/Modal/WebModal";
import useAxios from "@/hooks/useAxios";

const NoticeManagementDetail = ({ data, isEditMode, setIsEditMode }) => {
  const { id, title, content, created_at, views, files } = data;
  const [cookies] = useCookies(["sessionId"]);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);
  const [editImages, setEditImages] = useState([]);
  const setIsActiveSideContentType = useSetRecoilState(isActiveSideContentTypeState);
  const setRemoteApiConfig = useSetRecoilState(remoteApiConfigState);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [apiConfig, setApiConfig] = useState(null);
  const { response, loading, error, fetchData } = useAxios(apiConfig, false);

  const contentRef = useRef();
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (apiConfig !== null) {
      fetchData();
    }
  }, [apiConfig]);

  useEffect(() => {
    if (response !== null) {
      // 삭제
      if (apiConfig.method === "delete") {
        setIsActiveSideContentType(0);
        setRemoteApiConfig({
          method: "get",
          url: "/notice/list?page=1",
          headers: {
            sessionId: cookies.sessionId
          }
        });
      } else {
        setIsEditMode(false);
      }
    }
  }, [response]);

  const onClickEditModeOn = () => {
    setEditTitle(title);
    setEditContent(content);
    setIsEditMode(true);
  };

  const onChangeText = (e) => {
    e.preventDefault();

    if (inputRef.current === e.target) {
      setEditTitle(e.target.value);
    }

    if (textareaRef.current === e.target) {
      setEditContent(e.target.value);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [] }],
      ["bold", "italic", "underline", "strike", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }],
      ["clean"]
    ]
  };

  // 수정
  const updateNotice = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", editTitle);
    formData.append("content", editContent);
    if (editImages.length > 0) {
      editImages?.forEach((image) => {
        formData.append("files", image);
      });
    }

    setApiConfig({
      method: "put",
      url: `/notice/${id}`,
      headers: {
        sessionId: cookies.sessionId,
        "Content-Type": "multipart/form-data"
      },
      data: formData
    });
  };

  // 서버에서 받은 데이터의 이미지 url을 img src 속성에 적용 (수정 예정)
  useEffect(() => {
    if (contentRef.current) {
      const imgElements = contentRef.current.querySelectorAll("img");
      imgElements.forEach((img, index) => {
        if (files !== null && files[index]) {
          img.src = files[index];
        }
      });
    }
  }, [content, files]);

  const renderDetailView = () => (
    <>
      <HeaderTextWrapper dir="col">
        <div>
          <TitleText>{title}</TitleText>
        </div>
        <SubTextWrapper col="center">
          <div>
            <ClockIcon icon={faClock} />
            <SubText>{formatDateToTimestamp(created_at)}</SubText>
          </div>
          <div>
            <EyeIcon icon={faEye} />
            <SubText>{views}</SubText>
          </div>
        </SubTextWrapper>
      </HeaderTextWrapper>
      <ContentWrapper>
        <ReactQuill
          style={{ height: "32rem" }}
          theme="snow"
          value={content}
          readOnly={true}
          modules={{ toolbar: false }}
        />
      </ContentWrapper>
      <ButtonWrapper row="end">
        <Button type="smallTransparent" message="수정" onClick={onClickEditModeOn} />
        <Button type="smallGray" message="삭제" onClick={deleteNotice} />
      </ButtonWrapper>
    </>
  );

  const renderUpdateView = () => (
    <>
      <HeaderTextWrapper dir="col">
        <div>
          <TitleInput
            type="text"
            value={editTitle}
            maxLength="100"
            onChange={(e) => onChangeText(e)}
            ref={inputRef}
          />
        </div>
        <SubTextWrapper col="center">
          <div>
            <ClockIcon icon={faClock} />
            <SubText>{formatDateToTimestamp(created_at)}</SubText>
          </div>
          <div>
            <EyeIcon icon={faEye} />
            <SubText>{views}</SubText>
          </div>
        </SubTextWrapper>
      </HeaderTextWrapper>
      <ContentWrapper>
        <EditorWrapper>
          <ReactQuill
            style={{ height: "29rem" }}
            theme="snow"
            value={editContent}
            modules={modules}
            onChange={(_content) => setEditContent(_content)}
          />
        </EditorWrapper>
      </ContentWrapper>
      <ButtonWrapper row="end">
        <Button type="smallTransparent" message="저장" onClick={(e) => updateNotice(e)} />
      </ButtonWrapper>
    </>
  );

  // 삭제
  const deleteNotice = () => {
    setIsOpenModal(true);
  };

  const onDeleteNotice = () => {
    setApiConfig({
      method: "delete",
      url: `/notice/${id}`,
      headers: {
        sessionId: cookies.sessionId
      }
    });
    setIsOpenModal(false);
  };

  const onErrorClick = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      {loading ? (
        <center>Loading...</center>
      ) : error ? (
        <Modal setIsOpen={setIsOpenModal} onClick={onErrorClick} hasButton={true}>
          {error}
        </Modal>
      ) : (
        <>
          <DetailWrapper key={id}>
            {isEditMode ? renderUpdateView() : renderDetailView()}
          </DetailWrapper>
          {isOpenModal && (
            <Modal setIsOpen={setIsOpenModal} onClick={onDeleteNotice} hasButton={true}>
              게시물을 삭제하시겠습니까?
            </Modal>
          )}
        </>
      )}
    </>
  );
};

NoticeManagementDetail.propTypes = {
  data: PropTypes.object,
  isEditMode: PropTypes.bool,
  setIsEditMode: PropTypes.func
};

const DetailWrapper = styled.div`
  margin: 0 14px;
`;

const HeaderTextWrapper = styled(FlexBox)`
  margin: 54px 0 24px;
`;

const TitleText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

const TitleInput = styled(Input)`
  margin-top: 0;
  padding: 0;
  background-color: transparent;
  border: 0;
  font-size: 1.5rem;
  height: 2.14rem;
`;

const SubTextWrapper = styled(FlexBox)`
  margin: 8px 0;

  & > * + * {
    margin-left: 30px;
  }
`;

const SubText = styled.span`
  margin-left: 9px;
  font-size: ${({ theme }) => theme.fontSize.xxxs};
  color: #a7a7a7;
`;

const ClockIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.fontSize.xxxs};
  color: #a7a7a7;
`;

const EyeIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.fontSize.xxxs};
  color: #a7a7a7;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 32rem;

  & > .quill > .ql-container.ql-snow {
    border: 0;
  }
`;

const ButtonWrapper = styled(FlexBox)`
  position: absolute;
  right: calc(18% - 8px);
  margin-top: 2.5rem;
  & > * + * {
    margin-left: 10px;
  }
`;

export default NoticeManagementDetail;
