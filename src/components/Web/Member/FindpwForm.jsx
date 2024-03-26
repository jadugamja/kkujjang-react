import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

// ===== hooks import =====
import useAxios from "@/hooks/useAxios";

// ===== components import =====
import FormTitle from "@/components/Web/Shared/Form/FormTitle";
import InputField from "@/components/Web/Shared/Form/InputField";
import PhoneNumberAuth from "@/components/Web/Shared/Form/PhoneNumberAuth";
import WebModal from "@/components/Web/Shared/Modal/WebModal";

// ===== style ======
const FindpwFormFlexContainer = styled(FlexBox)`
  width: ${(props) => props.width || "100%"};
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
  // (modal 관련)
  const [authModalOpen, setAuthModalOpen] = useState(false); // 인증번호 불일치 시 출력되는 인증번호 불일치 알림 modal state
  const [findidModalOpen, setFindidModalOpen] = useState(false); // 아이디 조회 실패 시 출력되는 아이디 조회 실패 알림 modal state
  // (api 관련)
  const [apiConfig, setApiConfig] = useState(null);
  const { response, error, loading, fetchData } = useAxios(apiConfig, false);

  // === navigate ===
  const navigate = useNavigate();

  // === cookie ===
  const [cookies, setCookie] = useCookies(["smsAuthId", "passwordChangeAuthId"]);

  useEffect(() => {
    if (apiConfig !== null) {
      fetchData();
    }
  }, [apiConfig]);

  useEffect(() => {
    if (response !== null) {
      if (apiConfig?.url.startsWith("/user/find/pw")) {
        setCookie("passwordChangeAuthId", response.passwordChangeAuthId);
        navigate(`/member/change-pw`);
      }
    } else {
      if (apiConfig?.url.startsWith("/user/find/pw")) {
        setFindidModalOpen(true);
      }
    }
  }, [response, error]);

  // 인증번호 검증
  const handlePhoneNumberAuth = (response, phoneNumber) => {
    if (response !== null) {
      // 성공 시, 비밀번호 찾기 함수 호출
      handleFindpw(phoneNumber);
    } else {
      // 경고 모달 출력
      setAuthModalOpen(true);
      handleReload();
    }
  };

  // 비밀번호 찾기
  const handleFindpw = (phoneNumber) => {
    const id = idRef.current.value;
    const idRegex = /^[a-z0-9]{7,30}$/;

    if (!idRegex.test(id)) {
      setFindidModalOpen(true);
    } else {
      // 비밀번호 찾기 계정 존재 검증 API 코드
      setApiConfig({
        method: "post",
        url: "/user/find/pw",
        headers: { smsAuthId: cookies.smsAuthId },
        data: {
          username: id,
          phone: phoneNumber
        }
      });
    }
  };

  // modal event
  const handleModalOpen = () => {
    if (findidModalOpen == true) {
      setFindidModalOpen(false);
      window.location.reload();
    } else if (authModalOpen == true) {
      setAuthModalOpen(false);
    }
  };

  return (
    <>
      {/* 인증 실패 modal */}
      {authModalOpen && (
        <WebModal onClick={handleModalOpen} hasButton={true}>
          인증번호가 일치하지 않습니다.
        </WebModal>
      )}

      {/* 아이디 찾기 실패 modal */}
      {findidModalOpen && (
        <WebModal onClick={handleModalOpen} hasButton={true}>
          아이디가 존재하지 않습니다.
        </WebModal>
      )}

      <FindpwFormFlexContainer dir="col">
        <FormTitle type="findpw" marginTop="0px" marginBottom="0px"></FormTitle>
        <FindpwText>
          회원 가입 시 등록하신 휴대전화 번호로 인증을 진행해 주세요.
        </FindpwText>

        {/* 아이디 input */}
        <FindpwFormFlexContainer dir="col" marginBottom="15px">
          <InputField hasLabel={true} name="id" inputRef={idRef} />
        </FindpwFormFlexContainer>

        {/* 전화번호 인증 */}
        <PhoneNumberAuth onVerificationResult={handlePhoneNumberAuth} />
      </FindpwFormFlexContainer>
    </>
  );
};

export default FindpwForm;
