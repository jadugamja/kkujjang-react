import styled from "styled-components";

export const ValidationMessageWrapper = styled.div`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
`;

export const ValidationMessageP = styled.p`
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color, theme }) => (color ? color : theme.colors.error)};
  margin: ${({ margin }) => margin || "0 3px"};
`;
