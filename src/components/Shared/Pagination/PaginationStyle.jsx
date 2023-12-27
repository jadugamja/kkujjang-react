import styled from "styled-components";
import FlexBox from "@/styles/FlexStyle";

//
export const PaginationWrapper = styled(FlexBox)`
  margin-top: 200px;
  width: 100%;
  height: 30px;
`;

// 버튼
export const FirstButton = styled.button`
  width: 30px;
  height: fit-content;
  content: "<<";
`;

export const PrevListButton = styled.button`
  width: 30px;
  height: fit-content;
  content: "<";
`;

export const NextListButton = styled.button`
  width: 30px;
  height: fit-content;
  content: ">";
`;

export const LastButton = styled.button`
  width: 30px;
  height: fit-content;
  content: ">>";
`;

// 페이지 번호
export const PageList = styled(FlexBox)``;

export const PageItem = styled.button`
  color: ${({ active }) => (active ? "red" : "gray")};
`;
