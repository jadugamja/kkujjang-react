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
