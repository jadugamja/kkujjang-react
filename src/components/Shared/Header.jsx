import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Tab from "./Tab";
import { FixedHeader, Logo } from "@/styles/CommonStyle";
import webLogo from "@/assets/images/logo.png";
import gameLogo from "@/assets/images/logo-game.png";

const Header = ({ type }) => {
  let logo;

  if (type === "game") {
    logo = gameLogo;
  } else {
    logo = webLogo;
  }

  const handleClick = (e) => {
    if (type === "game") {
      alert("게임에서 홈으로 넘어갈라 할 때 나오는 경고창");
    }
  };

  return (
    <FixedHeader type={type}>
      <Link to="/" onClick={handleClick}>
        <Logo src={logo} type={type} />
      </Link>
      {(type === "detail" || type === "clearTab") && <Tab type={type}></Tab>}
    </FixedHeader>
  );
};

Header.propTypes = {
  type: PropTypes.string
};

Header.defaultProps = {
  type: "default"
};

export default Header;
