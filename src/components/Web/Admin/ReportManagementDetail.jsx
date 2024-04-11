import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import PropTypes from "prop-types";
import styled from "styled-components";

import FlexBox from "@/styles/FlexStyle";
import ReportManagementDetailTable from "./ReportManagementDetailTable";
import useAxios from "@/hooks/useAxios";

const ReportManagementDetail = ({ data }) => {
  const [cookies] = useCookies(["sessionId"]);
  const [gameroomData, setGameroomData] = useState({});
  const [gameroomChatData, setGameroomChatData] = useState();
  const {
    response: roomRes,
    loading: roomLoading,
    error: roomErr
  } = useAxios({
    method: "get",
    // url: `/room/4f2856cd-55c2-4840-bcf2-b5ef067044ef`,
    url: `/room/${data?.roomId}`,
    headers: {
      sessionId: cookies.sessionId
    }
  });
  const {
    response: chatRes,
    loading: chatLoading,
    error: chatErr
  } = useAxios({
    method: "get",
    // url: "/chat?roomId=4f2856cd-55c2-4840-bcf2-b5ef067044ef",
    url: `/chat?roomId=${data?.roomId}`,
    headers: {
      sessionId: cookies.sessionId
    }
  });

  useEffect(() => {
    if (roomRes !== null) {
      setGameroomData(roomRes);
    }
  }, [roomRes]);

  useEffect(() => {
    if (chatRes !== null) {
      setGameroomChatData(chatRes.result);
    }
  }, [chatRes]);

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
        <ReportManagementDetailTable type="chat" data={gameroomChatData} />
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
