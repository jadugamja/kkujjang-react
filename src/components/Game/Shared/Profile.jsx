import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Player from "./Player";
import ProfileActiveToggle from "./ProfileActiveToggle";
import GameModal from "./GameModal";
import avatar from "@/assets/images/avatar.png";
import { FlexBox } from "@/styles/FlexStyle";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";

const init = {
  avatarUrl: avatar,
  nickname: ["닉네임", "닉네임"],
  level: ["레벨", 0],
  winRate: ["승률", 0],
  exp: ["경험치", "30%"],
  isBanned: "false",
  bannedReson: ""
};

const Profile = ({ type = "default", isAdmin, profileInfos = init }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isIncludingKey, setIsIncludingKey] = useState(false);
  const [isActiveAccount, setIsActiveAccount] = useState(
    profileInfos.isBanned === "true"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalOpen = () => {
    debugger;
  };

  return (
    <>
      {isPlaying ? (
        <Player
          avatarUrl={profileInfos.avatarUrl}
          nickname={profileInfos.nickname[1]}
          level={profileInfos.level[1]}
        />
      ) : type === "modal" ? (
        <ProfileWrapper type={type} dir="col">
          <ProfileUpperWrapper type={type}>
            <AvatarImage src={profileInfos.avatarUrl} />
            <ProfileInfoWrapper dir="col" row="center">
              {isIncludingKey
                ? Object.entries(profileInfos)?.map(([key, [title, value]], idx) => (
                    <ProfileInfoField row="between" key={idx}>
                      <ProfileInfoKey>{title}</ProfileInfoKey>
                      <ProfileInfo>{value}</ProfileInfo>
                    </ProfileInfoField>
                  ))
                : Object.entries(profileInfos)
                    .filter(([key]) => ["nickname", "level"].includes(key))
                    ?.map(([key, [title, value]], idx) => (
                      <ProfileInfo key={idx}>
                        {key === "nickname" ? value : `${title} ${value}`}
                      </ProfileInfo>
                    ))}
            </ProfileInfoWrapper>
          </ProfileUpperWrapper>
        </ProfileWrapper>
      ) : (
        <>
          <ProfileWrapper dir="col">
            <TitleBar>
              <FontAwesomeIcon icon={faUserLarge} style={{ fontSize: "12px" }} />
              <span>프로필</span>
            </TitleBar>
            <ProfileUpperWrapper onClick={() => setIsModalOpen(true)}>
              <AvatarImage src={profileInfos.avatarUrl} />
              <ProfileInfoWrapper dir="col" row="center">
                {isIncludingKey
                  ? Object.entries(profileInfos)?.map(([key, [title, value]], idx) => (
                      <ProfileInfoField row="between" key={idx}>
                        <ProfileInfoKey>{title}</ProfileInfoKey>
                        <ProfileInfo>{value}</ProfileInfo>
                      </ProfileInfoField>
                    ))
                  : Object.entries(profileInfos)
                      .filter(([key]) => ["nickname", "level"].includes(key))
                      ?.map(([key, [title, value]], idx) => (
                        <ProfileInfo key={idx}>
                          {key === "nickname" ? value : `${title} ${value}`}
                        </ProfileInfo>
                      ))}
              </ProfileInfoWrapper>
            </ProfileUpperWrapper>
            {!isIncludingKey && (
              <ExpWrapper row="center" col="center">
                <ExpBar>
                  <ProgressToNextLevel exp={profileInfos.exp[1]} />
                  <ExpText>{profileInfos.exp[1]}</ExpText>
                </ExpBar>
              </ExpWrapper>
            )}
          </ProfileWrapper>
          {isModalOpen ? (
            <GameModal type="profile" isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
          ) : null}
          {isAdmin && (
            <ProfileActiveToggle
              isActiveAccount={isActiveAccount}
              setIsActiveAccount={setIsActiveAccount}
            />
          )}
        </>
      )}
    </>
  );
};

Profile.propTypes = {
  type: PropTypes.string,
  isAdmin: PropTypes.bool,
  profileInfos: PropTypes.object
};

const ProfileWrapper = styled(FlexBox)`
  padding: 3px 5px;
  background-color: ${({ type }) =>
    type === "modal" ? "transparent" : "rgb(227 227 227)"};
  flex-grow: 1;
  border: ${({ type }) => type !== "modal" && "1px solid #ccc"};
  color: ${({ type }) => type === "modal" && "#fff"};
`;

const TitleBar = styled(FlexBox).attrs({
  col: "center"
})`
  width: 100%;
  height: 1.5rem;
  padding: 0 7px;
  background-color: rgba(221, 221, 221, 0.5);
  border-radius: 4px;
  box-shadow: 2px 2px 1px #00000025;
  font-size: 14px;
  font-weight: 700;
  opacity: 0.8;

  & > * + * {
    margin-left: 5px;
  }
`;

const ProfileUpperWrapper = styled(FlexBox)`
  padding: 12px 8px;

  &:hover {
    cursor: ${({ type }) => type !== "modal" && "pointer"};
  }
`;

const ProfileInfoWrapper = styled(FlexBox)`
  margin-left: 10px;
`;

const ProfileInfoField = styled(FlexBox)`
  width: 31.375rem;
`;

const ProfileInfoKey = styled.span``;

const ProfileInfo = styled.span``;

const AvatarImage = styled(FlexBox).attrs({
  as: "img"
})`
  width: ${(props) => (props.type === "player" ? "7.75rem" : "5.3rem")};
  height: ${(props) => (props.type === "player" ? "auto" : "")};
`;

// ============ Exp ============
const ExpWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "100%"};
  height: 2.625rem;
`;

const ExpBar = styled.div`
  width: 92%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 15px;
`;

const ProgressToNextLevel = styled.div`
  width: ${({ exp }) => exp};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray600};
  border-radius: 13px 0 0 13px;
`;

const ExpText = styled.span`
  position: relative;
  left: 43%;
  bottom: 33px;
  color: #fff;
  font-weight: 700;
`;

export default Profile;
