import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ReactQuill from "react-quill";

import createdAtIcon from "@/assets/images/clock.png";
import viewsIcon from "@/assets/images/views.png";
import { FlexBox } from "@/styles/FlexStyle";
import { formatDateToTimestamp } from "@/services/date";

// ===== hooks import =====
import useAxios from "@/hooks/useAxios";

// ===== components import =====
import BoardTitle from "@/components/Web/Shared/Board/BoardTitle";
import Button from "@/components/Web/Shared/Buttons/Button";

// ===== style =====
const NoticeDeatalFlexBox = styled(FlexBox)`
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth || "100%"};
  height: ${(props) => props.height || "fit-content"};
  margin: ${(props) => props.margin};
  border-top: ${(props) => props.borderTop || null};
  border-bottom: ${(props) => props.borderBottom || null};
`;

const NoticeDetailBox = styled.div`
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth || "100%"};
  height: ${(props) => props.height || "fit-content"};
  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
  border-top: ${(props) => props.borderTop || null};
  border-bottom: ${(props) => props.borderBottom || null};
  padding: ${(props) => props.padding || null};
  overflow-y: ${(props) => props.overflowY};

  & .ql-container.ql-snow {
    border: 0;
  }
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
      let result = response.result;
      if (result.files && result.files.length > 0) {
        let content = result.content;
        let fileIndex = 0;

        content = content.replace(/<img src=\"\"/g, (match) => {
          if (fileIndex < result.files.length) {
            let newImg = `<img src="${result.files[fileIndex]}"`;
            fileIndex++;
            return newImg;
          } else {
            return match;
          }
        });

        result.content = content;
      }

      setDetailData(response.result);
    } else {
      setDetailData([]);
    }
  }, [response, error]);

  const handleMoveList = () => {
    navigate(`/notice/list`);
  };

  return (
    <NoticeDetailBox maxWidth="100%" marginLeft="auto" marginRight="auto">
      <BoardTitle type="notice" />
      <NoticeDetailBox
        marginLeft="2.5rem"
        marginRight="2.5rem"
        borderTop="2px solid #C2C2C2"
        borderBottom="2px solid #C2C2C2"
        padding="0 0 30px"
      >
        <NoticeDeatalFlexBox dir="col">
          {/* 공지 제목 */}
          <NoticeDetailBox marginTop="15px" marginBottom="10px">
            <NoticeDetailText>{detailData.title}</NoticeDetailText>
          </NoticeDetailBox>
          <NoticeDeatalFlexBox width="100%" margin="0 0 15px 0">
            <NoticeDeatalFlexBox col="center" width="46%">
              <NoticeDetailImage src={createdAtIcon} marginRight="10px" />
              <NoticeDetailText color="#A7A7A7" fontSize="20px">
                {formatDateToTimestamp(detailData.created_at)}
              </NoticeDetailText>
            </NoticeDeatalFlexBox>
            <NoticeDeatalFlexBox col="center">
              <NoticeDetailImage src={viewsIcon} marginRight="10px" />
              <NoticeDetailText color="#A7A7A7" fontSize="20px">
                {detailData.views}
              </NoticeDetailText>
            </NoticeDeatalFlexBox>
          </NoticeDeatalFlexBox>
        </NoticeDeatalFlexBox>

        {/* 공지 본문 */}
        <NoticeDeatalFlexBox dir="col">
          <NoticeDetailBox dir="col" overflowY="auto">
            <ReactQuill
              style={{ height: "24rem" }}
              theme="snow"
              value={detailData?.content}
              readOnly={true}
              modules={{ toolbar: false }}
            />
          </NoticeDetailBox>
        </NoticeDeatalFlexBox>
      </NoticeDetailBox>
      <NoticeDeatalFlexBox maxWidth="100%" row="end" margin="1.25rem 2.5rem">
        <Button type="smallGray" message="목록" onClick={handleMoveList} />
      </NoticeDeatalFlexBox>
    </NoticeDetailBox>
  );
};

export default NoticeDetailContainer;
