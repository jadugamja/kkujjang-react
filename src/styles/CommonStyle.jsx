import styled from "styled-components";
import { FlexBox } from "./FlexStyle";

// 숨겨진 요소
export const Hidden = styled.div`
  display: none;
`;

// 웹 페이지 그라데이션 영역
export const Gradation = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 42.25rem;
  background-image: linear-gradient(#dbe1ed, #ffffff00);
  z-index: -1;
`;

// 콘텐츠 영역 감싸는 태그
export const ContentWrapper = styled(FlexBox)``;

// 넓은 콘텐츠 영역 (width: 1200px)
export const WideContent = styled(FlexBox)`
  width: ${(props) => props.width || "75rem"};
  height: 100vh;
`;

// 좁은 콘텐츠 영역 (width: 652px)
export const NarrowContent = styled(FlexBox)`
  width: 40.75rem;
  height: ${(props) => props.width || "fit-content"};
`;

// 페이지의 핵심 콘텐츠
export const Main = styled.main`
  margin-top: ${({ type }) =>
    type === "big" ? "10rem" : type !== "admin" ? "7.5rem" : "6.5rem"};
`;

// 작은 요소들을 감싸는 요소
export const SmallWrapper = styled(FlexBox)`
  flex-basis: ${(props) => props.width || auto};
  align-self: ${(props) => props.align || auto};
`;
