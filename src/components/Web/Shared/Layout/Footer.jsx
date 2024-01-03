import styled from "styled-components";
import PropTypes from "prop-types";

import { FlexBox } from "@/styles/FlexStyle";

const Footer = ({ message }) => {
  message = "KKUJJANG ⓒ All rights reserved.";

  return (
    <FooterWrapper row="center" col="center">
      <FixedFooter>{message}</FixedFooter>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  message: PropTypes.string
};

// 푸터 래퍼
const FooterWrapper = styled(FlexBox)``;

// 푸터
const FixedFooter = styled(FlexBox).attrs({
  as: "footer",
  row: "center",
  col: "center"
})`
  width: 100%;
  height: 1.5rem;
  position: fixed;
  bottom: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray500};
`;

export default Footer;
