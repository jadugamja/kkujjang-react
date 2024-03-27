import { Link } from "react-router-dom";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

export const SideContentWrapper = styled(FlexBox)`
  width: 16.5rem;
  height: 100%;
`;

export const MainContentWrapper = styled(FlexBox)`
  max-width: 100%;
  flex-grow: 1;
`;

export const Box = styled.div`
  width: ${({ type }) => (type === "home" ? "28rem" : "40.5rem")};
  height: ${({ type }) => (type === "home" ? "43.6rem" : "49.6rem")};
  padding: 10px 22px;
  background-color: #fff;
  border-radius: ${({ type }) => (type === "home" ? "25px" : "10px")};
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.25);
  overflow-y: ${({ overflowY }) => overflowY};
`;

export const Main = styled.main`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  max-width: ${({ maxWidth }) => maxWidth};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background-color: ${({ bgColor }) => bgColor};
  border-top: ${({ borderTop }) => borderTop};
  border-right: ${({ borderRight }) => borderRight};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-left: ${({ borderLeft }) => borderLeft};
  border-radius: ${({ borderRadius }) => borderRadius};
  z-index: ${({ zIndex }) => zIndex};
`;

export const Wrapper = styled(FlexBox)`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  max-width: ${({ maxWidth }) => maxWidth};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background-color: ${({ bgColor }) => bgColor};
  border-top: ${({ borderTop }) => borderTop};
  border-right: ${({ borderRight }) => borderRight};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-left: ${({ borderLeft }) => borderLeft};
  border-radius: ${({ borderRadius }) => borderRadius};
  z-index: ${({ zIndex }) => zIndex};
`;

export const SpacingWrapper = styled(FlexBox)`
  & > * + * {
    margin-top: ${({ spacingY }) => spacingY && spacingY};
    margin-left: ${({ spacingX }) => spacingX && spacingX};
  }
`;

export const BodyWrapper = styled(FlexBox)`
  width: 100%;
  height: 100%;
  border: 1px solid #7d7d7d;
`;

export const UpperWrapper = styled(FlexBox)`
  height: 100%;
  max-height: 26.65rem;
  padding: 3px 5px;
  background-color: ${({ type }) => (type === "play" ? "#889E7D" : "#f3f3f3")};
`;

export const Span = styled.span`
  margin: ${({ margin }) => margin || "0"};
  font-family: ${({ font }) => font || "Gugi"};
  font-size: ${({ fontSize }) => fontSize || "21px"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  color: ${({ color }) => color || "inherit"};
`;

export const StyledLink = styled(Link)`
  width: ${({ width }) => width};
`;
