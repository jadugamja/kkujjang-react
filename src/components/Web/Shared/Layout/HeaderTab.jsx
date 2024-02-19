import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FlexBox } from "@/styles/FlexStyle";

const HeaderTab = ({ type = "default" }) => {
  const [clickedTab, setClickedTab] = useState(false);
  const tabsRef = useRef([React.createRef(), React.createRef(), React.createRef()]);

  const handleClick = (e) => {
    const tabIdx = tabsRef.current.findIndex((tab) => tab.current === e.target);
    setClickedTab(tabIdx);
  };

  return (
    <TabWrapper align="flex-end" width="20rem" row="between" onClick={handleClick}>
      <BottomLink to="/notice/list">
        <SpringTab type={type} ref={tabsRef.current[0]} clicked={clickedTab === 0}>
          공지
        </SpringTab>
      </BottomLink>
      <BottomLink to="/inquiry/list">
        <SpringTab type={type} ref={tabsRef.current[1]} clicked={clickedTab === 1}>
          문의
        </SpringTab>
      </BottomLink>
      <BottomLink to="/member/myInfo">
        <SpringTab type={type} ref={tabsRef.current[2]} clicked={clickedTab === 2}>
          내 정보
        </SpringTab>
      </BottomLink>
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
  width: 6rem;
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
  font-family: "Gugi";
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
