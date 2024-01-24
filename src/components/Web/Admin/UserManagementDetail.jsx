import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";

import { isActiveAccountState } from "@/recoil/userState";
import { FlexBox } from "@/styles/FlexStyle";
import ProfileActiveToggle from "../../Game/Shared/ProfileActiveToggle";

const UserManagementDetail = ({ data }) => {
  const accountStates = useRecoilValue(isActiveAccountState);
  const isActiveAccount = accountStates[data?.id];

  return (
    <DetailWrapper>
      <TitleWrapper>
        <TitleText>사용자 정보</TitleText>
      </TitleWrapper>
      <Table>
        <Tbody>
          <Tr>
            <TdLabel>닉네임</TdLabel>
            <TdContent>{data?.nickname}</TdContent>
          </Tr>
          <Tr>
            <TdLabel>아이디</TdLabel>
            <TdContent>{data?.id}</TdContent>
          </Tr>
          <Tr>
            <TdLabel>가입 날짜</TdLabel>
            <TdContent>{data?.createdAt}</TdContent>
          </Tr>
          <Tr>
            <TdLabel>계정 활성화 여부</TdLabel>
            <TdContent>
              <ProfileActiveToggle userId={data?.id} />
            </TdContent>
          </Tr>
          {!isActiveAccount && (
            <>
              <Tr>
                <TdLabel>- 비활성화 기간</TdLabel>
                <TdContent>{data?.id}</TdContent>
              </Tr>
              <Tr>
                <TdLabel>- 비활성화 사유</TdLabel>
                <TdContent>{data?.createdAt}</TdContent>
              </Tr>
            </>
          )}
        </Tbody>
      </Table>
    </DetailWrapper>
  );
};

UserManagementDetail.propTypes = {
  data: PropTypes.object
};

const DetailWrapper = styled.div`
  margin: 16px 14px;
`;

const TitleWrapper = styled.div`
  padding: 20px 0 10px;
`;

const TitleText = styled.span`
  font-family: "Open Sans";
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
`;

export const Table = styled.table`
  width: 100%;
  max-width: 100%;
  margin: 1rem 0;
`;

export const Tbody = styled.tbody``;

export const Tr = styled(FlexBox).attrs({ as: "tr", col: "center" })`
  padding: 0 10px;
  border-top: 1px solid #c2c2c2;

  &:last-child {
    border-bottom: 1px solid #c2c2c2;
  }
`;

export const TdLabel = styled(FlexBox).attrs({ as: "td", col: "center" })`
  width: 9.5rem;
  height: 4.5rem;
  flex-shrink: 0;
  border-right: 1px solid #c2c2c2;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 700;
`;

export const TdContent = styled(FlexBox).attrs({ as: "td" })`
  height: 100%;
  padding-left: 15px;
  flex-grow: 1;
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export default UserManagementDetail;