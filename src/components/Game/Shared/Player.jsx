import PropTypes from "prop-types";
import styled from "styled-components";

import { FlexBox } from "@/styles/FlexStyle";

const Player = ({ avatarUrl, nickname, level }) => {
  return (
    <PlayerWrapper dir="col" row="center" col="center">
      <AvatarImage src={avatarUrl} type="player" />
      <PlayerInfoWrapper col="center">
        <LevelBadge>{level}</LevelBadge>
        <NicknameText>{nickname}</NicknameText>
      </PlayerInfoWrapper>
    </PlayerWrapper>
  );
};

Player.propTypes = {
  avatarUrl: PropTypes.string,
  nickname: PropTypes.string,
  level: PropTypes.number
};

const PlayerWrapper = styled(FlexBox)`
  width: 9rem;
  height: 10.75rem;
`;

const AvatarImage = styled(FlexBox).attrs({
  as: "img"
})`
  width: ${(props) => (props.type === "player" ? "7.5rem" : "6rem")};
  height: ${(props) => (props.type === "player" ? "auto" : "5.304rem")};
`;

const PlayerInfoWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "7.5rem"};
  margin-top: 7px;
  font-size: ${(props) => props.size || "16px"};
`;

const LevelBadge = styled(FlexBox).attrs({
  row: "center",
  col: "center"
})`
  width: ${(props) => props.width || "23px"};
  height: ${(props) => props.height || "26px"};
  margin: 0 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
`;

const NicknameText = styled.span``;

export default Player;
