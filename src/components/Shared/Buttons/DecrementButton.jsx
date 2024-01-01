import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { ButtonWrapper } from "./ButtonStyle";

const DecrementButton = () => {
  const [number, setNumber] = useState(0);

  const handleDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <ButtonWrapper onClick={handleDecrease}>
      <FontAwesomeIcon icon={faCaretDown} size="2x" />
    </ButtonWrapper>
  );
};

export default DecrementButton;
