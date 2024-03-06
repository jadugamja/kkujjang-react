import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const getDimensions = (type) => {
  switch (type) {
    case "bigBrown":
      return {
        width: "100%",
        height: "4.3rem"
      };
    case "smallBrown":
      return {
        width: "15rem",
        height: "4.688rem"
      };
    case "modal":
      return {
        width: "11rem",
        height: "3.625rem"
      };
    case "bigTransparent":
      return {
        width: "9rem",
        height: "4.3rem"
      };
    case "smallTransparent":
      return {
        width: "6rem",
        height: "3rem"
      };
    case "smallDark":
      return {
        width: "6rem",
        height: "3rem"
      };
    case "smallGray":
      return {
        width: "6rem",
        height: "3rem"
      };
    case "miniBlue":
      return {
        width: "2.875rem",
        height: "1.688rem"
      };
    case "miniRed":
      return {
        width: "2.875rem",
        height: "1.688rem"
      };
  }
};

const getColors = (type) => {
  switch (type) {
    case "bigBrown":
      return {
        bgColor: "#413014",
        textColor: "#ffffff",
        hoverBgColor: "#554730"
      };
    case "smallBrown":
      return {
        bgColor: "#413014",
        textColor: "#ffffff",
        hoverBgColor: "#554730"
      };
    case "modal":
      return {
        bgColor: "#e5e5e5",
        textColor: "#7d7d7d",
        hoverBgColor: "#c1c1c1"
      };
    case "bigTransparent":
      return {
        bgColor: "transparent",
        textColor: "#363636",
        hoverBgColor: "#ffffff32"
      };
    case "smallTransparent":
      return {
        bgColor: "transparent",
        textColor: "#000",
        hoverBgColor: "#ffffff32"
      };
    case "smallDark":
      return {
        bgColor: "#585858",
        textColor: "#fff",
        hoverBgColor: "#7d7d7d"
      };
    case "smallGray":
      return {
        bgColor: "#aaa",
        textColor: "#000",
        hoverBgColor: "#c1c1c1"
      };
    case "miniBlue":
      return {
        bgColor: "transparent",
        textColor: "#486dff"
      };
    case "miniRed":
      return {
        bgColor: "transparent",
        textColor: "#ff6c6c"
      };
  }
};

const getFonts = (type) => {
  switch (type) {
    case "bigBrown":
      return {
        size: "27px",
        weight: "700"
      };
    case "smallBrown":
      return {
        size: "28px",
        weight: "700"
      };
    case "modal":
      return {
        size: "22px",
        weight: "500"
      };
    case "bigTransparent":
      return {
        size: "22px",
        weight: "700"
      };
    case "smallTransparent":
      return {
        size: "18px",
        weight: "700"
      };
    case "smallDark":
      return {
        size: "18px",
        weight: "700"
      };
    case "smallGray":
      return {
        size: "18px",
        weight: "700"
      };
    case "miniBlue":
      return {
        size: "14px",
        weight: "700"
      };
    case "miniRed":
      return {
        size: "14px",
        weight: "700"
      };
  }
};

const getBorder = (type) => {
  switch (type) {
    case "modal":
      return {
        style: "solid",
        width: "1px",
        color: "#929292"
        // border: "1px solid #929292"
      };
    case "bigTransparent":
      return {
        style: "solid",
        width: "2px",
        color: "#929292"
        // border: "2px solid #7d7d7d"
      };
    case "smallTransparent":
      return {
        style: "solid",
        width: "1px",
        color: "#000"
        // border: "1px solid #000"
      };
    case "miniBlue":
      return {
        style: "solid",
        width: "1px",
        color: "#486dff"
        // border: "1px solid #486dff"
      };
    case "miniRed":
      return {
        style: "solid",
        width: "1px",
        color: "#ff6c6c"
        // border: "1px solid #ff6c6c"
      };
    default:
      return {
        style: null,
        width: null,
        color: null
      };
  }
};

const StyledButton = styled.button`
  width: ${({ type }) => getDimensions(type).width};
  height: ${({ type }) => getDimensions(type).height};

  background-color: ${({ type }) => getColors(type).bgColor};
  color: ${({ type }) => getColors(type).textColor};

  font-size: ${({ type }) => getFonts(type).size};
  font-weight: ${({ type }) => getFonts(type).weight};

  // border: ${({ type }) => getBorder(type).border};

  border-style: ${({ type }) => getBorder(type).style};
  border-width: ${({ type }) => getBorder(type).width};
  border-color: ${({ type }) => getBorder(type).color};

  &:hover {
    ${({ type }) => getColors(type).hoverBgColor};
  }
`;

const Button = ({ type, onClick, message }) => {
  // type : bigBrown, smallBrown, modal, bigTransparent, smallTransparent, smallDark, smallGray, miniBlue, miniRed
  return (
    <StyledButton type={type} onClick={onClick}>
      {message}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;

// const Button = ({ type, message, onClick }) => {
//   return (
//     <>
//       {type === "bigBrown" && (
//         <BigSubmitBrownButton onClick={onClick}>{message}</BigSubmitBrownButton>
//       )}
//       {type === "smallBrown" && (
//         <SmallSubmitBrownButton onClick={onClick}>{message}</SmallSubmitBrownButton>
//       )}
//       {type === "modal" && <ModalGrayButton onClick={onClick}>{message}</ModalGrayButton>}
//       {type === "bigTransparent" && (
//         <BigTransparentButton onClick={onClick}>{message}</BigTransparentButton>
//       )}
//       {type === "smallTransparent" && (
//         <SmallTransparentButton onClick={onClick}>{message}</SmallTransparentButton>
//       )}
//       {type === "smallDark" && (
//         <SmallDarkButton onClick={onClick}>{message}</SmallDarkButton>
//       )}
//       {type === "smallGray" && (
//         <SmallGrayButton onClick={onClick}>{message}</SmallGrayButton>
//       )}
//       {type === "miniBlue" && (
//         <MiniBlueButton onClick={onClick}>{message}</MiniBlueButton>
//       )}
//       {type === "miniRed" && <MiniRedButton onClick={onClick}>{message}</MiniRedButton>}
//     </>
//   );
// };
