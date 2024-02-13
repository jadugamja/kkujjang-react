import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

// ===== components import =====
import FormTitle from "@/components/Web/Shared/Form/FormTitle";
import InputField from "@/components/Web/Shared/Form/InputField";
import PhoneNumberAuth from "@/components/Web/Shared/Form/PhoneNumberAuth";
import WebModal from "@/components/Web/Shared/Modal/WebModal";

// ===== style ======
const FindpwFormFlexContainer = styled(FlexBox)`
  width: ${(props) => props.width || "42rem"};
  height: ${(props) => props.height || "fit-content"};

  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
`;

const FindpwText = styled.p`
  color: ${(props) => props.color || "#5E5C65"};
  font-family: "Noto Sans KR";
  font-size: ${(props) => props.fontSize || "19px"};
  font-weight: ${(props) => props.fontWeight || "200"};
`;

// ===== component ======
const FindpwForm = () => {
  // === ref ===
  const idRef = useRef(""); // 아이디

  // === state ===
  const [isAuthMath, setIsAuthMath] = useState(false); // 인증번호 일치 state
  const [authModalOpen, setAuthModalOpen] = useState(false); // 인증번호 불일치 시 출력되는 인증번호 불일치 알림 modal state
  const [changePwModalOpen, setChangePwModalOpen] = useState(false); // 비밀번호 조회 성공 시 (회원 정보 존재 시) 출력되는 비밀번호 변경 modal state
  const [findidModalOpen, setFindidModalOpen] = useState(false); // 아이디 조회 실패 시 출력되는 아이디 조회 실패 알림 modal state

  // 인증번호 검증
  const handlePhoneNumberAuth = () => {
    // 인증번호 검증 API 코드
    const result = "success";

    if (result === "success") {
      setIsAuthMath(true);
      // 성공 시, 비밀번호 찾기 함수 호출
      handleFindpw();
    } else {
      // 경고 모달 출력
      setAuthModalOpen(true);
    }
  };

  // 비밀번호 찾기
  const handleFindpw = () => {
    const id = idRef.current.value;
    const idRegex = /^[a-z0-9]{7,30}$/;

    if (!idRegex.test(id)) {
      // 아이디 유효성 검사 및 전화번호 인증 통과 시, 비밀번호 변경 모달 출력
      setChangePwModalOpen(true);
    } else {
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
      {changePwModalOpen && (
        <WebModal
          setIsOpen={setChangePwModalOpen}
          hasButton={true}
          isMoving={true}
          message="아이디가 조회되었습니다. 비밀번호를 변경하시겠습니까?"
        />
      )}
      {findidModalOpen && (
        <WebModal
          setIsOpen={setFindidModalOpen}
          hasButton={true}
          message="아이디가 존재하지 않습니다."
        />
      )}
      <FindpwFormFlexContainer dir="col">
        <FormTitle type="findpw" marginTop="0px" marginBottom="0px"></FormTitle>
        <FindpwText>
          회원 가입 시 등록하신 휴대전화 번호로 인증을 진행해 주세요.
        </FindpwText>
        <FindpwFormFlexContainer dir="col" marginBottom="15px">
          <InputField hasLabel={true} name="id" inputRef={idRef} />
        </FindpwFormFlexContainer>
        <PhoneNumberAuth></PhoneNumberAuth>
      </FindpwFormFlexContainer>
    </>
  );
};

FindpwForm.propTypes = {};

export default FindpwForm;
