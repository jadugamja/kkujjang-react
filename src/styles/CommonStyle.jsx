import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  ${(props) => setDirection(props.dir)}
  ${(props) => setHorizontalAlign(props.row)}
  ${(props) => setVerticalAlign(props.col)}
`;

export const Gradation = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 42.25rem;
  background-image: linear-gradient(#dbe1ed, #00000000);
  z-index: -1;
`;

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

export const MainLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray500};
`;

export const MainInput = styled.input.attrs((props) => ({
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

export const PrimaryButtonWrapper = styled(FlexBox)`
  width: 100%;
  height: 4.5rem;
`;

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

export const SecondaryButton = styled.button`
  width: 13.063rem;
  height: 3.625rem;
  background-color: ${({ theme }) => theme.colors.gray100};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  color: ${({ theme }) => theme.colors.gray600};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;
`;

export const TransparentButton = styled.button`
  width: 8.625rem;
  height: 4.3rem;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.gray500};
  color: ${({ theme }) => theme.colors.text.sub};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;
`;

// 모달 안에서 창 닫을 때 쓰이는 작은 동그라미 버튼
export const ExitMiniCircle = styled.button`
  width: 1.125rem;
  height: 1.125rem;
  background-color: ${({ theme }) => theme.colors.error};
  border-radius: 50%;
`;

export const MiniButton = styled.button`
  width: 2.875rem;
  height: 1.688rem;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.xxxxs};
  font-weight: 700;
`;

export const UpdateButton = styled(MiniButton)`
  border: 1px solid ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.success};
`;

export const DeleteButton = styled(MiniButton)`
  border: 1px solid ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.error};
`;

// flex-box의 flex-direction 설정
const setDirection = (dir) => {
  switch (dir) {
    case "col":
      return ` flex-direction: column; `;
  }
};

// flex-box 안의 justify-content 값 설정
const setHorizontalAlign = (row) => {
  switch (row) {
    case "center":
      return ` justify-content: center; `;
    case "start":
      return ` justify-content: flex-start; `;
    case "end":
      return ` justify-content: flex-end; `;
    case "between":
      return ` justify-content: space-between; `;
  }
};

// flex-box 안의 align-items 값 설정
const setVerticalAlign = (col) => {
  switch (col) {
    case "center":
      return ` align-items: center; `;
    case "start":
      return ` align-items: flex-start; `;
    case "end":
      return ` align-items: flex-end; `;
    case "baseline":
      return ` align-items: baseline; `;
    case "stretch":
      return ` align-items: stretch; `;
  }
};
