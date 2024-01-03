import styled from "styled-components";
// import { FlexBox } from "@/styles/FlexStyle";

// 메인 갈색 버튼
// export const PrimaryButtonWrapper = styled(FlexBox)`
//   width: 100%;
//   height: 4.5rem;
// `;

// ======= Button =======

// Web에서 주로 사용하는 갈색 Big Submit 버튼 (회원가입, 로그인, 탈퇴하기, 비밀번호 변경하기)
export const BigSubmitBrownButton = styled.button`
  width: 40.75rem;
  height: 4.688rem;
  background-color: ${({ theme }) => theme.colors.button.main.background};
  color: ${({ theme }) => theme.colors.button.main.text};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.main.hover};
  }
`;

// Web에서 사용하는 갈색 Small Submit 버튼
export const SmallSubmitBrownButton = styled.button`
  width: 15rem;
  height: 4.688rem;
  background-color: ${({ theme }) => theme.colors.button.main.background};
  color: ${({ theme }) => theme.colors.button.main.text};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.main.hover};
  }
`;

// Modal에서 주로 사용하는 회색 Submit 버튼
export const ModalGrayButton = styled.button`
  width: ${(props) => props.width || "13.063rem"};
  height: ${(props) => props.width || "3.625rem"};
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
  width: ${(props) => props.width || "9rem"};
  height: ${(props) => props.height || "4.3rem"};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.gray600};
  color: ${({ theme }) => theme.colors.text.sub};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;

  &:hover {
    background-color: #ffffff32;
  }
`;

// 작은 버튼
export const SmallButton = styled.button`
  width: ${(props) => props.width || "6rem"};
  height: ${(props) => props.width || "3rem"};
  font-size: ${({ theme }) => theme.fontSize.xxxs};
  font-weight: 700;
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

// 짙은 회색 작은 버튼
export const SmallDarkButton = styled(SmallButton)`
  background-color: #585858;
  color: #fff;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray600};
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

// Admin에서 주로 사용하는 미니 버튼
export const MiniButton = styled.button`
  width: ${(props) => props.width || "2.875rem"};
  height: ${(props) => props.height || "1.688rem"};
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.xxxxs};
  font-weight: 700;
`;

// 파랑 미니 버튼 (관리자 - 공지)
export const MiniBlueButton = styled(MiniButton)`
  border: 1px solid ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.success};
`;

// 빨강 미니 버튼 (관리자 - 공지)
export const MiniRedButton = styled(MiniButton)`
  border: 1px solid ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.error};
`;

// ======= IncrementButton, DecrementButton =======

export const ButtonWrapper = styled.button`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.width || "fit-content"};
  padding: 0;
  background-color: transparent;
`;
