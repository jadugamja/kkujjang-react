import React from "react";
import PropTypes from "prop-types";

import { ValidationMessageWrapper, ValidationMessageP } from "./ValidationMessageStyle";

const ValidationMessage = ({ message, fontSize, fontWeight, color }) => {
  return (
    <ValidationMessageWrapper>
      <ValidationMessageP fontSize={fontSize} fontWeight={fontWeight} color={color}>
        {message}
      </ValidationMessageP>
    </ValidationMessageWrapper>
  );
};

ValidationMessage.propTypes = {
  message: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  color: PropTypes.string
};

export default ValidationMessage;
