import { css } from "styled-components";

const setFlexDirection = (dir) => {
  switch (dir) {
    case "col":
      return "column";
  }
};

const setJustifyContent = (row) => {
  switch (row) {
    case "center":
      return "center";
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "between":
      return "space-between";
    case "around":
      return "space-around";
    case "evenly":
      return "space-evenly";
    default:
      return "flex-start";
  }
};

const setAlignItems = (col) => {
  switch (col) {
    case "center":
      return "center";
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "baseline":
      return "baseline";
    case "stretch":
      return "stretch";
    default:
      return "stretch";
  }
};

const setFlex = css`
  display: flex;
  flex-direction: ${({ $dir }) => setFlexDirection($dir)};
  justify-content: ${({ $row }) => setJustifyContent($row)};
  align-items: ${({ $col }) => setAlignItems($col)};
`;

export const setLayout = css`
  position: ${({ $position }) => $position};
  top: ${({ $top }) => $top};
  bottom: ${({ $bottom }) => $bottom};
  left: ${({ $left }) => $left};
  right: ${({ $right }) => $right};

  ${({ $display }) => $display === "flex" && setFlex};

  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};

  align-self: ${({ $alignSelf }) => $alignSelf};

  background-color: ${({ $bgColor }) => $bgColor};
  box-shadow: ${({ $shadow }) => $shadow};
  border: ${({ $border }) => $border};
  border-top: ${({ $borderTop }) => $borderTop};
  border-right: ${({ $borderRight }) => $borderRight};
  border-bottom: ${({ $borderBottom }) => $borderBottom};
  border-left: ${({ $borderLeft }) => $borderLeft};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  color: ${({ $color }) => $color};
  z-index: ${({ $zIndex }) => $zIndex};
  line-height: ${({ $lineHeight }) => $lineHeight};
  font-family: ${({ $fontFamily }) => $fontFamily};
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};

  overflow-x: ${({ $overflowX }) => $overflowX};
  overflow-y: ${({ $overflowY }) => $overflowY};

  ${({ $clickable }) =>
    $clickable &&
    `
    :hover {
      cursor: pointer;
    }
  `}

  ${({ $hoverBgColor }) =>
    $hoverBgColor &&
    `
  &:hover {
    background-color: ${$hoverBgColor};
  }`}

  ${({ $horizontalGap }) =>
    $horizontalGap &&
    `
    & > * + * {
    margin-left: ${$horizontalGap};
  }`}
`;

export const setText = css`
  ${({ $display }) => $display === "flex" && setFlex};

  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};

  align-self: ${({ $alignSelf }) => $alignSelf};

  font-family: ${({ $fontFamily }) => $fontFamily};
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  color: ${({ $color }) => $color};
  text-align: ${({ $textAlign }) => $textAlign};
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing};
  line-height: ${({ $lineHeight }) => $lineHeight};
  text-decoration: ${({ $textDecoration }) => $textDecoration};

  word-break: ${({ $break }) => $break};

  ${({ $hoverable }) => $hoverable && `cursor: default;`};
`;
