import React from "react";
import PropTypes from "prop-types";

import {
  PasswordRequirementWrapper,
  PasswordRequirementMeassage,
  CheckIconImage
} from "./PasswordRequirementStyle";
import hoveredCheck from "@/assets/images/blue-check.png";
import defaultCheck from "@/assets/images/gray-check.png";

const PasswordRequirement = ({ isCheck, message }) => {
  return (
    <PasswordRequirementWrapper col="center">
      <PasswordRequirementMeassage isCheck={isCheck}>
        {message}
      </PasswordRequirementMeassage>
      <CheckIconImage
        isCheck={isCheck}
        src={isCheck ? hoveredCheck : defaultCheck}
      ></CheckIconImage>
    </PasswordRequirementWrapper>
  );
};

PasswordRequirement.propTypes = {
  isCheck: PropTypes.bool,
  message: PropTypes.string
};

export default PasswordRequirement;
