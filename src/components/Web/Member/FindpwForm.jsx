import React from "react";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

import FormTitle from "@/components/Web/Shared/Form/FormTitle";
import InputField from "@/components/Web/Shared/Form/InputField";
import PhoneNumberAuth from "@/components/Web/Shared/Form/PhoneNumberAuth";

// ===== style ======
const FindpwFormContainer = styled(FlexBox)`
  width: ${(props) => props.width || "48.75rem"};
  height: ${(props) => props.height || "fit-content"};
`;

const FindpwText = styled.p`
  color: ${(props) => props.color || "#5E5C65"};
  font-family: "Noto Sans KR";
  font-size: ${(props) => props.fontSize || "19px"};
  font-weight: ${(props) => props.fontWeight || "200"};
`;

// ===== component ======
const FindpwForm = () => {
  // 인증번호 일치 결과 받아오기, modal 출력을 위한 임시 코드
  // 아이디 조회 api 추가, modal 출력을 위한 임시 코드 (성공 시, 실패 시 modal)
  return (
    <FindpwFormContainer dir="col">
      <FormTitle type="findpw" marginTop="0px" marginBottom="0px"></FormTitle>
      <FindpwText>회원 가입 시 등록하신 휴대전화 번호로 인증을 진행해 주세요.</FindpwText>
      <InputField hasLabel={true} name="id"></InputField>
      <PhoneNumberAuth></PhoneNumberAuth>
    </FindpwFormContainer>
  );
};

FindpwForm.propTypes = {};

export default FindpwForm;
