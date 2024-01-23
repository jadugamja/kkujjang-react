import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { isActiveSideContentTypeState } from "@/recoil/displayState";
import { itemIdState } from "@/recoil/boardState";
import UserManagementList from "@/components/Web/Admin/UserManagementList";
import UserManagementDetail from "@/components/Web/Admin/UserManagementDetail";
import Header from "@/components/Web/Shared/Layout/Header";
import { FlexBox } from "@/styles/FlexStyle";
import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";

const UserManagement = () => {
  const [isActiveSideContentType, setIsActiveSideContentType] = useRecoilState(
    isActiveSideContentTypeState
  );
  const [itemId, setItemId] = useRecoilState(itemIdState);
  const [userData, setUserData] = useState();

  const onSideOpen = (id) => {
    // 사용자 상세 조회 api 호출 (user/:userId)

    const userRes = {
      id: 5,
      nickname: "someNickname#5",
      createdAt: "yyyy-MM-dd hh:mm:ss",
      isBanned: true
      // 추가적인 사용자 정보...
    };

    setUserData(userRes);
    setIsActiveSideContentType(1);
    setItemId(id);
  };

  useEffect(() => {
    if (itemId !== null) {
      const userRes = {
        id: itemId,
        nickname: "someNickname#5",
        createdAt: "yyyy-MM-dd hh:mm:ss",
        isBanned: true
        // 추가적인 사용자 정보...
      };
      setUserData(userRes);
    }
  }, [itemId]);

  useEffect(() => {
    if (itemId === null) {
      setIsActiveSideContentType(0);
    }
  }, []);

  return (
    <ContentWrapper row="center" col="center">
      <WideContent width="80rem" dir="col">
        <Header type="admin" />
        <Main type="admin" row="between">
          <ListWrapper row="between">
            <UserManagementList onSideOpen={onSideOpen} />
            {isActiveSideContentType === 1 ? (
              <Box>
                <UserManagementDetail data={userData} />
              </Box>
            ) : (
              ""
            )}
          </ListWrapper>
        </Main>
      </WideContent>
    </ContentWrapper>
  );
};

const ListWrapper = styled(FlexBox)``;

const Box = styled.div`
  width: ${({ type }) => (type === "home" ? "28rem" : "37.5rem")};
  height: ${({ type }) => (type === "home" ? "48.6rem" : "49.6rem")};
  padding: 10px;
  background-color: ${({ type, theme }) =>
    type === "home" ? "#fff" : theme.colors.content};
  overflow-y: auto;
`;

export default UserManagement;
