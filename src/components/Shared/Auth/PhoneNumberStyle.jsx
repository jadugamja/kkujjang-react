import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

export const Input = styled.input.attrs((props) => ({
  type: props.type
}))`
  ${({ type, theme }) =>
    (type === "text" || type === "password" || type === "email") &&
    `
    width: 100%;
    height: 4.3rem;
    padding: 10px 20px;
    background-color: #fff;
    border: 2px solid ${theme.colors.gray100};
    color: ${theme.colors.text.sub};
    font-size: ${theme.fontSize.s};
    font-weight: 500;

    &::placeholder {
      color: ${theme.colors.gray400};
    }
  `}
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray600};
`;

export const ContentWrapper = styled(FlexBox)`
  margin-top: 300px;
`;

export const ItemWrapper = styled(FlexBox)``;

// 작은 투명 버튼
export const SmallTransparentButton = styled.button`
  width: ${({ type }) => (type === "verification" ? "6.875rem" : "8.5rem")};
  height: 4.3rem;
  margin-left: ${({ type }) => (type === "verification" ? "15px" : 0)};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 700;
  background-color: transparent;
  color: #393939;
  border: 2px solid ${({ theme }) => theme.colors.gray500};

  &:hover {
    background-color: #ffffff32;
  }
`;

// ============ 전화번호 ============
export const PhoneNumberLabel = styled(Label)`
  width: 100%;
`;

export const PhoneNumberWrapper = styled(FlexBox)`
  margin-top: 5px;
`;

export const InputFieldsWrapper = styled(FlexBox)`
  flex-basis: 71%;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const PhoneNumberInput = styled(Input)`
  width: ${({ width }) => (width === "verification" ? "245px" : "124px")};
`;

export const Seperator = styled.span`
  color: ${({ theme }) => theme.colors.text.main};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
`;

// ============ 인증번호 ============
export const VerificationWrapper = styled(FlexBox)`
  margin-top: 32px;
`;

export const VerificationLabel = styled(Label)``;

export const VerificationInput = styled(Input)`
  width: 245px;
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export const TimerText = styled.span`
  position: relative;
  right: 61px;
  color: red;
`;
