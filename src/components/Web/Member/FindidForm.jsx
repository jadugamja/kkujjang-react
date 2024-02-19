import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

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
  // === state ===
  const [hasUserInfo, setHasUserInfo] = useState(false); // 아이디 조회 state
  const [userId, setUserId] = useState("jephpp123"); // 아이디 출력 state
  // (modal 관련)
  const [findidModalOpen, setFindidModalOpen] = useState(false); // 아이디 조회 실패 시 출력되는 아이디 조회 실패 알림 modal state
  const [authModalOpen, setAuthModalOpen] = useState(false); // 인증번호 불일치 시 출력되는 인증번호 불일치 알림 modal state

  // === navigate ===
  const navigate = useNavigate();

  // 전화번호 인증
  const handlePhoneNumberAuth = (result) => {
    if (!result) {
      // 경고 모달 출력
      setAuthModalOpen(true);
    } else {
      // 성공 시, 아이디 조회 함수 호출
      handleFindid();
    }
  };

  // 아이디 조회
  const handleFindid = () => {
    // 아이디 조회 API 코드

    // 프론트엔드 테스트를 위한 백엔드 임시 코드
    const result = true;

    if (!result) {
      setFindidModalOpen(true);
    } else {
      setHasUserInfo(true);
    }
  };

  const handleMoveLogin = () => {
    navigate(`/member/login`);
  };

  const handleMoveFindpw = () => {
    navigate(`/member/find?type=pw`);
  };

  return (
    <>
      {/* 인증 실패 modal */}
      {authModalOpen && (
        <WebModal
          setIsOpen={setAuthModalOpen}
          hasButton={true}
          message="인증번호가 일치하지 않습니다."
        />
      )}

      {/* 아이디 찾기 실패 modal */}
      {findidModalOpen && (
        <WebModal
          setIsOpen={setFindidModalOpen}
          hasButton={true}
          message="아이디가 존재하지 않습니다."
        />
      )}

      <FindidFormFlexContainer dir="col">
        <FormTitle type="findid" marginTop="0px" marginBottom="0px" />
        {hasUserInfo ? (
          <>
            {/* 아이디 찾기 성공 시, 결과 출력부 */}
            <FindidText>다음 정보로 가입된 아이디가 총 1개 있습니다.</FindidText>
            <FindidFormFlexContainer row="between" width="30rem" marginTop="50px">
              <IdLabel marginLeft="20px">아이디</IdLabel>
              <IdText marginRight="20px">{userId}</IdText>
            </FindidFormFlexContainer>
            <FindidFormFlexContainer marginTop="50px">
              <Button type="smallBrown" message="로그인" onClick={handleMoveLogin} />
              <FindButton marginLeft="15px" onClick={handleMoveFindpw}>
                비밀번호 찾기
              </FindButton>
            </FindidFormFlexContainer>
          </>
        ) : (
          <>
            {/* 전화번호 인증 */}
            <FindidText>
              회원 가입 시 등록하신 휴대전화 번호로 인증을 진행해 주세요.
            </FindidText>
            <PhoneNumberAuth onVerificationResult={handlePhoneNumberAuth} />
          </>
        )}
      </FindidFormFlexContainer>
    </>
  );
};

export default FindidForm;
