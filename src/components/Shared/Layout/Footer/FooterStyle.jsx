import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

// 래퍼
export const FooterWrapper = styled(FlexBox)``;

// 푸터
export const FixedFooter = styled(FlexBox).attrs({
  as: "footer",
  row: "center",
  col: "center"
})`
  width: 100%;
  height: 1.5rem;
  position: fixed;
  bottom: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray500};
`;
