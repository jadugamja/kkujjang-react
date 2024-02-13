import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

// 입력칸의 제목 역할
export const Label = styled.label`
  font-size: 19px;
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
    height: 3.8rem;
    margin-top: 8px;
    padding: 10px 18px;
    background-color: #fff;
    border: 1px solid #ccc;
    color: ${theme.colors.text.sub};
    font-size: 19px;
    font-weight: 400;
  `}
`;
