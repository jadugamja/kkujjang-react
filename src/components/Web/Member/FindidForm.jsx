import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

// ===== components import =====
import FormTitle from "@/components/Web/Shared/Form/FormTitle";
import PhoneNumberAuth from "@/components/Web/Shared/Form/PhoneNumberAuth";
import Button from "@/components/Web/Shared/Buttons/Button";
import WebModal from "@/components/Web/Shared/Modal/WebModal";

// ===== style ======
const FindidFormFlexContainer = styled(FlexBox)`
  width: ${(props) => props.width || "42rem"};
  height: ${(props) => props.height || "fit-content"};

  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
`;

const FindidText = styled.p`
  color: ${(props) => props.color || "#5E5C65"};
  font-family: "Noto Sans KR";
  font-size: ${(props) => props.fontSize || "19px"};
  font-weight: ${(props) => props.fontWeight || "200"};
`;

const IdLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray600};
  margin-left: ${(props) => props.marginLeft || null};
`;

const IdText = styled.p`
  font-weight: 700;
  margin: 0;
  margin-right: ${(props) => props.marginRight || null};
`;

const FindButton = styled.button`
  width: 15rem;
  height: 4.688rem;
  background-color: ${({ theme }) => theme.colors.gray100};
  color: #434343;
  font-size: 28px;
  font-weight: 700;
  margin-left: ${(props) => props.marginLeft || null};
`;

// ===== component ======
const FindidForm = () => {
  const [hasUserInfo, setHasUserInfo] = useState(false); // 아이디 조회 state
  const [isAuthMath, setIsAuthMath] = useState(false); // 인증번호 일치 state
  const [userId, setUserId] = useState(""); // 아이디 출력 state
  // (modal 관련)
  const [findidModalOpen, setFindidModalOpen] = useState(false); // 아이디 조회 실패 시 출력되는 아이디 조회 실패 알림 modal state
  const [authModalOpen, setAuthModalOpen] = useState(false); // 인증번호 불일치 시 출력되는 인증번호 불일치 알림 modal state

  // 인증번호 검증
  const handlePhoneNumberAuth = () => {
    // 인증번호 검증 API 코드

    const result = "success";

    if (result === "success") {
      setIsAuthMath(true);
      // 성공 시, 아이디 조회
      // 아이디 조회 함수 호출
      handleFindid();
    } else {
      // 경고 모달 출력
      setAuthModalOpen(true);
    }
  };

  // 아이디 조회
  const handleFindid = () => {
    // 유효성 검사 및 예외처리 코드
    // 아이디 조회 API 코드
    const result = "jephpp123";

    // 조회 성공 시 (string 넘어오면)
    if (result === "jephpp123") {
      setHasUserInfo(true);
      setUserId("jephpp123");
    }
    // 조회 실패 시
    else {
      // 모달 출력
      setFindidModalOpen(true);
    }
  };

  return (
    <>
      {authModalOpen && (
        <WebModal
          setIsOpen={setAuthModalOpen}
          hasButton={true}
          message="인증번호가 일치하지 않습니다."
        />
      )}
      {findidModalOpen && (
        <WebModal
          setIsOpen={setFindidModalOpen}
          hasButton={true}
          message="아이디가 존재하지 않습니다."
        />
      )}
      <FindidFormFlexContainer dir="col">
        <FormTitle type="findid" marginTop="0px" marginBottom="0px"></FormTitle>
        {!hasUserInfo ? (
          <>
            <FindidText>다음 정보로 가입된 아이디가 총 1개 있습니다.</FindidText>
            <FindidFormFlexContainer row="between" width="30rem" marginTop="50px">
              <IdLabel marginLeft="20px">아이디</IdLabel>
              <IdText marginRight="20px">{userId}</IdText>
            </FindidFormFlexContainer>
            <FindidFormFlexContainer marginTop="50px">
              <Button type="smallBrown" message="로그인" />
              <FindButton marginLeft="15px">비밀번호 찾기</FindButton>
            </FindidFormFlexContainer>
          </>
        ) : (
          <>
            <FindidText>
              회원 가입 시 등록하신 휴대전화 번호로 인증을 진행해 주세요.
            </FindidText>
            <PhoneNumberAuth />
          </>
        )}
      </FindidFormFlexContainer>
    </>
  );
};

FindidForm.propTypes = {};

export default FindidForm;
