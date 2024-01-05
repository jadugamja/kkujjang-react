import React, { useRef } from "react";
import PropTypes from "prop-types";

import { Label, Input } from "./InputFieldStyle";

const InputField = ({ inputType, hasLabel, label, placeholder }) => {
  const inputValueRef = useRef("");

  const handleValidation = (e) => {
    inputValueRef.current = {
      ...inputValueRef.current,
      [e.target.name || "value"]: e.target.value
    };

    console.log(inputValueRef.current["value"]);
    switch (e.target.name) {
      case "id":
        break;
      case "password":
        break;
      case "password_check":
        break;
    }
  };

  return (
    <>
      {hasLabel && <Label>{label}</Label>}
      {<Input type={inputType} placeholder={placeholder} onChange={handleValidation} />}
    </>
  );
};

InputField.propTypes = {
  inputType: PropTypes.string,
  hasLabel: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string
};

export default InputField;
