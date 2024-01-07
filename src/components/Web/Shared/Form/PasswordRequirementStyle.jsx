import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

export const PasswordRequirementWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  padding-right: 10px;
`;

export const PasswordRequirementMeassage = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxxs};
  color: ${({ isCheck, theme }) =>
    isCheck ? theme.colors.success : theme.colors.gray300};
`;

export const CheckIconImage = styled.img`
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.height || "24px"};
`;
