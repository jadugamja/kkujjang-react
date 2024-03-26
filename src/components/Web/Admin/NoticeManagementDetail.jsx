import { useState, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactQuill from "react-quill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FlexBox from "@/styles/FlexStyle";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { EditorWrapper } from "./NoticeManagementCreate";
import { Input } from "../Shared/Form/InputFieldStyle";
import Button from "../Shared/Buttons/Button";
import Modal from "../Shared/Modal/WebModal";
import { isModalOpenState } from "@/recoil/modalState";
import useAxios from "@/hooks/useAxios";
import { formatDateToTimestamp } from "../../../services/date";

const NoticeManagementDetail = ({ data, isEditMode, setIsEditMode }) => {
  const { id, title, content, created_at, views, files } = data;
  const [cookies] = useCookies(["sessionId"]);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);
  const [isOpenModal, setIsOpenModal] = useRecoilState(isModalOpenState);
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
      setIsEditMode(false);
    }
  }, [response]);

  const onClickEditModeOn = () => {
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
    formData.append("title", editTitle);
    formData.append("content", editContent);
    // formData.append("files", images);

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

  // 삭제
  const deleteNotice = () => {
    // 경고 메시지 모달 출력
    setIsOpenModal(true);

    // 확인 버튼 클릭 시 삭제 요청
    setApiConfig({
      method: "delete",
      url: `/notice/${id}`,
      headers: {
        sessionId: cookies.sessionId
      },
      data: id
    });
  };

  // 서버에서 받은 데이터의 이미지 url을 img src 속성에 적용
  // useEffect(() => {
  //   let imageUrl;
  //   const empthImg = contentRef.current.querySelectorAll("img");
  //   empthImg?.forEach((img) => {
  //     if (imageUrl) {
  //       img.src = imageUrl;
  //     }
  //   });
  // }, [content]);

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
        <ContentText
          dangerouslySetInnerHTML={{ __html: content }}
          ref={contentRef}
        ></ContentText>
        {/* <ContentText>{content}</ContentText> */}
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

  return (
    <>
      <DetailWrapper key={id}>
        {isEditMode ? renderUpdateView() : renderDetailView()}
      </DetailWrapper>
      {isOpenModal && (
        <Modal hasButton={true} setIsOpen={setIsOpenModal}>
          게시물을 삭제하시겠습니까?
        </Modal>
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
  overflow-y: auto;
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
`;

const ContentText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 500;
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
