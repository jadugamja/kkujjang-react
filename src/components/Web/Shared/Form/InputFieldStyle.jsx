import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

// 입력칸의 제목 역할
export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray600};
`;

// 입력칸
// type이 text, password, email인 경우에만 스타일 적용
export const Input = styled.input.attrs((props) => ({
  type: props.type
}))`
  ${({ type, theme }) =>
    (type === "text" || type === "password" || type === "email") &&
    `
    width: 100%;
    height: 4.3rem;
    margin-top: 8px;
    padding: 10px 20px;
    background-color: #fff;
    border: 2px solid ${theme.colors.gray100};
    color: ${theme.colors.text.sub};
    font-size: ${theme.fontSize.s};
    font-weight: 500;
  `}
`;
