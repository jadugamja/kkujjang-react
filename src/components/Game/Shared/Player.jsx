import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { FlexBox } from "@/styles/FlexStyle";
import AvatarCanvas from "./AvatarCanvas";
import avatarUrl from "@/assets/images/avatar.png";

const accessories = [
  "",
  "emo1",
  "emo2",
  "eye1",
  "eye2",
  "eye3",
  "head1",
  "head2",
  "fx1",
  "fx2"
];

const Player = ({ type = "wait", avatarAccessoryIndex, nickname, level }) => {
  const [avatarImage, setAvatarImage] = useState(null);

  return (
    <PlayerWrapper type={type} dir="col" row="center" col="center">
      <AvatarCanvas
        avatar={avatarUrl}
        item={accessories[avatarAccessoryIndex]}
        setAvatarImage={setAvatarImage}
        width={type === "play" ? "6.75rem" : "7.5rem"}
      />
      <PlayerInfoWrapper col="center" type={type}>
        <LevelBadge>{level}</LevelBadge>
        <NicknameText>{nickname}</NicknameText>
      </PlayerInfoWrapper>
    </PlayerWrapper>
  );
};

Player.propTypes = {
  type: PropTypes.string,
  avatarAccessoryIndex: PropTypes.number,
  nickname: PropTypes.string,
  level: PropTypes.number
};

const PlayerWrapper = styled(FlexBox)`
  width: ${({ type }) => type !== "play" && "9rem"};
  height: ${({ type }) => (type === "play" ? "9.75rem" : "11.2rem")};
`;

const PlayerInfoWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "7.5rem"};
  margin-top: ${({ type }) => (type === "play" ? "0" : "7px")};
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

const NicknameText = styled.span`
  overflow: hidden;
  white-space: nowrap;
  word-break: break-all;
`;

export default Player;
