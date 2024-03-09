import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

export const Input = styled.input.attrs((props) => ({
  type: props.type
}))`
  ${({ type, theme }) =>
    (type === "text" || type === "password" || type === "email") &&
    `
    width: 100%;
    height: 3.8rem;
    padding: 10px 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    color: ${theme.colors.text.sub};
    font-size: ${theme.fontSize.s};
    font-weight: 500;

    &::placeholder {
      color: ${theme.colors.gray400};
    }
  `}
`;

export const Label = styled.label`
  width: ${({ width }) => width || null};
  font-size: 19px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray600};
`;

export const ItemWrapper = styled(FlexBox)`
  margin-top: ${({ marginTop }) => marginTop || null};
  margin-bottom: ${({ marginBottom }) => marginBottom || null};
`;

export const CheckImg = styled.img`
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.height || "24px"};
  margin-right: ${(props) => props.marginTop || "3px"};
`;

// 작은 투명 버튼
export const SmallTransparentButton = styled.button`
  width: ${({ type }) => (type === "verification" ? "6rem" : "8.3rem")};
  height: 3.8rem;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 700;
  background-color: transparent;
  color: #393939;
  border: 2px solid ${({ theme }) => theme.colors.gray500};

  &:hover {
    background-color: #ffffff32;
  }
`;

export const SuccessBox = styled(FlexBox)`
  width: ${(props) => props.width || "8.3rem"};
  height: 3.8rem;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 700;
  background-color: #9f9f9f;
  color: #ffffff;
`;

// ============ 전화번호 ============
export const InputFieldsWrapper = styled(FlexBox)`
  flex-basis: 71%;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const PhoneNumberInput = styled(Input)`
  width: ${({ width }) => (width === "verification" ? "13rem" : "110px")};
`;

export const Seperator = styled.span`
  color: ${({ theme }) => theme.colors.text.main};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
`;

// ============ 인증번호 ============
export const VerificationInput = styled(Input)`
  width: 13rem;
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;
