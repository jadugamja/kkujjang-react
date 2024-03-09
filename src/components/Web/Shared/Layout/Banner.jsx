import styled from "styled-components";
import FlexBox from "@/styles/FlexStyle";
import bubble from "@/assets/images/bubble.png";

const Banner = () => {
  return (
    <FlexBox
      col="center"
      position="absolute"
      left="0"
      zIndex="-1"
      width="100%"
      height="26rem"
      bgColor="rgba(244, 244, 244, 0.4)"
      borderTop="1px solid rgba(24, 24,24 , 0.5)"
      borderBottom="1px solid rgba(24, 24,24 , 0.5)"
    >
      <Img src={bubble} />
    </FlexBox>
  );
};

const Img = styled.img`
  margin-left: 25%;
`;

export default Banner;
