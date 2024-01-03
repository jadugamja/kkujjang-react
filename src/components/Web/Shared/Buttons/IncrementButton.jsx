import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

import { ButtonWrapper } from "./ButtonStyle";

const IncrementButton = () => {
  const [number, setNumber] = useState(0);

  const handleIncrease = () => {
    setNumber(number + 1);
  };

  return (
    <ButtonWrapper onClick={handleIncrease}>
      <FontAwesomeIcon icon={faCaretUp} size="2x" />
    </ButtonWrapper>
  );
};

export default IncrementButton;
