import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { isActiveSideContentTypeState } from "@/recoil/displayState";
import { itemIdState } from "@/recoil/boardState";
import UserManagementList from "@/components/Web/Admin/UserManagementList";
import UserManagementDetail from "@/components/Web/Admin/UserManagementDetail";
import Header from "@/components/Web/Shared/Layout/Header";
import { Box } from "@/components/Game/Shared/Layout";
import { FlexBox as ListWrapper } from "@/styles/FlexStyle";
import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";
import useAxios from "@/hooks/useAxios";

const UserManagement = () => {
  const [isActiveSideContentType, setIsActiveSideContentType] = useRecoilState(
    isActiveSideContentTypeState
  );
  const [itemId, setItemId] = useRecoilState(itemIdState);
  const [cookies] = useCookies(["sessionId"]);
  const [userData, setUserData] = useState(null);
  const [apiConfig, setApiConfig] = useState(null);
  const { response, error, loading, fetchData } = useAxios(apiConfig, false);

  useEffect(() => {
    if (itemId === null) {
      setIsActiveSideContentType(0);
    } else {
      setIsActiveSideContentType(1);
      setApiConfig({
        method: "get",
        url: `/user/${itemId}`,
        headers: {
          sessionId: cookies.sessionId
        }
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
      setUserData(response.result);
    }
  }, [response]);

  useEffect(() => {
    if (userData !== null) {
      setIsActiveSideContentType(1);
    }
  }, [userData]);

  const onSideOpen = (id) => {
    setApiConfig({
      method: "get",
      url: `/user/${id}`,
      headers: { sessionId: cookies.sessionId }
    });
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

export default UserManagement;
