import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FlexBox } from "@/styles/FlexStyle";

export const SideTab = () => (
  <Tab row="center" col="center" bgColor="sub">
    <TabIcon icon={faTrophy} />
    <TabSpan>랭킹</TabSpan>
  </Tab>
);

export const MainTab = ({ children, bgColor }) => (
  <Tab row="center" col="center" bgColor={bgColor}>
    <TabSpan>{children}</TabSpan>
  </Tab>
);

MainTab.propTypes = {
  children: PropTypes.string,
  bgColor: PropTypes.string
};

const Tab = styled(FlexBox)`
  position: relative;
  top: ${({ bgColor }) => (bgColor === "#779DC5" || bgColor === "sub" ? "1px" : "0")};
  z-index: 9;
  width: 8.75rem;
  height: 3rem;
  background-color: ${({ bgColor }) => (bgColor === "sub" ? "#f3f3f3" : bgColor)};
  border: 1px solid
    ${({ bgColor }) =>
      bgColor === "#779DC5" ? "#7D7D7D" : bgColor === "sub" ? "#ccc" : "transparent"};
  border-bottom: 0;
  border-radius: 12px 12px 0 0;
  flex-shrink: 0;

  & > * + * {
    margin-left: 7px;
  }
`;

const TabIcon = styled(FontAwesomeIcon)`
  font-size: ${({ fontSize }) => fontSize || "18px"};
`;

const TabSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;
`;
