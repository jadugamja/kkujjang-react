import styled from "styled-components";
import banner from "@/assets/images/banner.png";

const Banner = () => {
  return <Img src={banner} />;
};

const Img = styled.img`
  position: absolute;
  left: 17%;
  z-index: -1;
`;

export default Banner;
