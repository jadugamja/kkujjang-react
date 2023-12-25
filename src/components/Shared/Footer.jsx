import { Wrapper, FixedFooter } from "@/styles/CommonStyle";

const Footer = (props) => {
  let message = "KKUJJANG ⓒ All rights reserved.";

  return (
    <Wrapper row="center" col="center">
      <FixedFooter>{message}</FixedFooter>
    </Wrapper>
  );
};

export default Footer;
