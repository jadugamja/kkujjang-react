import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { FlexBox } from "@/styles/FlexStyle";
import HeaderTab from "./HeaderTab";
import logo from "@/assets/images/logo.png";

const Header = ({ type = "default" }) => {
  return (
    <FixedHeader type={type}>
      <Link to="/">
        <LogoImg src={logo} type={type} />
      </Link>
      {(type === "detail" || type === "clearTab") && <HeaderTab type={type}></HeaderTab>}
    </FixedHeader>
  );
};

Header.propTypes = {
  type: PropTypes.string
};

const FixedHeader = styled(FlexBox).attrs(({ type }) => ({
  as: "header",
  row: type === "big" ? "center" : "between",
  col: "center"
}))`
  position: fixed;
  top: 0;
  width: inherit;
  height: ${({ type }) => (type === "big" ? "10rem" : "7.5rem")};
  background-color: transparent;
  z-index: 3;
`;

// 로고 이미지
const LogoImg = styled.img`
  ${({ type }) => setLogoSize(type)}

  &:hover {
    cursor: pointer;
  }
`;

// 로고 이미지 사이즈 조정
const setLogoSize = (type) => {
  switch (type) {
    case "big":
      return ` width: 5.5rem; `;
    default:
      return ` width: 4rem; `;
  }
};

export default Header;
