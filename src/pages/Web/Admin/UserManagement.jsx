import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { isActiveSideContentTypeState } from "@/recoil/displayState";
import { itemIdState } from "@/recoil/boardState";
import UserManagementList from "@/components/Web/Admin/UserManagementList";
import UserManagementDetail from "@/components/Web/Admin/UserManagementDetail";
import Header from "@/components/Web/Shared/Layout/Header";
import { FlexBox } from "@/styles/FlexStyle";
import { Box } from "../../../components/Game/Shared/Layout";
import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";
import useAxios from "@/hooks/useAxios";

const UserManagement = () => {
  const [isActiveSideContentType, setIsActiveSideContentType] = useRecoilState(
    isActiveSideContentTypeState
  );
  const [itemId, setItemId] = useRecoilState(itemIdState);
  const [userData, setUserData] = useState();
  const [apiConfig, setApiConfig] = useState(null);
  const { response, error, loading, fetchData } = useAxios(apiConfig, false);

  useEffect(() => {
    if (itemId === null) {
      setIsActiveSideContentType(0);
    } else {
      setIsActiveSideContentType(1);
      setApiConfig({
        method: "get",
        url: `/user/${itemId}`
      });
    }
  }, []);

  useEffect(() => {
    if (apiConfig !== null) {
      fetchData();
    }
  }, [apiConfig]);

  useEffect(() => {
    if (response !== null) {
      setUserData(userRes);
      setIsActiveSideContentType(1);
      setItemId(id);
    }
  }, [response]);

  const onSideOpen = (id) => {
    setApiConfig({
      method: "get",
      url: `/user/${id}`
    });

    // 임시 데이터
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

  return (
    <ContentWrapper row="center" col="center">
      <WideContent width="82rem" dir="col">
        <Header type="admin-detail" />
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

// const Box = styled.div`
//   width: ${({ type }) => (type === "home" ? "28rem" : "37.5rem")};
//   height: ${({ type }) => (type === "home" ? "48.6rem" : "49.6rem")};
//   padding: 10px;
//   background-color: ${({ type, theme }) =>
//     type === "home" ? "#fff" : theme.colors.content};
//   overflow-y: auto;
// `;

export default UserManagement;
