import PropTypes from "prop-types";
import styled from "styled-components";
import FlexBox from "../../../styles/FlexStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import Button from "../Shared/Buttons/Button";

const NoticeManagementDetail = ({ data }) => {
  const { id, title, createdAt, views, content } = data;
  return (
    <DetailWrapper key={id}>
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
        <Button type="smallTransparent" message="수정" />
        <Button type="smallGray" message="삭제" />
      </ButtonWrapper>
    </DetailWrapper>
  );
};

NoticeManagementDetail.propTypes = {
  data: PropTypes.object
};

const DetailWrapper = styled.div`
  margin: 0 14px;
`;

const HeaderTextWrapper = styled(FlexBox)`
  margin: 54px 0;
`;

const TitleText = styled.span`
  font-size: 26px;
  font-weight: 700;
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
  & > * + * {
    margin-left: 10px;
  }
`;

export default NoticeManagementDetail;
