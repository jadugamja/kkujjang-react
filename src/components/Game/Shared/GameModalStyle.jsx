import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

export const GameModalBackground = styled.div`
  width: 1920px;
  height: 1072px;
  background-color: #000000;
  opacity: 0.7;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const GameModalWrapper = styled.div`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  border-radius: ${(props) => props.borderRadius || null};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const GameModalContent = styled(FlexBox)`
  width: ${(props) => props.width || "26rem"};
  height: ${(props) => props.height || "15.625rem"};
  border-radius: ${(props) => props.borderRadius || "10px"};
  background-color: #23282d;
`;

export const GameModalHeader = styled(FlexBox)`
  width: ${(props) => props.width || "25.188rem"};
  height: ${(props) => props.width || "1.5rem"};
  border-radius: ${(props) => props.borderRadius || "10px"};
  background-color: #abc6d3;
  opacity: 0.5;
  padding-right: 10px;
  margin-top: 10px;
`;

export const GameModalMessage = styled.p`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  font-size: ${(props) => props.fontSize || "25px"};
  font-weight: 700;
  color: #fff4e3;
  margin: 0;
  padding-bottom: ${(props) => props.paddingBottom || null};
  padding-right: ${(props) => props.paddingRight || null};
`;

export const GameModalSubMessage = styled.p`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  font-size: ${(props) => props.fontSize || "18px"};
  color: #fff;
  margin: 0;
`;

export const GameModalMessageWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "23rem"};
  height: ${(props) => props.height || "fit-content"};
`;

export const GameModalButton = styled.button`
  width: ${(props) => props.width || "7rem"};
  height: ${(props) => props.width || "2.75rem"};
  font-size: ${({ theme }) => theme.fontSize.xxxs};
  font-weight: 700;
  background-color: transparent;
  color: #fff;
  border: 1px solid #aaa;

  &:hover {
    background-color: #ffffff32;
  }
`;

export const GameModalSelect = styled.select`
  width: ${(props) => props.width || "16.063rem"};
  height: ${(props) => props.height || "2.625rem"};
  background-color: #e5e5e5;
`;

export const GameModalInputWrapper = styled.div`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  margin: 10px;
  padding-top: ${(props) => props.paddingTop || null};
  padding-bottom: ${(props) => props.paddingBottom || null};
`;

export const GameModalInput = styled.input`
  width: ${(props) => props.width || "22.938rem"};
  height: ${(props) => props.height || "3.313rem"};
  margin-bottom: ${(props) => props.marginBottom || null};
  border: 0;
  background-color: #e5e5e5;
`;

export const GameModalAvatarWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  padding-bottom: 30px;
`;
export const AvatarImage = styled.img`
  width: ${(props) => props.width || "136px"};
  height: ${(props) => props.width || "121px"};
  padding: 15px;
`;

export const ArrowIconImage = styled.img`
  width: ${(props) => props.width || "42px"};
  height: ${(props) => props.width || "48px"};
`;

export const ExitMiniCircle = styled.button`
  width: 1.125rem;
  height: 1.125rem;
  background-color: ${({ theme }) => theme.colors.error};
  border-radius: 50%;

  &:hover {
    background-color: #cf5757;
  }
`;
