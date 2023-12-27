import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlexBox from "@/styles/FlexStyle";

// 페이지네이션을 감싸는 태그
export const PaginationWrapper = styled(FlexBox)`
  margin-top: 200px;
  width: 100%;
  height: 30px;
`;

// 페이지네이션에 쓰이는 공통 버튼 스타일
export const PaginationButton = styled(FontAwesomeIcon)`
  margin: 8px;
  font-size: 1.25rem;
  color: #687587;
  cursor: pointer;
`;

// 맨 앞으로 가기 버튼
export const FirstButton = styled(PaginationButton)``;

// 이전 페이지 리스트로 가기 버튼
export const PrevListButton = styled(PaginationButton)``;

// 다음 페이지 리스트로 가기 버튼
export const NextListButton = styled(PaginationButton)``;

// 맨 마지막으로 가기 버튼
export const LastButton = styled(PaginationButton)``;

// 페이지 번호를 감싸는 태그
export const PageList = styled(FlexBox)``;

// 페이지 번호
export const PageItem = styled.button`
  background-color: transparent;
  font-family: "Pretendard Variable";
  width: 32px;
  height: 32px;
  font-size: ${({ theme }) => theme.fontSize.xxxs};
  margin: 0 2px;
  font-weight: ${({ active }) => (active ? "700" : "500")};
  color: ${({ active }) => (active ? "#2C333C" : "#B0B5BE")};
  text-decoration: ${({ active }) => (active ? "underline" : "none")};

  &:hover {
    background-color: #ffffff90;
    border-radius: 50%;
  }
`;
