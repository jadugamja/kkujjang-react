import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

export const ProfileWrapper = styled(FlexBox)``;

export const ProfileInfoWrapper = styled(FlexBox)`
  margin-left: 10px;
`;

export const ProfileInfoField = styled(FlexBox)`
  width: 31.375rem;
`;

export const ProfileInfoKey = styled.span``;

export const ProfileInfo = styled.span``;

// ============ Player ============
export const PlayerWrapper = styled(FlexBox)`
  width: 8.75rem;
  height: 10.75rem;
`;

export const AvatarImage = styled(FlexBox).attrs({
  as: "img"
})`
  width: ${(props) => (props.type === "player" ? "7.75rem" : "6rem")};
  height: ${(props) => (props.type === "player" ? "auto" : "5.304rem")};
`;

export const PlayerInfoWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "7.5rem"};
  margin-top: 7px;
  font-size: ${(props) => props.size || "16px"};
`;

export const LevelBadge = styled(FlexBox).attrs({
  row: "center",
  col: "center"
})`
  width: ${(props) => props.width || "23px"};
  height: ${(props) => props.height || "26px"};
  margin-right: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
`;

export const NicknameText = styled.span``;

// ============ Exp ============
export const ExpWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "232px"};
  height: 2.625rem;
  margin-top: 16px;
`;

export const ExpBar = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 15px;
`;

export const ProgressToNextLevel = styled.div`
  width: ${({ exp }) => exp};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray600};
  border-radius: 13px 0 0 13px;
`;

export const ExpText = styled.span`
  position: relative;
  left: 43%;
  bottom: 33px;
  color: #fff;
  font-weight: 700;
`;

// ============ Active Toggle ============
export const ActiveToggle = styled(FlexBox)`
  width: 75px;
  height: 44px;
  background-color: ${({ active }) => (active ? "#fff" : "#D9D9D9")};
  border: 3px solid ${({ active }) => (active ? "#34E250" : "#787878")};
  border-radius: 22px;

  &:hover {
    cursor: pointer;
  }

  & > div {
    background-color: ${({ active }) => (active ? "#34E250" : "#787878")};
    margin-left: ${({ active }) => !active && "3px"};
    margin-right: ${({ active }) => active && "3px"};
  }
`;

export const ActiveCircle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;
