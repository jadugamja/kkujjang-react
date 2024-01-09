import styled from "styled-components";
import { Input } from "../Shared/Form/InputFieldStyle";

const NoticeManagementCreate = () => {
  return (
    <InputWrapper>
      <TitleInput
        type="text"
        name="title"
        hasLabel={false}
        placeholder="제목을 입력하세요"
      />
      <ContentInput type="text" hasLabel={false} placeholder="내용을 입력하세요" />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  padding: 10px;
`;
const TitleInput = styled(Input)`
  background-color: transparent;
`;

const ContentInput = styled(Input)`
  height: 18rem;
  background-color: transparent;
`;

export default NoticeManagementCreate;
