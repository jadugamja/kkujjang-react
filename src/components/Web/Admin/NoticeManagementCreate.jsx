import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import FlexBox from "@/styles/FlexStyle";
import { Input } from "../Shared/Form/InputFieldStyle";
import { SmallDarkButton } from "../Shared/Buttons/ButtonStyle";

import { useSetRecoilState } from "recoil";
import { noticeArticleState } from "../../../recoil/testState.test";

const MAX_IMAGE_COUNT = 3;

const NoticeManagementCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  const editorRef = useRef(null);

  const setNotice = useSetRecoilState(noticeArticleState);

  // 텍스트 에디터 옵션
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

  const sendNoticeForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    // formData.append("file", images);
    images.forEach((image, idx) => {
      formData.append(`file[${idx}]`, image);
    });

    debugger;
    // 공지사항 등록 api 호출 (notice)

    let notice = {};
    for (let [key, value] of formData) {
      notice[key] = value;
    }
    setNotice(notice);
  };

  useEffect(() => {
    const handleImage = () => {
      const editor = editorRef.current.getEditor();

      // input[type="file"] 있는지 확인
      if (editor.container.querySelector("input.ql-image[type=file]") === null) {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/png, image/jpeg, image/jpg, image/tif");
        input.classList.add("ql-image");
        input.onchange = () => {
          // 이미지를 선택하지 않고 창 닫은 경우 방지
          if (input.files && input.files[0]) {
            const file = input.files[0];

            // 파일 크기 제한
            if (file.size > 1024 * 1024 * 5) {
              alert("파일당 5MB를 초과할 수 없습니다.");
              return;
            }

            // 이미지 개수 제한
            let images = document.querySelectorAll("img");
            if (images.length > MAX_IMAGE_COUNT) {
              alert(`최대 ${MAX_IMAGE_COUNT}개의 이미지만 첨부할 수 있습니다.`);
              return;
            }
            // 이미지 추가
            const fr = new FileReader();
            fr.onload = () => {
              // 현재 커서 위치 저장
              const range = editor.getSelection(true);
              editor.insertEmbed(range.index, "image", fr.result);

              const unprivilegedEditor = editorRef.current.makeUnprivilegedEditor(editor);
              const length = unprivilegedEditor.getLength();

              editor.scrollIntoView({ index: length - 1, length: 0 });
              editor.setSelection(range.index + 1);

              // 이미지 파일 저장
              setImages((prevImages) => prevImages.concat(file));
            };
            fr.readAsDataURL(file);
          }
        };
        input.click();
      }
    };

    if (editorRef.current) {
      let toolbar = editorRef.current.getEditor().getModule("toolbar");
      toolbar.addHandler("image", handleImage);
    }
  }, []);

  // 이미지 삭제 처리
  useEffect(() => {
    const editor = editorRef.current.getEditor();

    // text-change 이벤트 핸들러
    const handleImageDelete = () => {
      let quillImages = [];
      editor.getContents().ops.forEach((op) => {
        if (op.insert && op.insert.image) {
          quillImages.push(op.insert.image);
        }
      });

      setImages((prevImages) => {
        return prevImages.filter((image) => quillImages.includes(image));
      });
    };

    // text-change 이벤트 등록
    editor.on("text-change", handleImageDelete);

    // 컴포넌트 언마운트 시 이벤트 해제
    return () => editor.off("text-change", handleImageDelete);
  }, []);

  // 스크롤 아래로 고정
  useEffect(() => {
    if (editorRef.current) {
      const editor = editorRef.current.getEditor();
      const unprivilegedEditor = editorRef.current.makeUnprivilegedEditor(editor);
      const length = unprivilegedEditor.getLength();
      editor.scrollIntoView({ index: length - 1, length: 0 });
    }
  }, [content]);

  return (
    <NoticeCreateForm>
      <TitleInput
        type="text"
        name="title"
        hasLabel={false}
        maxLength="100"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력하세요."
      />
      <EditorWrapper>
        <ReactQuill
          style={{ height: "29rem" }}
          ref={editorRef}
          theme="snow"
          modules={modules}
          onChange={(_content) => {
            const _contentWithEmptySrc = _content.replace(
              /<img[^>]*src="[^"]*"[^>]*>/g,
              (match) => {
                return match.replace(/src="[^"]*"/, 'src=""');
              }
            );
            setContent(_contentWithEmptySrc);
          }}
          placeholder="내용을 입력하세요."
        />
      </EditorWrapper>
      <ButtonWrapper row="end">
        <SaveButton width="7rem" onClick={(e) => sendNoticeForm(e)}>
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
