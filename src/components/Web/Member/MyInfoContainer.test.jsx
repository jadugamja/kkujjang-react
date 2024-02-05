import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

// ===== components import ======
import Button from "@/components/Web/Shared/Buttons/Button";

// ===== style ======
const InfoFlexBox = styled(FlexBox)``;
const InfoBox = styled.div``;
const InfoImg = styled.img``;
const InfoLinkButton = styled.a``;

// ===== component ======
const MyInfoContainer = () => {
  // === state ===
  const [isFixButtonClicked, setIsFixButtonClicked] = useState(false); // 수정 버튼 클릭됐는지 state

  // 프로필 조회 API 호출
  // 더미 데이터

  // 회원 정보 수정
  // 클릭 시, Input 으로
  const handleFixInfo = () => {};

  return (
    <InfoBox>
      <InfoFlexBox>
        <InfoBox>
          <InfoImg />
        </InfoBox>
        <InfoFlexBox>정보 어쩌고 저쩌고</InfoFlexBox>
      </InfoFlexBox>
      <InfoFlexBox row="between">
        <InfoLinkButton>회원 탈퇴</InfoLinkButton>
        <Button onClick={handleFixInfo}>수정하기</Button>
      </InfoFlexBox>
    </InfoBox>
  );
};

MyInfoContainer.propTypes = {};

export default MyInfoContainer;
