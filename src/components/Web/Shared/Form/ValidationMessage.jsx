import React from "react";
import PropTypes from "prop-types";

import { ValidationMessageWrapper, ValidationMessageP } from "./ValidationMessageStyle";

const ValidationMessage = ({ message, fontSize }) => {
  return (
    <ValidationMessageWrapper>
      <ValidationMessageP fontSize={fontSize}>{message}</ValidationMessageP>
    </ValidationMessageWrapper>
  );
};

ValidationMessage.propTypes = {
  message: PropTypes.string,
  fontSize: PropTypes.string
};

export default ValidationMessage;
