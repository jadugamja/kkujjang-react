import React from "react";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

import FormTitle from "@/components/Web/Shared/Form/FormTitle";
import PhoneNumberAuth from "@/components/Web/Shared/Form/PhoneNumberAuth";
import Button from "@/components/Web/Shared/Buttons/Button";

// ===== style ======
const FindidFormContainer = styled(FlexBox)`
  width: ${(props) => props.width || "48.75rem"};
  height: ${(props) => props.height || "fit-content"};
`;

const FindidText = styled.p`
  color: ${(props) => props.color || "#5E5C65"};
  font-family: "Noto Sans KR";
  font-size: ${(props) => props.fontSize || "19px"};
  font-weight: ${(props) => props.fontWeight || "200"};
`;

// ===== component ======
const FindidForm = () => {
  const [findidModalOpen, setFindidModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  // 인증번호 일치 결과 받아오기, modal 출력을 위한 임시 코드
  const handlePhoneNumberAuth = () => {
    const result = "success";
    const message = "성공";

    if (result === "success") {
      alert(message);
    } else {
      // 모달 출력
      setAuthModalOpen(true);
    }
  };

  // 아이디 조회 api 추가, modal 출력을 위한 임시 코드
  const handleFindid = () => {
    const result = "success";
    const message = "성공";

    if (result === "success") {
      alert(message);
    } else {
      // 모달 출력
      setFindidModalOpen(true);
    }
  };

  return (
    <FindidFormContainer dir="col">
      <FormTitle type="findid" marginTop="0px" marginBottom="0px"></FormTitle>
      {/* props */}
      {
        <>
          <FindidText>
            회원 가입 시 등록하신 휴대전화 번호로 인증을 진행해 주세요.
          </FindidText>
          <PhoneNumberAuth></PhoneNumberAuth>
        </>
      }
      {
        <>
          <FindidText>다음 정보로 가입된 아이디가 총 1개 있습니다.</FindidText>
          <Button type="smallBrown" message="로그인"></Button>
          <Button type="smallGray" message="비밀번호 찾기"></Button>
        </>
      }
    </FindidFormContainer>
  );
};

FindidForm.propTypes = {};

export default FindidForm;
