import styled from "styled-components";
import { Link } from "react-router-dom";

import { SmallWrapper } from "@/styles/CommonStyle";
import { FlexBox } from "@/styles/FlexStyle";

// ============ Header ============

// 헤더
export const FixedHeader = styled(FlexBox).attrs(({ type }) => ({
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
export const LogoImg = styled.img`
  ${({ type }) => setLogoSize(type)}

  &:hover {
    cursor: pointer;
  }
`;

// 로고 사이즈
export const setLogoSize = (type) => {
  switch (type) {
    case "big":
      return ` width: 6.75rem; `;
    default:
      return ` width: 5rem; `;
  }
};

// ============ Tab ============

export const TabWrapper = styled(SmallWrapper)``;

// 아래로 향하는 링크
export const BottomLink = styled(Link)`
  align-self: flex-end;
`;

// 탭 버튼
export const SpringTab = styled(FlexBox).attrs({ row: "center", col: "center" })`
  width: 7rem;
  height: ${(props) => (props.clicked ? "2.5rem" : "3.25rem")};
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
