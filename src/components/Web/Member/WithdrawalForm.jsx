import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

// ===== hooks import =====
import useAxios from "@/hooks/useAxios";

// ===== components import =====
import FormTitle from "@/components/Web/Shared/Form/FormTitle";
import InputField from "@/components/Web/Shared/Form/InputField";
import Button from "@/components/Web/Shared/Buttons/Button";
import WebModal from "@/components/Web/Shared/Modal/WebModal";

// ===== style ======
const WithdrawalFormFlexContainer = styled(FlexBox)`
  width: ${(props) => props.width || "40.75rem"};
  height: ${(props) => props.height || "fit-content"};
`;

const WithdrawalFormContainer = styled.div`
  width: ${(props) => props.width || "40.75rem"};
  height: ${(props) => props.height || "fit-content"};

  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
`;

// ===== component ======
const WithdrawalForm = () => {
  // === ref ===
  const idRef = useRef(""); // 아이디
  const passwordRef = useRef(""); // 비밀번호

  // === state ===
  const [withdrawalModalOpen, setWithdrawalModalOpen] = useState(false); // 회원 탈퇴 modal state, 유효성 검사 실패 및 회원 탈퇴 실패 시, 회원 탈퇴 실패 modal 출력
  // (api 관련)
  const [apiConfig, setApiConfig] = useState(null);
  const { response, error, loading, fetchData } = useAxios(apiConfig, false);

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    if (apiConfig !== null) {
      fetchData();
    }
  }, [apiConfig]);

  // 회원 탈퇴
  const handleWithdrawal = () => {
    const id = idRef.current.value;
    const password = passwordRef.current.value;

    const idRegex = /^[a-z0-9]{7,30}$/;
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+{}|:"<>?]{7,30}$/;

    if (!idRegex.test(id) || !pwRegex.test(password)) {
      setWithdrawalModalOpen(true);
    } else {
      // 회원 탈퇴 API 코드
      setApiConfig({
        method: "delete",
        url: "/user"
      });

      if (response !== null) {
        // 홈으로 이동
        navigate(`/`);
      } else {
        setWithdrawalModalOpen(true);
      }

      // const result = true;
      // if (!result) {
      //   setWithdrawalModalOpen(true);
      // } else {
      //   // 홈으로 이동
      //   navigate(`/`);
      // }
    }
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <>
          {/* 탈퇴 실패 Modal */}
          {withdrawalModalOpen && (
            <WebModal setIsOpen={setWithdrawalModalOpen} hasButton={true}>
              회원 정보를 확인해 주세요.
            </WebModal>
          )}

          <WithdrawalFormFlexContainer dir="col">
            <FormTitle type="withdrawal" />

            {/* 아이디 input */}
            <WithdrawalFormContainer marginBottom="7px">
              <InputField name="id" inputRef={idRef} />
            </WithdrawalFormContainer>

            {/* 비밀번호 input */}
            <WithdrawalFormContainer marginBottom="15px">
              <InputField name="password" inputRef={passwordRef} />
            </WithdrawalFormContainer>

            {/* 탈퇴하기 button */}
            <Button type="bigBrown" message="탈퇴하기" onClick={handleWithdrawal} />
          </WithdrawalFormFlexContainer>
        </>
      )}
    </>
  );
};

export default WithdrawalForm;
