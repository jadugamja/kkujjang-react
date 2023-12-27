import styled from "styled-components";
import { FlexBox } from "./FlexStyle";
import { Link } from "react-router-dom";

// 숨겨진 요소
export const Hidden = styled.div`
  display: none;
`;

// 헤더
export const FixedHeader = styled(FlexBox).attrs(({ type }) => ({
  as: "header",
  row: type === "big" ? "center" : "between",
  col: "center"
}))`
  position: fixed;
  top: 0;
  width: inherit;
  height: ${({ type }) => (type === "big" ? "10rem" : "7.5rem")};
  background-color: transparent;
  z-index: 3;
`;

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

// 로고 이미지
export const Logo = styled.img`
  ${({ type }) => setLogoSize(type)}

  &:hover {
    cursor: pointer;
  }
`;

// 탭 버튼
export const SpringTab = styled(FlexBox).attrs({ row: "center", col: "center" })`
  width: 7rem;
  height: ${(props) => (props.clicked ? "2.5rem" : "3.25rem")};
  background-color: ${(props) => {
    if (props.type === "detail") {
      return props.clicked ? props.theme.colors.content : props.theme.colors.paleBlueGray;
    } else {
      return "transparent";
    }
  }};
  border-radius: 15px 15px 0 0;
  padding-top: 14px;
  font-family: "Gugi";
  font-size: 19px;
  color: #4e4e4e;
  align-self: flex-end;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => {
      if (props.type === "detail") {
        return props.clicked ? "#F2F2F2" : "#94a7c1";
      } else {
        return "transparent";
      }
    }};
  }
`;

// 아래로 향하는 링크
export const BottomLink = styled(Link)`
  align-self: flex-end;
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

// 두루두루 쓰이는 감싸는 태그
export const Wrapper = styled(FlexBox)``;

// 콘텐츠 영역 감싸는 태그
export const ContentWrapper = styled(FlexBox)``;

// 넓은 콘텐츠 영역 (width: 1200px)
export const WideContent = styled(FlexBox)`
  width: 75rem;
  height: 100vh;
`;

// 좁은 콘텐츠 영역 (width: 652px)
export const NarrowContent = styled(FlexBox)`
  width: 40.75rem;
  height: 100vh;
`;

// 작은 요소들을 감싸는 요소
export const SmallWrapper = styled(FlexBox)`
  flex-basis: ${(props) => props.width || auto};
  align-self: ${(props) => props.align || auto};
`;

// 입력칸의 제목 역할
export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.xs};
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

// 메인 갈색 버튼
export const PrimaryButtonWrapper = styled(FlexBox)`
  width: 100%;
  height: 4.5rem;
`;

// 메인 갈색 버튼
export const PrimaryButton = styled.button`
  width: 100%;
  height: inherit;
  background-color: ${({ theme }) => theme.colors.button.main.background};
  color: ${({ theme }) => theme.colors.button.main.text};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.main.hover};
  }
`;

// 서브 회색 버튼 (모달 등에서 사용)
export const SecondaryButton = styled.button`
  width: 13.063rem;
  height: 3.625rem;
  background-color: ${({ theme }) => theme.colors.gray100};
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  color: ${({ theme }) => theme.colors.gray600};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray400};
  }
`;

// 큰 투명 버튼
export const BigTransparentButton = styled.button`
  width: 9rem;
  height: 4.3rem;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.gray600};
  color: ${({ theme }) => theme.colors.text.sub};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;

  &:hover {
    background-color: #ffffff32;
  }
`;

// 모달 안에서 창 닫을 때 쓰이는 작은 동그라미 버튼
export const ExitMiniCircle = styled.button`
  width: 1.125rem;
  height: 1.125rem;
  background-color: ${({ theme }) => theme.colors.error};
  border-radius: 50%;

  &:hover {
    background-color: #cf5757;
  }
`;

// 작은 버튼
export const SmallButton = styled.button`
  width: 6rem;
  height: 3rem;
  font-size: ${({ theme }) => theme.fontSize.xxxs};
  font-weight: 700;
`;

// 짙은 회색 작은 버튼
export const SmallDarkButton = styled(SmallButton)`
  background-color: #585858;
  color: #fff;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray600};
  }
`;

// 작은 투명 버튼
export const SmallTransparentButton = styled(SmallButton)`
  background-color: transparent;
  color: #000;
  border: 1px solid #000;

  &:hover {
    background-color: #ffffff32;
  }
`;

// 작은 옅은 회색 버튼
export const SmallGrayButton = styled(SmallButton)`
  background-color: #aaa;
  color: #000;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray400};
  }
`;

// 미니 버튼 (관리자 페이지에서 주로 쓰임)
export const MiniButton = styled.button`
  width: 2.875rem;
  height: 1.688rem;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.xxxxs};
  font-weight: 700;
`;

// 파랑 미니 버튼
export const MiniBlueButton = styled(MiniButton)`
  border: 1px solid ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.success};
`;

// 빨강 미니 버튼
export const MiniRedButton = styled(MiniButton)`
  border: 1px solid ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.error};
`;

export const setLogoSize = (type) => {
  switch (type) {
    case "big":
      return `
        width: 6.75rem;
      `;
    default:
      return `
        width: 5rem;
      `;
  }
};
