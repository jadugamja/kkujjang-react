import React from "react";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

// ===== style =====
const QnAText = styled.p`
  font-family: "Pretendard Variable";
  font-size: 53px;
  font-weight: 800;
  margin: 0;
`;

const ThreadItemWrapper = styled(FlexBox)`
  width: "100%"
  height: ${(props) => props.height || "fit-content"};
  margin: ${(props) => props.margin || "5px"};
  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
`;

const ThreadText = styled.p`
  width: ${(props) => props.width || "fit-content"};
  font-size: ${(props) => props.fontSize || null};
  color: ${(props) => props.color || null};
  margin: 0;
  margin-bottom: ${(props) => props.marginBottom || null};
`;

// 임시 크기
const ThreadImg = styled.img`
  width: ${(props) => props.width || "150px"};
  height: ${(props) => props.height || "150px"};
`;

// ===== component ======
const ThreadItem = ({ isAnswer, content, createdAt, files }) => {
  const getIsAnswer = (bool) => <QnAText isTrue={bool}>{bool ? "A." : "Q."}</QnAText>;

  return (
    <>
      <ThreadItemWrapper row="between" col="start" marginTop="10px" marginBottom="15px">
        {/* Q or A */}
        <ThreadItemWrapper>
          <ThreadText>{getIsAnswer(isAnswer)}</ThreadText>
        </ThreadItemWrapper>

        {/* text 및 img */}
        <ThreadItemWrapper dir="col">
          <ThreadText width="930px" fontSize="20px" marginBottom="10px">
            {content}
          </ThreadText>
          {files && (
            <ThreadItemWrapper>
              {files.map((file, index) => (
                <ThreadImg key={index} src={URL.createObjectURL(file)} alt="첨부파일" />
              ))}
            </ThreadItemWrapper>
          )}
        </ThreadItemWrapper>

        {/* 작성일 */}
        <ThreadText fontSize="18px" color="#A7A7A7">
          {createdAt}
        </ThreadText>
      </ThreadItemWrapper>
    </>
  );
};

ThreadItem.propTypes = {
  isAnswer: PropTypes.bool,
  content: PropTypes.string,
  createdAt: PropTypes.date,
  files: PropTypes.arrayOf(PropTypes.string)
};

export default ThreadItem;
