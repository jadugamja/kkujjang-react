import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import PropTypes from "prop-types";

import avatar from "@/assets/images/avatar.png";
import leftArrow from "@/assets/images/left-arrow.png";
import rightArrow from "@/assets/images/right-arrow.png";
import { FlexBox } from "@/styles/FlexStyle";
import useAxios from "@/hooks/useAxios";
import { userInfoState } from "@/recoil/userState";
import Player from "./Player";
import GameModal from "./GameModal";
import { ArrowIconImage, GameModalInput } from "./GameModalStyle";
import TitleBar from "./TitleBar";
import AvatarCanvas from "./AvatarCanvas";
import ValidationMessage from "@/components/Web/Shared/Form/ValidationMessage";
import { NICKNAME_REGEX } from "../../../services/regexp";
import { remoteApiConfigState } from "@//recoil/boardState"


const init = {
  avatarUrl: avatar,
  nickname: ["닉네임", "닉네임"],
  level: ["레벨", 0],
  winRate: ["승률", 0],
  exp: ["경험치", "30%"],
  isBanned: "false",
  bannedReson: ""
};

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

const Profile = ({ type = "default", userId, profileInfos = init, isEditMode }) => {
  const setUser = useSetRecoilState(userInfoState);
  const [profile, setProfile] = useState(profileInfos);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isIncludingKey, setIsIncludingKey] = useState(false);
  const [isWrongNickname, setIsWrongNickname] = useState(false);
  const [modalType, setModalType] = useState("profile");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currAvatar, setCurrAvatar] = useState(0);
  const [avatarImage, setAvatarImage] = useState(null);
  const [cookies] = useCookies(["sessionId", "userId"]);
  const [apiConfig, setApiConfig] = useState({
    method: "get",
    url: `/user/${!userId ? "me" : userId}`,
    headers: { sessionId: cookies.sessionId }
  })
  const remoteApiConfig = useRecoilValue(remoteApiConfigState)
  const { response, loading, error, fetchData } = useAxios(apiConfig, false);

  useEffect(() => {
    if (apiConfig !== null) {
      fetchData();
    }
  }, [apiConfig]);

  useEffect(() => {
    if (remoteApiConfig !== null) {
      setApiConfig(remoteApiConfig);
    }
  }, [remoteApiConfig]);

  useEffect(() => {
    if (response !== null) {
      const data = response.result;
      const avatarAccessory = accessories[data.avatarAccessoryIndex];
      setProfile({
        nickname: ["닉네임", data.nickname],
        level: ["레벨", data.level],
        winRate: ["승률", data.winRate],
        exp: ["경험치", data.exp],
        avatarUrl: avatarAccessory
      });
      setUser((prev) => ({
        ...prev,
        nickname: data.nickname,
        level: data.level,
        winRate: data.winRate,
        exp: data.exp,
        avatarUrl: avatarAccessory
      }));
    }
  }, [response]);

  const onNicknameChange = (e) => {
    setProfile({
      ...profile,
      nickname: ["닉네임", e.target.value]
    });
    setUser((prev) => ({ ...prev, nickname: e.target.value }));
  };

  const onNicknameBlur = (e) => {
    if (!NICKNAME_REGEX.test(e.target.value)) {
      setUser((prev) => ({ ...prev, nickname: "" }));
      setIsWrongNickname(true);
      return;
    } else {
      setIsWrongNickname(false);
    }
  };

  const onSwitchAvatarClick = (dir) => {
    let index;
    if (dir === "left") {
      index = currAvatar > 0 ? currAvatar - 1 : accessories.length - 1;
    } else if (dir === "right") {
      index = (currAvatar + 1) % accessories.length;
    }

    setCurrAvatar(index);
    setUser((prev) => ({ ...prev, avatarUrl: index }));
  };

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
            {isEditMode ? (
              <FlexBox col="center">
                <ArrowIconImage
                  src={leftArrow}
                  onClick={() => onSwitchAvatarClick("left")}
                />
                <AvatarCanvas
                  avatar={avatar}
                  item={accessories[currAvatar]}
                  setAvatarImage={setAvatarImage}
                />
                <ArrowIconImage
                  src={rightArrow}
                  onClick={() => onSwitchAvatarClick("right")}
                />
              </FlexBox>
            ) : (
              <AvatarCanvas
                avatar={avatar}
                item={profile.avatarUrl}
                setAvatarImage={setAvatarImage}
                width="7rem"
              />
            )}
            <ProfileInfoWrapper dir="col" row="center" marginLeft={isEditMode && "16px"}>
              {isIncludingKey
                ? Object.entries(profile)?.map(([key, [title, value]]) => (
                    <ProfileInfoField row="between" key={key}>
                      <ProfileInfoKey>{title}</ProfileInfoKey>
                      <ProfileInfo>{value}</ProfileInfo>
                    </ProfileInfoField>
                  ))
                : Object.entries(profile)
                    .filter(([key]) => ["nickname", "level", "winRate"].includes(key))
                    ?.map(([key, [title, value]]) => (
                      <div key={key}>
                        <span>{key !== "nickname" && title}</span>
                        {isEditMode && key === "nickname" ? (
                          <>
                            <GameModalInput
                              type="text"
                              value={value.replace(/#[\s\S]*$/, "")}
                              onChange={onNicknameChange}
                              onBlur={onNicknameBlur}
                              height="1.5rem"
                              padding="0"
                              bgColor="transparent"
                              color="#fff"
                              fontSize="20px"
                            />
                            {isWrongNickname && (
                              <ValidationMessage
                                message="잘못된 닉네임입니다."
                                fontSize="14px"
                                margin="0"
                              />
                            )}
                          </>
                        ) : (
                          <ProfileInfo
                            margin={key !== "nickname" && "0 0 0 15px"}
                            fontSize={key === "nickname" && "20px"}
                          >
                            {value}
                          </ProfileInfo>
                        )}
                      </div>
                    ))}
            </ProfileInfoWrapper>
          </ProfileUpperWrapper>
        </ProfileWrapper>
      ) : (
        <>
          <ProfileWrapper dir="col">
            <TitleBar type="profile" />
            <ProfileUpperWrapper
              onClick={() => {
                setModalType("profile");
                setIsModalOpen(true);
              }}
            >
              <AvatarCanvas
                avatar={avatar}
                item={profile.avatarUrl}
                setAvatarImage={setAvatarImage}
                width="5.4rem"
              />
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
          {isModalOpen && (
            <GameModal
              type={modalType}
              setType={setModalType}
              isOpen={isModalOpen}
              setIsOpen={setIsModalOpen}
              userId={cookies.userId}
              height="14rem"
            />
          )}
        </>
      )}
    </>
  );
};

Profile.propTypes = {
  type: PropTypes.string,
  userId: PropTypes.number,
  profileInfos: PropTypes.object,
  isEditMode: PropTypes.bool
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
  min-height: 6rem;
  padding: 8px;

  &:hover {
    cursor: ${({ type }) => type !== "modal" && "pointer"};
  }
`;

const ProfileInfoWrapper = styled(FlexBox)`
  margin-left: ${({ marginLeft }) => marginLeft || "10px"};
`;

const ProfileInfoField = styled(FlexBox)`
  width: 31.375rem;
`;

const ProfileInfoKey = styled.span``;

const ProfileInfo = styled.span`
  margin: ${({ margin }) => margin};
  font-size: ${({ fontSize }) => fontSize};
`;

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
