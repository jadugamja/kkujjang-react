import React from "react";
import PropTypes from "prop-types";

import { ValidationMessageWrapper, ValidationMessageP } from "./ValidationMessageStyle";

const ValidationMessage = ({ message, fontSize, fontWeight, color, margin }) => {
  return (
    <ValidationMessageWrapper>
      <ValidationMessageP
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        margin={margin}
      >
        {message}
      </ValidationMessageP>
    </ValidationMessageWrapper>
  );
};

ValidationMessage.propTypes = {
  message: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string
};

export default ValidationMessage;
