import React from "react";
import PropTypes from "prop-types";

import { ValidationMessageWrapper, ValidationMessageP } from "./ValidationMessageStyle";

const ValidationMessage = ({ message }) => {
  return (
    <ValidationMessageWrapper>
      <ValidationMessageP>{message}</ValidationMessageP>
    </ValidationMessageWrapper>
  );
};

ValidationMessage.propTypes = {
  message: PropTypes.string
};

export default ValidationMessage;
