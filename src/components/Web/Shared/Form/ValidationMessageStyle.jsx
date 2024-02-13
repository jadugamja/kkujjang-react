import styled from "styled-components";

export const ValidationMessageWrapper = styled.div`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
`;

export const ValidationMessageP = styled.p`
  font-size: ${({ fontSize }) => fontSize || "16px"};
  color: ${({ theme }) => theme.colors.error};
  margin: 0;
`;
