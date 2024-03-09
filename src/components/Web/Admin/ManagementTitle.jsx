import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlexBox } from "@/styles/FlexStyle";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ManagementTitle = ({ type, title }) => {
  const getTitleText = (title) => {
    switch (title) {
      case "notice":
        return "공지";
      case "inquiry":
        return "문의";
      case "report":
        return "신고";
      case "user":
        return "사용자 관리";
    }
  };

  return (
    <Link to={`/admin/${title}`}>
      <TitleWrapper col="center">
        <Title type={type}>{getTitleText(title)}</Title>
        {type === "home" && <ArrowRightIcon icon={faChevronRight} />}
      </TitleWrapper>
    </Link>
  );
};

ManagementTitle.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string
};

const TitleWrapper = styled(FlexBox)`
  height: 4rem;
  padding: 15px 0 4px 0;
  color: #828282;
`;

const Title = styled.h2`
  font-family: "Pretendard Variable";
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  width: ${({ type }) => type !== "home" && "6.25rem"};
  margin-left: ${({ type }) => (type !== "home" ? "24px" : "12px")};
  margin-right: 12px;
  white-space: ${({ type }) => type !== "home" && "pre-wrap"};
  color: ${({ type }) => type !== "home" && "#000"};
`;

const ArrowRightIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export default ManagementTitle;
