import { useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { FlexBox } from "@/styles/FlexStyle";
import HeaderTab from "./HeaderTab";
import logo from "@/assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { userState } from "@/recoil/userState";

const Header = ({ type = "default" }) => {
  const setUser = useSetRecoilState(userState);
  const [headerBgColor, setHeaderBgColor] = useState("transparent");
  const [headerShadow, setHeaderShadow] = useState();

  const checkScrollTop = () => {
    if (window.scrollY > 0) {
      setHeaderBgColor("#E9EBF0");
      setHeaderShadow("-14px 15px 30px #E9EBF0");
    } else {
      setHeaderBgColor("transparent");
      setHeaderShadow("none");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <FixedHeader type={type} color={headerBgColor} shadow={headerShadow}>
      <Link to="/">
        <LogoImg src={logo} type={type} />
      </Link>
      {(type === "detail" || type === "clearTab") && <HeaderTab type={type}></HeaderTab>}
      {type === "admin" && (
        <ButtonWrapper>
          <Link to="/game">
            <GameButton>게임 시작</GameButton>
          </Link>
          <LogoutButton onClick={() => setUser(null)}>
            <LogoutIcon icon={faSignOut} />
          </LogoutButton>
        </ButtonWrapper>
      )}
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
  width: ${({ type }) => (type === "detail" ? "75rem" : "inherit")};
  height: ${({ type }) => (type === "big" ? "10rem" : "7.5rem")};
  background-color: ${({ color }) => color};
  box-shadow: ${({ shadow }) => shadow};
  z-index: 3;
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

// const setHeaderSize = (type) => {
//   switch (type) {
//     case "detail":
//       return {
//         width:
//       }
//   }
// }

// 로고 이미지
const LogoImg = styled.img`
  ${({ type }) => setLogoSize(type)};

  &:hover {
    cursor: pointer;
  }
`;

const ButtonWrapper = styled(FlexBox)``;

const GameButton = styled.button`
  width: 14.5rem;
  height: 5.25rem;
  font-family: "Gugi";
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.gray700};
`;

const LogoutButton = styled.button`
  background-color: ${({ theme }) => theme.colors.gray100};
  width: 4.75rem;
  height: 5.25rem;
`;

const LogoutIcon = styled(FontAwesomeIcon)`
  font-size: 27px;
  color: ${({ theme }) => theme.colors.text.main};
`;

export default Header;
