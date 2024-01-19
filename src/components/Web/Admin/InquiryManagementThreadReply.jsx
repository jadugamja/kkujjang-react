import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

const InquiryManagementThreadReply = () => {
  return (
    <AnswerWrapper key={idx}>
      <div>
        <QnAText>A.</QnAText>
      </div>
      <Width100>
        <AnswerText>{replyAnswer.text}</AnswerText>
        {Object.keys(replyAnswer.file).length > 0 && (
          <AttachedImg src={window.URL.createObjectURL(replyAnswer.file)} />
        )}
      </Width100>
    </AnswerWrapper>
  );
};

const AnswerWrapper = styled(FlexBox)`
  margin-top: 1rem;

  & > * + * {
    margin-left: 0.75rem;
  }
`;

const QnAText = styled.span`
  font-family: "Pretendard Variable";
  font-size: 53px;
  font-weight: 800;
`;

const Width100 = styled(FlexBox)`
  width: 100%;
  margin-top: ${({ marginTop }) => marginTop || ""};
`;

const AnswerText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

const AttachedImg = styled.img`
  width: 100px;
  height: 100px;
`;

export default InquiryManagementThreadReply;
