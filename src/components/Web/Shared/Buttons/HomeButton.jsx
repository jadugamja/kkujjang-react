import { useRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlexBox from "@/styles/FlexStyle";
import { Wrapper, Span } from "../../../Game/Shared/Layout";
import { faArrowRightFromBracket, faComment } from "@fortawesome/free-solid-svg-icons";
import { LevelBadge } from "../../../Game/Shared/Player";
import { KAKAO_LOGIN_LINK } from "@/services/const";
import { userState } from "@/recoil/userState";
import useAxios from "@/hooks/useAxios";
import { useEffect } from "react";

const HomeButton = ({ type }) => {
  const [user, setUser] = useRecoilState(userState);
  const [cookies] = useCookies(["sessionId"]);
  const { response, loading, error, fetchData } = useAxios(
    {
      method: "get",
      url: "/user/signout",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.sessionId}`
      }
    },
    false
  );

  useEffect(() => {
    if (response !== null) {
      setUser(null);
    }
  }, [response]);

  const onLogout = () => {
    fetchData();
  };

  return (
    <Wrapper dir="col" width="19.75rem" height="14rem" margin="0 72px 0 0">
      {type === "guest" ? (
        <>
          <Link to="/member/login" flex="1">
            <FlexBox
              as="button"
              row="center"
              col="center"
              flex="1"
              padding="15px 0 0"
              bgColor="rgba(0,0,0, 0.7)"
              shadow=" 0 4px 10px 0 rgba(0, 0, 0, 0.25)"
              borderRadius="30px 30px 0 0"
            >
              <Span
                font="Pretendard Variable"
                fontSize="60px"
                fontWeight="800"
                color="#fff"
              >
                로그인
              </Span>
            </FlexBox>
          </Link>
          <a href={KAKAO_LOGIN_LINK}>
            <FlexBox
              as="button"
              row="center"
              col="center"
              width="100%"
              height="4rem"
              bgColor="#FFDE00"
              shadow=" 0 4px 10px 0 rgba(0, 0, 0, 0.25)"
              borderRadius="0 0 30px 30px"
            >
              <FontAwesomeIcon icon={faComment} size="lg" />
              <Span fontSize="1.375rem" margin="0 5px">
                카카오로 로그인하기
              </Span>
            </FlexBox>
          </a>
        </>
      ) : (
        <>
          <Link to="/game" flex="1">
            <FlexBox
              as="button"
              row="center"
              col="center"
              flex="1"
              padding="15px 0 0"
              bgColor="#FFFB6A"
              shadow=" 0 4px 10px 0 rgba(0, 0, 0, 0.25)"
              borderRadius="30px 30px 0 0"
            >
              <Span font="Pretendard Variable" fontSize="60px" fontWeight="800">
                게임 시작
              </Span>
            </FlexBox>
          </Link>
          <FlexBox row="between" col="center" height="4rem">
            {/* User Info */}
            <FlexBox
              col="center"
              flex="1"
              height="100%"
              padding="0 18px"
              bgColor="#E6E6E6"
              shadow=" 0 4px 10px 0 rgba(0, 0, 0, 0.25)"
              borderRadius="0 0  0 30px"
            >
              <LevelBadge>{!user?.level ? 3 : user?.level}</LevelBadge>
              <Span font="Noto Sans KR" fontSize="1.2rem" fontWeight="700">
                {!user?.nickname ? "끝짱1" : user?.nickname}
              </Span>
            </FlexBox>
            {/* logout */}
            <FlexBox
              as="button"
              row="center"
              col="center"
              width="5rem"
              height="100%"
              bgColor="#FBFBFB"
              shadow=" 3px 4px 10px 0 rgba(0, 0, 0, 0.25)"
              borderRadius="0 0 30px 0"
              onClick={onLogout}
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" />
            </FlexBox>
          </FlexBox>
        </>
      )}
    </Wrapper>
  );
};

HomeButton.propTypes = {
  type: PropTypes.string.isRequired
};

const Link = styled(RouterLink)`
  display: flex;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex: ${({ flex }) => flex};
`;

export default HomeButton;
