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

const Button = ({ type, message }) => {
  return (
    <>
      {type === "bigBrown" && <BigSubmitBrownButton>{message}</BigSubmitBrownButton>}
      {type === "smallBrown" && (
        <SmallSubmitBrownButton>{message}</SmallSubmitBrownButton>
      )}
      {type === "modal" && <ModalGrayButton>{message}</ModalGrayButton>}
      {type === "bigTransparent" && (
        <BigTransparentButton>{message}</BigTransparentButton>
      )}
      {type === "smallTransparent" && (
        <SmallTransparentButton>{message}</SmallTransparentButton>
      )}
      {type === "smallDark" && <SmallDarkButton>{message}</SmallDarkButton>}
      {type === "smallGray" && <SmallGrayButton>{message}</SmallGrayButton>}
      {type === "miniBlue" && <MiniBlueButton>{message}</MiniBlueButton>}
      {type === "miniRed" && <MiniRedButton>{message}</MiniRedButton>}
    </>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string
};

export default Button;
