import { useState, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FlexBox from "@/styles/FlexStyle";
import ReactQuill from "react-quill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { EditorWrapper } from "./NoticeManagementCreate";
import { Input } from "../Shared/Form/InputFieldStyle";
import Button from "../Shared/Buttons/Button";
import WebModal from "../Shared/Modal/WebModal";

import { useRecoilState } from "recoil";
import { isModalOpenState } from "@/recoil/modalState";

const NoticeManagementDetail = ({ data, isEditMode, setIsEditMode }) => {
  const { id, title, createdAt, views, content } = data;
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);
  const [isOpenModal, setIsOpenModal] = useRecoilState(isModalOpenState);

  const inputRef = useRef(null);
  const textareaRef = useRef(null);

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
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ["clean"]
    ]
  };

  const renderDetailView = () => (
    <>
      <HeaderTextWrapper dir="col">
        <div>
          <TitleText>{title}</TitleText>
        </div>
        <SubTextWrapper col="center">
          <div>
            <ClockIcon icon={faClock} />
            <SubText>{createdAt}</SubText>
          </div>
          <div>
            <EyeIcon icon={faEye} />
            <SubText>{views}</SubText>
          </div>
        </SubTextWrapper>
      </HeaderTextWrapper>
      <ContentWrapper>
        <ContentText>{content}</ContentText>
      </ContentWrapper>
      <ButtonWrapper row="end">
        <Button type="smallTransparent" message="수정" onClick={onClickEditModeOn} />
        <Button type="smallGray" message="삭제" onClick={() => setIsOpenModal(true)} />
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
            <SubText>{createdAt}</SubText>
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
        <Button type="smallTransparent" message="저장" />
      </ButtonWrapper>
    </>
  );

  return (
    <>
      <DetailWrapper key={id}>
        {isEditMode ? renderUpdateView() : renderDetailView()}
      </DetailWrapper>
      {isOpenModal && <WebModal hasButton={true} message="게시물을 삭제하시겠습니까?" />}
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
`;

const ContentText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 500;
`;

const ButtonWrapper = styled(FlexBox)`
  margin-top: 2.5rem;
  & > * + * {
    margin-left: 10px;
  }
`;

export default NoticeManagementDetail;
