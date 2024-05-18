import styled, { keyframes } from "styled-components";
import { Container, BaseBox, Span } from "@/styles/StyledComponents";
import { Gradation } from "@/styles/CommonStyle";

const loading = keyframes`
  0%, 100% { opacity: 0.2; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-10px); }
`;

const Dot = styled(BaseBox)`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  animation: ${loading} 1s linear infinite;
  background-color: rgb(64 75 59);

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
    margin: 0px 10px;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const Spinner = () => {
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

export default Spinner;
