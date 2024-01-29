import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

// ===== components import =====
import FormTitle from "@/components/Web/Shared/Form/FormTitle";
import InputField from "@/components/Web/Shared/Form/InputField";
import Button from "@/components/Web/Shared/Buttons/Button";
import WebModal from "@/components/Web/Shared/Form/ValidationMessage";

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
  // === state ===
  const [withdrawalModalOpen, setWithdrawalModalOpen] = useState(false); // 회원 탈퇴 성공 여부 state

  // 유효성 검사 및 예외처리
  const handleValidation = () => {};

  // 회원 탈퇴
  const handleWithdrawal = () => {
    // 유효성 검사 통과 시, 회원 탈퇴 API 호출
    // 유효성 검사 실패 및 회원 탈퇴 실패 시, 회원 탈퇴 실패 modal 출력
    setWithdrawalModalOpen(true);
  };

  return (
    <>
      {withdrawalModalOpen && (
        <WebModal hasButton={true} message="회원 정보를 확인해 주세요." />
      )}
      <WithdrawalFormFlexContainer dir="col">
        <FormTitle type="withdrawal" />
        <WithdrawalFormContainer marginBottom="7px">
          <InputField name="id" />
        </WithdrawalFormContainer>
        <WithdrawalFormContainer marginBottom="15px">
          <InputField name="password" />
        </WithdrawalFormContainer>
        <Button type="bigBrown" message="탈퇴하기" onClick={handleWithdrawal} />
      </WithdrawalFormFlexContainer>
    </>
  );
};

WithdrawalForm.propTypes = {};

export default WithdrawalForm;
