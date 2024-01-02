import React, { useState } from "react";
import PropTypes from "prop-types";

import Player from "./Player";
import {
  ProfileWrapper,
  AvatarImage,
  ProfileInfoWrapper,
  ProfileInfoField,
  ProfileInfoKey,
  ProfileInfo,
  ExpWrapper,
  ExpBar,
  ProgressToNextLevel,
  ExpText,
  ActiveToggle,
  ActiveCircle
} from "./ProfileStyle";

const Profile = ({ isAdmin, profileInfos }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isIncludingKey, setIsIncludingKey] = useState(false);
  const [isActiveAccount, setIsActiveAccount] = useState(
    profileInfos.isBanned === "true"
  );

  const handleToggle = () => {
    if (isActiveAccount) {
      // 임시
      alert("계정을 비활성화하시겠습니까?");
    } else {
      // 임시
      alert("계정을 활성화시키겠습니까?");
    }
    setIsActiveAccount(!isActiveAccount);
  };

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
                ? Object.entries(profileInfos).map(([key, [title, value]], idx) => (
                    <ProfileInfoField row="between" key={idx}>
                      <ProfileInfoKey>{title}</ProfileInfoKey>
                      <ProfileInfo>{value}</ProfileInfo>
                    </ProfileInfoField>
                  ))
                : Object.entries(profileInfos)
                    .filter(([key]) => ["nickname", "level"].includes(key))
                    .map(([key, [title, value]], idx) => (
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
            <ActiveToggle
              col="center"
              row={isActiveAccount ? "end" : "start"}
              active={isActiveAccount}
              onClick={handleToggle}
            >
              <ActiveCircle />
            </ActiveToggle>
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

Profile.defaultProps = {
  isAdmin: false,
  profileInfos: {
    avatarUrl: "",
    nickname: ["닉네임", ""],
    level: ["레벨", 0],
    winRate: ["승률", 0],
    exp: ["경험치", 0],
    isBanned: "false",
    bannedReson: ""
  }
};

export default Profile;
