import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { FlexBox } from "@/styles/FlexStyle";
import Player from "./Player";
import ProfileActiveToggle from "./ProfileActiveToggle";

const init = {
  avatarUrl: "",
  nickname: ["닉네임", ""],
  level: ["레벨", 0],
  winRate: ["승률", 0],
  exp: ["경험치", 0],
  isBanned: "false",
  bannedReson: ""
};

const Profile = ({ isAdmin, profileInfos = init }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isIncludingKey, setIsIncludingKey] = useState(false);
  const [isActiveAccount, setIsActiveAccount] = useState(
    profileInfos.isBanned === "true"
  );

  return (
    <>
      {isPlaying ? (
        <Player
          avatarUrl={profileInfos.avatarUrl}
          nickname={profileInfos.nickname[1]}
          level={profileInfos.level[1]}
        />
      ) : (
        <>
          <ProfileWrapper>
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
          </ProfileWrapper>
          {!isIncludingKey && (
            <ExpWrapper>
              <ExpBar>
                <ProgressToNextLevel exp={profileInfos.exp[1]} />
                <ExpText>{profileInfos.exp[1]}</ExpText>
              </ExpBar>
            </ExpWrapper>
          )}
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
  isAdmin: PropTypes.bool,
  profileInfos: PropTypes.object
};

const ProfileWrapper = styled(FlexBox)``;

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
  width: ${(props) => (props.type === "player" ? "7.75rem" : "6rem")};
  height: ${(props) => (props.type === "player" ? "auto" : "5.304rem")};
`;

// ============ Exp ============
const ExpWrapper = styled(FlexBox)`
  width: ${(props) => props.width || "232px"};
  height: 2.625rem;
  margin-top: 16px;
`;

const ExpBar = styled.div`
  width: 100%;
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
