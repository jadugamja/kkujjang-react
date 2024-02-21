import React from "react";
import styled from "styled-components";
import FlexBox from "@/styles/FlexStyle";
import { Wrapper } from "../../../Game/Shared/Layout";

const GameButton = () => {
  return (
    <Wrapper
      dir="col"
      width="18.75rem"
      height="14rem"
      margin="0 72px 0 0"
      borderRadius="30px"
    >
      <div>로그인</div>
      <div>카카오 로그인</div>
    </Wrapper>
  );
};

const Div = styled.div`
  width: 18.75rem;
  height: 14rem;
  border-radius: 30px;
  background-color: #f5f5f5;
  margin-right: 72px;
`;

export default GameButton;
