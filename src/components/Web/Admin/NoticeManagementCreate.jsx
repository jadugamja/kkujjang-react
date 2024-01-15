import { useState, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";

import FlexBox from "@/styles/FlexStyle";
import { Input } from "../Shared/Form/InputFieldStyle";
import { SmallDarkButton } from "../Shared/Buttons/ButtonStyle";

const NoticeManagementCreate = () => {
  const [content, setContent] = useState("");
  const editorRef = useRef(null);

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

  const onSaveNoticeArtice = (e) => {
    e.preventDefault();
    console.log(content);
  };

  return (
    <NoticeCreateForm>
      <TitleInput
        type="text"
        name="title"
        hasLabel={false}
        maxLength="100"
        placeholder="제목을 입력하세요."
      />
      <EditorWrapper>
        <ReactQuill
          style={{ height: "29rem" }}
          ref={editorRef}
          theme="snow"
          modules={modules}
          onChange={(content) => setContent(content)}
          placeholder="내용을 입력하세요."
        />
      </EditorWrapper>
      <ButtonWrapper row="end">
        <SaveButton width="7rem" onClick={(e) => onSaveNoticeArtice(e)}>
          저장
        </SaveButton>
      </ButtonWrapper>
    </NoticeCreateForm>
  );
};

const NoticeCreateForm = styled.form`
  padding: 50px 15px 0 15px;

  & > * + * {
    margin-top: 1.5rem;
  }
`;

const TitleInput = styled(Input)`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  background-color: transparent;

  &::placeholder {
    font-weight: 400;
    color: #a7a7a7;
  }
`;

export const EditorWrapper = styled.div`
  height: 33rem;

  & .ql-editor {
    font-size: ${({ theme }) => theme.fontSize.xxxs};
  }

  & .ql-snow .ql-picker {
    font-size: 15px;
  }

  & .ql-snow .ql-editor .ql-syntax {
    font-family: "Consolas";
    font-size: 16px;
  }

  & .ql-snow .ql-picker.ql-header .ql-picker-label::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: "본문";
  }

  & .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
    content: "제목 1";
  }

  & .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
    content: "제목 2";
  }

  & .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
    content: "제목 3";
  }
`;

const ButtonWrapper = styled(FlexBox)``;

const SaveButton = styled(SmallDarkButton)``;

export default NoticeManagementCreate;
