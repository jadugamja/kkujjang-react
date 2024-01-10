import React from "react";
import PropTypes from "prop-types";

import {
  BigSubmitBrownButton,
  SmallSubmitBrownButton,
  ModalGrayButton,
  BigTransparentButton,
  SmallTransparentButton,
  SmallDarkButton,
  SmallGrayButton,
  MiniBlueButton,
  MiniRedButton
} from "./ButtonStyle";

const Button = ({ type, message, onClick }) => {
  return (
    <>
      {type === "bigBrown" && (
        <BigSubmitBrownButton onClick={onClick}>{message}</BigSubmitBrownButton>
      )}
      {type === "smallBrown" && (
        <SmallSubmitBrownButton onClick={onClick}>{message}</SmallSubmitBrownButton>
      )}
      {type === "modal" && <ModalGrayButton onClick={onClick}>{message}</ModalGrayButton>}
      {type === "bigTransparent" && (
        <BigTransparentButton onClick={onClick}>{message}</BigTransparentButton>
      )}
      {type === "smallTransparent" && (
        <SmallTransparentButton onClick={onClick}>{message}</SmallTransparentButton>
      )}
      {type === "smallDark" && (
        <SmallDarkButton onClick={onClick}>{message}</SmallDarkButton>
      )}
      {type === "smallGray" && (
        <SmallGrayButton onClick={onClick}>{message}</SmallGrayButton>
      )}
      {type === "miniBlue" && (
        <MiniBlueButton onClick={onClick}>{message}</MiniBlueButton>
      )}
      {type === "miniRed" && <MiniRedButton onClick={onClick}>{message}</MiniRedButton>}
    </>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
