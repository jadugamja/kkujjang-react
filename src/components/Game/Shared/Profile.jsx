import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import PropTypes from "prop-types";

import { userInfoState } from "@/recoil/userState";
import Player from "./Player";
import ProfileActiveToggle from "./ProfileActiveToggle";
import GameModal from "./GameModal";
import avatar from "@/assets/images/avatar.png";
import { FlexBox } from "@/styles/FlexStyle";
import TitleBar from "./TitleBar";

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
  const user = useRecoilValue(userInfoState);
  const [profile, setProfile] = useState(profileInfos);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isIncludingKey, setIsIncludingKey] = useState(false);
  const [isActiveAccount, setIsActiveAccount] = useState(
    profileInfos.isBanned === "true"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (user) {
      setProfile({
        ...profile,
        // nickname: ["닉네임", user.nickname],
        // level: ["레벨", user.level],
        // winRate: ["승률", user.winRate],
        // exp: ["경험치", user.exp],
        // isBanned: user.isBanned,
        avatarUrl: user.avatarUrl
      });
    }
  }, [user]);

  return (
    <>
      {isPlaying ? (
        <Player
          avatarUrl={profile.avatarUrl}
          nickname={profile.nickname[1]}
          level={profile.level[1]}
        />
      ) : type === "modal" ? (
        <ProfileWrapper type={type} dir="col">
          <ProfileUpperWrapper type={type}>
            <AvatarImage src={profile.avatarUrl} />
            <ProfileInfoWrapper dir="col" row="center">
              {isIncludingKey
                ? Object.entries(profile)?.map(([key, [title, value]], idx) => (
                    <ProfileInfoField row="between" key={key}>
                      <ProfileInfoKey>{title}</ProfileInfoKey>
                      <ProfileInfo>{value}</ProfileInfo>
                    </ProfileInfoField>
                  ))
                : Object.entries(profile)
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
            <TitleBar type="profile" />
            <ProfileUpperWrapper onClick={() => setIsModalOpen(true)}>
              <AvatarImage src={profile.avatarUrl} />
              <ProfileInfoWrapper dir="col" row="center">
                {isIncludingKey
                  ? Object.entries(profile)?.map(([key, [title, value]], idx) => (
                      <ProfileInfoField row="between" key={idx}>
                        <ProfileInfoKey>{title}</ProfileInfoKey>
                        <ProfileInfo>{value}</ProfileInfo>
                      </ProfileInfoField>
                    ))
                  : Object.entries(profile)
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
                  <ProgressToNextLevel exp={profile?.exp[1]} />
                  <ExpText>{profile?.exp[1]}</ExpText>
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

const ProfileUpperWrapper = styled(FlexBox)`
  padding: 8px;

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
