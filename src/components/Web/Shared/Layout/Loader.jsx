import styled, { keyframes } from "styled-components";
import { Container, BaseBox } from "@/styles/StyledComponents";
import { Gradation } from "@/styles/CommonStyle";

const loading = keyframes`
  0%, 100% {
    opacity: 0.2;
    transform: translateY(0); 
  }
  25%, 75% {
    transform: translateY(18px); 
  }
   50% {
    opacity: 0.8;
    transform: translateY(18px);
  }
`;

const Dot = styled(BaseBox)`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  animation: ${loading} 1.2s linear infinite;
  background-color: rgb(64 75 59);

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
    margin: 0 14px;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const Loader = () => {
  return (
    <>
      <Container
        $display="flex"
        $row="center"
        $col="center"
        $width="100vw"
        $height="100vh"
      >
        <Dot />
        <Dot />
        <Dot />
      </Container>
    </>
  );
};

export default Loader;
