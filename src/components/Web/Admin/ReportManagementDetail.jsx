import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import PropTypes from "prop-types";
import styled from "styled-components";

import FlexBox from "@/styles/FlexStyle";
import ReportManagementDetailTable from "./ReportManagementDetailTable";
import useAxios from "@/hooks/useAxios";
import { getPlayerInfoByUserId } from "@/services/user";

const ReportManagementDetail = ({ data }) => {
  const [cookies] = useCookies(["sessionId"]);
  const [gameroomData, setGameroomData] = useState(null);
  const [gameroomChatData, setGameroomChatData] = useState(null);
  const roomApiConfig = {
    method: "get",
    url: `/room/${data?.roomId}`,
    headers: {
      sessionId: cookies.sessionId
    }
  };
  const chatApiConfig = {
    method: "get",
    url: `/chat?roomId=${data?.roomId}`,
    headers: {
      sessionId: cookies.sessionId
    }
  };

  const {
    response: roomRes,
    loading: roomLoading,
    error: roomErr,
    fetchData: fetchRoomData
  } = useAxios(roomApiConfig, false);
  const {
    response: chatRes,
    loading: chatLoading,
    error: chatErr,
    fetchData: fetchChatData
  } = useAxios(chatApiConfig, false);

  useEffect(() => {
    if (data?.roomId) {
      fetchRoomData();
      fetchChatData();
    }
  }, [data]);

  useEffect(() => {
    if (roomRes !== null) {
      setGameroomData(roomRes);
    }
  }, [roomRes]);

  useEffect(() => {
    if (chatRes !== null) {
      const fetchNicknamesAndSetChatData = async () => {
        const updatedChatRes = await Promise.all(
          chatRes.reverse().map(async (chat) => {
            const { userId, message, createdAt } = chat;
            const nickname = await getNicknameByUserId(userId);
            return { nickname, message, createdAt };
          })
        );

        setGameroomChatData(updatedChatRes);
      };

      fetchNicknamesAndSetChatData();
    }
  }, [chatRes]);

  const getNicknameByUserId = async (userId) => {
    const userInfo = await getPlayerInfoByUserId(userId);
    return userInfo.nickname;
  };

  return (
    <DetailWrapper dir="col">
      <UpperBoxWrapper row="between">
        <Box width="17.68rem" height="21rem">
          <ReportManagementDetailTable type="report" data={data} />
        </Box>
        <Box width="17.68rem" height="21rem">
          <ReportManagementDetailTable type="room" data={gameroomData} />
        </Box>
      </UpperBoxWrapper>
      <Box>
        <ReportManagementDetailTable
          type="chat"
          data={chatErr ? chatErr : gameroomChatData}
        />
      </Box>
    </DetailWrapper>
  );
};

ReportManagementDetail.propTypes = {
  data: PropTypes.object
};

const DetailWrapper = styled(FlexBox)`
  & > * + * {
    margin-top: 14px;
  }
`;

const UpperBoxWrapper = styled(FlexBox)`
  width: 100%;
`;

const Box = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "fit=content"};
`;

export default ReportManagementDetail;
