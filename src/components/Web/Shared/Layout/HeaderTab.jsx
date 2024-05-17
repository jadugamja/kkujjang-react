import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Container as LinkWrapper } from "@/styles/StyledComponents";
import { FlexBox } from "@/styles/FlexStyle";
import { userInfoState } from "@/recoil/userState";

const HeaderTab = ({ type = "default" }) => {
  const location = useLocation();
  const user = useRecoilValue(userInfoState);
  const isAuthenticated = user != null;

  const [clickedTab, setClickedTab] = useState(false);
  const tabsRef = useRef([React.createRef(), React.createRef(), React.createRef()]);

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("notice")) {
      setClickedTab(0);
    } else if (path.includes("inquiry")) {
      setClickedTab(1);
    } else if (path.includes("member")) {
      setClickedTab(2);
    }
  }, [location]);

  const handleClick = (e) => {
    const tabIdx = tabsRef.current.findIndex((tab) => tab.current === e.target);
    setClickedTab(tabIdx);
  };

  return (
    <TabWrapper
      align="flex-end"
      width={!isAuthenticated ? "13rem" : "20rem"}
      row="end"
      onClick={handleClick}
    >
      {type === "clearTab" || type === "detail" ? (
        !isAuthenticated ? (
          <LinkWrapper $display="flex" $row="between" $width="100%">
            <BottomLink to="/notice/list">
              <SpringTab type={type} ref={tabsRef.current[0]} clicked={clickedTab === 0}>
                공지
              </SpringTab>
            </BottomLink>
            <BottomLink to="/member/login">
              <SpringTab type="clearTab" $padding="0.75rem 0 0">
                로그인
              </SpringTab>
            </BottomLink>
          </LinkWrapper>
        ) : (
          <LinkWrapper $display="flex" $row="between" $width="100%">
            <BottomLink to="/notice/list">
              <SpringTab type={type} ref={tabsRef.current[0]} clicked={clickedTab === 0}>
                공지
              </SpringTab>
            </BottomLink>
            <BottomLink to="/inquiry/list">
              <SpringTab type={type} ref={tabsRef.current[1]} clicked={clickedTab === 1}>
                1:1 문의
              </SpringTab>
            </BottomLink>
            <BottomLink to="/member/myInfo">
              <SpringTab type={type} ref={tabsRef.current[2]} clicked={clickedTab === 2}>
                내 정보
              </SpringTab>
            </BottomLink>
          </LinkWrapper>
        )
      ) : (
        <LinkWrapper>
          <BottomLink to="/member/join">
            <SpringTab type={type} ref={tabsRef.current[2]} clicked={clickedTab === 2}>
              회원가입
            </SpringTab>
          </BottomLink>
        </LinkWrapper>
      )}
    </TabWrapper>
  );
};

// 탭을 감싸는 태그
const TabWrapper = styled(FlexBox)`
  flex-basis: ${(props) => props.width || auto};
  align-self: ${(props) => props.align || auto};
`;

// 아래로 향하는 링크
const BottomLink = styled(Link)`
  align-self: flex-end;
`;

// 탭 버튼
const SpringTab = styled(FlexBox).attrs({ row: "center", col: "center" })`
  width: 6.3rem;
  height: ${(props) => (props.clicked ? "2.25rem" : "3rem")};
  background-color: ${(props) => {
    if (props.type === "detail") {
      return props.clicked ? props.theme.colors.content : props.theme.colors.paleBlueGray;
    } else {
      return "transparent";
    }
  }};
  border-radius: 15px 15px 0 0;
  padding-top: ${({ type }) => (type === "clearTab" ? "0" : "14px")};
  padding: ${({ $padding }) => $padding};
  font-family: "Noto Sans KR";
  font-weight: 600;
  font-size: 19px;
  color: #4e4e4e;
  align-self: flex-end;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => {
      if (props.type === "detail") {
        return props.clicked ? "#F2F2F2" : "#94a7c1";
      } else {
        return "transparent";
      }
    }};
  }
`;

HeaderTab.propTypes = {
  type: PropTypes.string
};

export default HeaderTab;
