import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

// ===== components import ======
import Button from "@/components/Web/Shared/Buttons/Button";
import Avartar from "@/assets/images/avatar.png";

// ===== style ======
const InfoFlexBox = styled(FlexBox)`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
`;
const InfoBox = styled.div`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  border: 1px solid #000000;
`;
const InfoImg = styled.img``;
const InfoLinkButton = styled.a`
  width: ${(props) => props.width || "fit-content"};
  color: ${(props) => props.color || "#929292"};
  font-size: ${(props) => props.fontSize || "18px"};
`;
const InfoText = styled.p`
  color: ${(props) => props.color || "#5C5447"};
  font-size: ${(props) => props.fontSize || "24px"};
  margin-top: 0;
  margin-bottom: 0;
  margin-left: ${(props) => props.marginLeft || "0"};
`;
const InfoInput = styled.input`
  width: ${(props) => props.width || "390px"};
  color: ${(props) => props.color || "#5C5447"};
  font-size: ${(props) => props.fontSize || "24px"};
  margin-left: ${(props) => props.marginLeft || "0"};
  background-color: transparent;
  border: 0;
`;
const Table = styled.table`
  margin-left: ${(props) => props.marginLeft || "0"};
`;

// const init = {
//   avatarUrl: Avartar,
//   nickname: "메롱메롱",
//   level: 40,
//   winRate: ["승률", 0],
//   exp: ["경험치", "30%"],
//   isBanned: "false",
//   bannedReson: ""
// };

// ===== component ======
const MyInfoContainer = () => {
  // === state ===
  const [editMode, setEditMode] = useState(false); // 수정 버튼 클릭됐는지 state
  const [nickname, setNickname] = useState("닉네임이랑께"); // 백엔드 state
  const inputRef = useRef(null);

  // 프로필 조회 API 호출

  // 수정 버튼 눌렀을 때
  const handleClickEditButton = () => {
    setEditMode(true);
  };

  // 확인 버튼 눌렀을 때
  const handleClickSaveButton = () => {
    const ninknameRegex = /^[a-zA-Z0-9가-힣]{1,15}$/;

    if (nickname.trim() === "") {
      alert("닉네임을 입력해 주세요.");
    } else if (!ninknameRegex.test(nickname)) {
      alert("닉네임을 확인해 주세요.");
    } else {
      setEditMode(false);
    }
    // 회원 정보 수정 API 코드
  };

  // 수정 상태일 때 input에 focus 주기
  useEffect(() => {
    if (editMode) {
      inputRef.current.focus();
    }
  }, [editMode]);

  // 수정 상태일 때 원래 닉네임 가져오기
  const handleInputChange = (e) => {
    setNickname(e.target.value);
  };

  return (
    <>
      <InfoFlexBox>
        {/* 아바타 img */}
        <InfoBox>
          <InfoImg src={Avartar} />
        </InfoBox>

        <Table marginLeft="80px">
          <tbody>
            {/* 닉네임 출력부 */}
            <tr>
              <td>
                <InfoText>닉네임</InfoText>
              </td>
              <td>
                <>
                  {editMode ? (
                    <InfoInput
                      type="text"
                      value={nickname}
                      onChange={handleInputChange}
                      ref={inputRef}
                      placeholder="영어, 한글 1 ~ 15자 입력 가능합니다"
                      marginLeft="100px"
                    />
                  ) : (
                    <InfoText color="#32250F" marginLeft="100px">
                      {nickname}
                    </InfoText>
                  )}
                </>
              </td>
            </tr>

            {/* 레벨 출력부 */}
            <tr>
              <td>
                <InfoText>레벨</InfoText>
              </td>
              <td>
                <InfoText color="#32250F" marginLeft="100px">
                  40
                </InfoText>
              </td>
            </tr>

            {/* 승률 출력부 */}
            <tr>
              <td>
                <InfoText>승률</InfoText>
              </td>
              <td>
                <InfoText color="#32250F" marginLeft="100px">
                  16.2%
                </InfoText>
              </td>
            </tr>
          </tbody>
        </Table>
      </InfoFlexBox>
      <InfoFlexBox col="center" row="between" width="1000px">
        {/* Link 버튼 */}
        <Link to="/member/out">
          <InfoLinkButton>회원 탈퇴</InfoLinkButton>
        </Link>

        {/* 버튼 */}
        {editMode ? (
          <>
            {
              <InfoFlexBox row="between" width="200px">
                <Button type="smallDark" message="확인" onClick={handleClickSaveButton} />
                <Button type="smallGray" message="취소" onClick={handleClickSaveButton} />
              </InfoFlexBox>
            }
          </>
        ) : (
          <Button type="smallDark" message="수정" onClick={handleClickEditButton} />
        )}
      </InfoFlexBox>
    </>
  );
};

MyInfoContainer.propTypes = {};

export default MyInfoContainer;
