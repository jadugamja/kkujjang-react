import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

export const GameModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.7;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const GameModalContent = styled(FlexBox)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.width || "26rem"};
  height: ${(props) => props.height || "14.8rem"};
  border-radius: ${(props) => props.borderRadius || "10px"};
  background-color: #23282d;
  z-index: 11;
`;

export const GameModalHeader = styled(FlexBox)`
  width: ${(props) => props.width || "25.188rem"};
  height: ${(props) => props.width || "1.5rem"};
  border-radius: ${(props) => props.borderRadius || "6px"};
  background-color: #d5ecf890;
  padding: 0 6px;
  margin-top: 7px;
  flex-shrink: 0;
`;

export const GameModalBody = styled(FlexBox)`
  position: relative;
  top: ${({ top }) => top || "26px"};
  flex-direction: column;
  width: 100%;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding || "10px 14px"};
  flex-grow: 1;

  & > * + * {
    margin-top: ${({ marginTop }) => marginTop || "22px"};
  }
`;

export const GameModalMessage = styled.p`
  height: ${(props) => props.height || "fit-content"};
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSize.xxxs};
  font-weight: ${({ fontWeight }) => fontWeight || "600"};
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

export const GameModalLongMessage = styled.textarea.attrs({ readonly: true })`
  flex: 1;
  width: 100%;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.xxxs};
  font-weight: 500;
  color: #fff4e3;
  margin: 0;
  padding: 0 15px;
  border: 0;
`;

export const ButtonWrapper = styled(FlexBox)`
  width: 100%;
  margin: ${({ margin }) => margin || "10px 0px 32px"};
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
  height: ${(props) => props.height || "3rem"};
  background-color: #e5e5e5;
  font-size: 16px;
`;

export const VolumeWrapper = styled(FlexBox)`
  position: absolute;
  width: calc(100% - 20px);
  height: 156px;
  padding: 5px;
`;

export const GameModalInputWrapper = styled.div`
  height: ${(props) => props.height || "fit-content"};
  padding: 10px;
  padding-top: ${(props) => props.paddingTop || null};
  padding-bottom: ${(props) => props.paddingBottom || null};
`;

export const GameModalInput = styled.input`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "3rem"};
  margin-bottom: ${(props) => props.marginBottom || null};
  padding: ${({ padding }) => padding || "10px"};
  border: 0;
  background-color: ${({ bgColor }) => bgColor || "#e5e5e5"};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize || "16px"};
`;

export const ArrowIconImage = styled.img`
  width: ${(props) => props.width || "35px"};
  height: ${(props) => props.width || "48px"};
  margin: ${(props) => props.margin};

  &:hover {
    cursor: pointer;
  }
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

export const Table = styled.table`
  max-width: 100%;
  width: 100%;
  margin: ${({ margin }) => margin || "1.3rem 0"};
`;

export const Tbody = styled.tbody`
  & > * + * {
    margin-top: 7px;
  }
`;

export const Tr = styled(FlexBox).attrs({ as: "tr" })`
  background-color: ${({ bgColor }) => bgColor || "transparent"};
`;

export const TdLabel = styled.td`
  width: ${({ width }) => width || "7.5rem"};
  text-align: ${({ textAlign }) => textAlign || "left"};
  flex-shrink: 0;
`;

export const TdContent = styled(FlexBox).attrs({ as: "td" })`
  padding: ${({ padding }) => padding};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-grow: ${({ flexGrow }) => flexGrow || 1};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};

  & > * + * {
    margin-bottom: 10px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: ${({ height }) => height};
  padding: 4px 5px;
  font-size: ${({ fontSize }) => fontSize};
`;

export const Label = styled.label`
  margin: ${({ margin }) => margin};
`;
