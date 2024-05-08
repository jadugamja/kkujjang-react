import styled from "styled-components";
import GridBox from "@/styles/GridStyle";
import bubble from "@/assets/images/bubble.png";

const Banner = () => {
  return (
    <GridBox
      cols="1fr 1fr 1fr 1fr"
      position="absolute"
      left="0"
      zIndex="-1"
      width="100%"
      height="26rem"
      margin="2rem 0 0"
      bgColor="rgba(244, 244, 244, 0.4)"
      borderTop="1px solid rgba(24, 24,24 , 0.5)"
      borderBottom="1px solid rgba(24, 24,24 , 0.5)"
    >
      <Img src={bubble} />
    </GridBox>
  );
};

const Img = styled.img`
  grid-column: 2;
  align-self: center;
  height: fit-content;
`;

export default Banner;
