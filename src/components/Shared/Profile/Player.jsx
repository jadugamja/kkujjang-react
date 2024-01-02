import PropTypes from "prop-types";

import {
  PlayerWrapper,
  AvatarImage,
  PlayerInfoWrapper,
  LevelBadge,
  NicknameText
} from "./ProfileStyle";

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

export default Player;
