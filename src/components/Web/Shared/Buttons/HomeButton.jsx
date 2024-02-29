import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlexBox from "@/styles/FlexStyle";
import { Wrapper, Span } from "../../../Game/Shared/Layout";
import { faArrowRightFromBracket, faComment } from "@fortawesome/free-solid-svg-icons";

const HomeButton = ({ type }) => {
  return (
    <Wrapper dir="col" width="18.75rem" height="14rem" margin="0 72px 0 0">
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
              borderRadius="30px 30px 0 0"
            >
              <Span fontSize="3rem" color="#fff">
                로그인
              </Span>
            </FlexBox>
          </Link>
          <Link to="/">
            <FlexBox
              as="button"
              row="center"
              col="center"
              width="100%"
              height="4rem"
              bgColor="#FFDE00"
              borderRadius="0 0 30px 30px"
            >
              <FontAwesomeIcon icon={faComment} size="lg" />
              <Span fontSize="1.375rem" margin="0 5px">
                카카오로 로그인하기
              </Span>
            </FlexBox>
          </Link>
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
              bgColor="#DAF24C"
              shadow="inset 0 4px 35px 10px #FBFFE3"
              borderRadius="30px 30px 0 0"
            >
              <Span fontSize="2.8rem">게임 시작</Span>
            </FlexBox>
          </Link>
          <FlexBox row="between" col="center" height="4rem">
            <FlexBox
              col="center"
              flex="1"
              height="100%"
              padding="0 18px"
              bgColor="#E6E6E6"
              borderRadius="0 0  0 30px"
            >
              <Span
                font="Noto Sans KR"
                fontSize="1.375rem"
                fontWeight="700"
                margin="0 5px"
              >
                닉네임~~~
              </Span>
            </FlexBox>
            <Link to="/" height="100%">
              <FlexBox
                as="button"
                row="center"
                col="center"
                width="5rem"
                height="100%"
                bgColor="#FBFBFB"
                borderRadius="0 0 30px 0"
              >
                <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" />
              </FlexBox>
            </Link>
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
