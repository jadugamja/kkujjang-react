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
  // 임시
  const {
    response: roomRes,
    loading: roomLoading,
    error: roomErr
  } = useAxios({
    method: "get",
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
    url: `/chat/search?roomId=${data?.roomId}`,
    headers: {
      sessionId: cookies.sessionId
    }
  });

  useEffect(() => {
    if (roomRes !== null) {
      const { roomId, createdAt, expiredAt } = roomRes;
      setGameroomData({ roomId, createdAt, expiredAt });
    }
  }, [roomRes]);

  useEffect(() => {
    if (chatRes !== null) {
      setGameroomChatData(chatRes);
    }
  }, [chatRes]);

  useEffect(() => {
    // 신고 게임방 로그 조회 api 호출 (room/:roomId)
    const roomRes = {
      roomId: "fd3a5ebc-9043-4fd9-9ccf-62db80a5dd3c",
      users: [
        {
          id: 5,
          nickname: "김스테이지어스#5"
        },
        {
          id: 3,
          nickname: "김스테이지어스#3"
        }
      ],
      createdAt: "2024-01-01 10:30:44",
      expiredAt: "2024-01-01 18:30:44",
      history: [
        {
          keyword: "리어카",
          createdAt: "yyyy-MM-dd hh:mm:ss"
        }
      ]
    };

    const { roomId, createdAt, expiredAt } = roomRes;
    setGameroomData({ roomId, createdAt, expiredAt });

    // 신고 게임방 채팅 내역 조회 api 호출 (chat/search)
    const chatRes = [
      {
        username: 3,
        nickname: "김스테이지어스#3",
        createdAt: "yyyy-MM-dd hh:mm:ss",
        content: "채팅 테스트 11111"
      },
      {
        username: 3,
        nickname: "김스테이지어스#3",
        createdAt: "yyyy-MM-dd hh:mm:ss",
        content: "채팅 테스트 2222"
      },
      {
        username: 3,
        nickname: "김스테이지어스#3",
        createdAt: "yyyy-MM-dd hh:mm:ss",
        content: "채팅 테스트 333"
      },
      {
        username: 3,
        nickname: "김스테이지어스#3",
        createdAt: "yyyy-MM-dd hh:mm:ss",
        content: "채팅 테스트 444"
      },
      {
        username: 3,
        nickname: "김스테이지어스#3",
        createdAt: "yyyy-MM-dd hh:mm:ss",
        content: "채팅 테스트 555"
      },
      {
        username: 3,
        nickname: "김스테이지어스#3",
        createdAt: "yyyy-MM-dd hh:mm:ss",
        content: "채팅 테스트 6666"
      },
      {
        username: 3,
        nickname: "김스테이지어스#3",
        createdAt: "yyyy-MM-dd hh:mm:ss",
        content: "채팅 테스트 777"
      }
    ];

    setGameroomChatData(chatRes);
  }, []);

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
