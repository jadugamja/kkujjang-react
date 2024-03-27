import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import useAxios from "@/hooks/useAxios";
import { FlexBox } from "@/styles/FlexStyle";
import HeaderTab from "./HeaderTab";
import logo from "@/assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { userInfoState } from "@/recoil/userState";

const Header = ({ type = "default" }) => {
  const setUser = useSetRecoilState(userInfoState);
  const [headerBgColor, setHeaderBgColor] = useState("transparent");
  const [headerShadow, setHeaderShadow] = useState();
  const [cookies, , removeCookie] = useCookies(["sessionId"]);
  const { response, loading, error, fetchData } = useAxios(
    {
      method: "get",
      url: "/user/signout",
      headers: {
        sessionId: cookies.sessionId
      }
    },
    false
  );

  useEffect(() => {
    if (response !== null) {
      setUser(null);
      removeCookie("sessionId", { path: "/" });
      if (cookies?.userRole) {
        removeCookie("userRole", { path: "/" });
      }
    }
  }, [response]);

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
        {(type === "admin" || type === "admin-detail") && (
          <ButtonWrapper>
            <Link to="/game">
              <GameButton>
                <FontAwesomeIcon icon={faPlay} color="#FAC138" />
                게임시작
              </GameButton>
            </Link>
            <LogoutButton onClick={() => fetchData()}>
              <LogoutIcon icon={faSignOut} />
            </LogoutButton>
          </ButtonWrapper>
        )}
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
  width: 11.8rem;
  height: 4.5rem;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-weight: 800;
  background-color: #fce8b7;
  border: 5px solid #ffd46c;
  border-radius: 22px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  color: #403a34;

  & > svg {
    margin-right: 12px;
  }

  &:hover {
    background-color: rgb(255 211 104);
  }
`;

const LogoutButton = styled.button`
  width: 5rem;
  height: 4.5rem;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-weight: 800;
  background-color: rgb(219 219 219);
  border: 5px solid rgb(187 187 187);
  border-radius: 22px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  &:hover {
    background-color: rgb(207 207 207);
  }
`;

const LogoutIcon = styled(FontAwesomeIcon)`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.text.main};
`;

export default Header;
