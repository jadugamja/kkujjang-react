import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

import { formatDateToTimestamp } from "@/services/date";
import createdAtIcon from "@/assets/images/clock.png";
import viewsIcon from "@/assets/images/views.png";

// ===== hooks import =====
import useAxios from "@/hooks/useAxios";

// ===== components import =====
import BoardTitle from "@/components/Web/Shared/Board/BoardTitle";
import Button from "@/components/Web/Shared/Buttons/Button";

// ===== style =====
const NoticeDeatalFlexBox = styled(FlexBox)`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "fit-content"};
  border-top: ${(props) => props.borderTop || null};
  border-bottom: ${(props) => props.borderBottom || null};
  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
`;

const NoticeDetailBox = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "fit-content"};
  border-top: ${(props) => props.borderTop || null};
  border-bottom: ${(props) => props.borderBottom || null};
  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
`;

const NoticeDetailText = styled.p`
  color: ${(props) => props.color || "#32250F"};
  font-size: ${(props) => props.fontSize || "32px"};
  margin: 0;
`;

const NoticeDetailImage = styled.img`
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.height || "24px"};
  margin-right: ${(props) => props.marginRight || null};
`;

// ===== component =====
const NoticeDetailContainer = () => {
  // === params ===
  const { noticeId } = useParams();

  // === state ===
  const [detailData, setDetailData] = useState([]);
  // (api 관련)
  const [apiConfig, setApiConfig] = useState({
    method: "get",
    url: `/notice/${noticeId}`
  });
  const { response, error, loading, fetchData } = useAxios(apiConfig);

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    if (apiConfig !== null) {
      fetchData();
    }
  }, [apiConfig]);

  useEffect(() => {
    if (response !== null) {
      setDetailData(response.result);
    } else {
      setDetailData([]);
    }
  }, [response, error]);

  const handleMoveList = () => {
    navigate(`/notice/list`);
  };

  return (
    <>
      <NoticeDetailBox width="75rem" marginLeft="auto" marginRight="auto">
        <BoardTitle type="notice" />
        <NoticeDetailBox borderTop="5px solid #C2C2C2" borderBottom="5px solid #C2C2C2">
          {/* 공지 헤더 */}
          <NoticeDeatalFlexBox dir="col">
            {/* 공지 제목 */}
            <NoticeDetailBox marginTop="15px" marginBottom="10px">
              <NoticeDetailText>{detailData.title}</NoticeDetailText>
            </NoticeDetailBox>

            {/* 공지 관련 정보 */}
            <NoticeDeatalFlexBox width="400px" marginBottom="15px">
              {/* 게시 날짜 */}
              <NoticeDeatalFlexBox col="center">
                <NoticeDetailImage src={createdAtIcon} marginRight="10px" />
                <NoticeDetailText color="#A7A7A7" fontSize="20px">
                  {formatDateToTimestamp(detailData.created_at)}
                </NoticeDetailText>
              </NoticeDeatalFlexBox>

              {/* 조회수 */}
              <NoticeDeatalFlexBox col="center">
                <NoticeDetailImage src={viewsIcon} marginRight="10px" />
                <NoticeDetailText color="#A7A7A7" fontSize="20px">
                  {detailData.views}
                </NoticeDetailText>
              </NoticeDeatalFlexBox>
            </NoticeDeatalFlexBox>
          </NoticeDeatalFlexBox>

          {/* 공지 본문 */}
          <NoticeDeatalFlexBox
            borderTop="1px solid #C2C2C2"
            dir="col"
            marginBottom="10px"
          >
            <NoticeDetailBox dir="col" height="390px" marginTop="15px">
              <div>{detailData.content}</div>
              {detailData.files && (
                <>
                  {detailData.files?.map((file, index) => (
                    <img key={index} src={file} />
                  ))}
                </>
              )}
            </NoticeDetailBox>
            <NoticeDeatalFlexBox row="end">
              <Button type="smallGray" message="목록" onClick={handleMoveList} />
            </NoticeDeatalFlexBox>
          </NoticeDeatalFlexBox>
        </NoticeDetailBox>
      </NoticeDetailBox>
    </>
  );
};

export default NoticeDetailContainer;
