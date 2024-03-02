import PropTypes from "prop-types";
import styled from "styled-components";

import { FlexBox } from "@/styles/FlexStyle";

const Player = ({ type = "wait", avatarUrl, nickname, level }) => {
  return (
    <PlayerWrapper type={type} dir="col" row="center" col="center">
      <AvatarImage type={type} src={avatarUrl} />
      <PlayerInfoWrapper col="center">
        <LevelBadge>{level}</LevelBadge>
        <NicknameText>{nickname}</NicknameText>
      </PlayerInfoWrapper>
    </PlayerWrapper>
  );
};

Player.propTypes = {
  type: PropTypes.string,
  avatarUrl: PropTypes.string,
  nickname: PropTypes.string,
  level: PropTypes.number
};

const PlayerWrapper = styled(FlexBox)`
  width: ${({ type }) => type !== "play" && "9rem"};
  height: ${({ type }) => (type === "play" ? "9.75rem" : "10.75rem")};
`;

const AvatarImage = styled(FlexBox).attrs({
  as: "img"
})`
  width: ${({ type }) => (type === "play" ? "6.75rem" : "7.25rem")};
  height: ${({ type }) => type === "play" && "auto"};
`;

const PlayerInfoWrapper = styled(FlexBox)`
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
  margin: 0px 6px 0 2px;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
`;

const NicknameText = styled.span``;

export default Player;
