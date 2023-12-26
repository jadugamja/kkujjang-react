import { FooterWrapper, FixedFooter } from "./FooterStyle";

const Footer = (props) => {
  let message = "KKUJJANG ⓒ All rights reserved.";

  return (
    <FooterWrapper row="center" col="center">
      <FixedFooter>{message}</FixedFooter>
    </FooterWrapper>
  );
};

export default Footer;
