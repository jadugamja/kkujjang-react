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
      setHeaderBgColor("#EAEFF9");
      setHeaderShadow("-14px 15px 30px #EAEFF9");
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
    <FixedHeader color={headerBgColor} shadow={headerShadow}>
      <HeaderContent type={type}>
        <Link to="/">
          <LogoImg src={logo} type={type} />
        </Link>
        {(type === "detail" || type === "clearTab" || type === "guest") && (
          <HeaderTab type={type}></HeaderTab>
        )}
        {type === "admin" ||
          (type === "admin-detail" && (
            <ButtonWrapper>
              <Link to="/game">
                <GameButton>게임 시작</GameButton>
              </Link>
              <LogoutButton onClick={() => setUser(null)}>
                <LogoutIcon icon={faSignOut} />
              </LogoutButton>
            </ButtonWrapper>
          ))}
      </HeaderContent>
    </FixedHeader>
  );
};

Header.propTypes = {
  type: PropTypes.string
};

const FixedHeader = styled(FlexBox).attrs(() => ({
  as: "header",
  row: "center"
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ color }) => color};
  box-shadow: ${({ shadow }) => shadow};
  z-index: 3;
`;

const HeaderContent = styled(FlexBox).attrs(({ type }) => ({
  row: type === "big" ? "center" : "between",
  col: "center"
}))`
  width: ${({ type }) =>
    type === "admin" ? "100%" : type === "admin-detail" ? "84rem" : "75rem"};
  height: ${({ type }) =>
    type === "big"
      ? "10rem"
      : type === "guest"
        ? "8.5rem"
        : type === "admin-detail"
          ? "6.5rem"
          : "7.5rem"};
  padding: ${({ type }) => (type === "admin" ? "0 60px" : "0 30px")};
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
  font-family: "Pretendard Variable";
  font-size: 36px;
  font-weight: 800;
  background-color: rgb(255, 253, 163);
  border: 2px solid rgb(237, 234, 101);
  color: ${({ theme }) => theme.colors.button.main.background};

  &:hover {
    background-color: #fffb6a;
  }
`;

const LogoutButton = styled.button`
  width: 4.75rem;
  height: 5.25rem;
  background-color: rgb(239, 239, 239);
  border-top: 2px solid #ccc;
  border-right: 2px solid #ccc;
  border-bottom: 2px solid #ccc;

  &:hover {
    background-color: rgb(229, 228, 228);
  }
`;

const LogoutIcon = styled(FontAwesomeIcon)`
  font-size: 27px;
  color: ${({ theme }) => theme.colors.text.main};
`;

export default Header;
