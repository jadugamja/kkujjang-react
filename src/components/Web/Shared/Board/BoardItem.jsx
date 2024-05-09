import React from "react";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

import { formatDateToTimestamp } from "@/services/date";
import createdAtIcon from "@/assets/images/clock.png";
import viewsIcon from "@/assets/images/views.png";

// ===== style ======
const BoardItemWrapper = styled(FlexBox)`
  flex: ${(props) => props.flex};
  width: ${(props) => props.width};
  height: ${(props) => props.height || "fit-content"};
  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
  border-top: ${(props) => props.borderTop || null};
  border-bottom: ${(props) => props.borderBottom || null};
`;

export const BoardItemImage = styled.img`
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.height || "24px"};
  margin-right: ${(props) => props.marginRight || null};
`;

const BoardItemText = styled.p`
  color: ${(props) => props.color || "#32250F"};
  font-size: ${(props) => props.fontSize || "25px"};
`;

const FlexBoardText = styled(BoardItemText)`
  width: ${(props) => props.width || "fit-content"};
  margin: ${(props) => props.margin || "0"};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
  font-weight: ${(props) => props.fontWeight || null};

  ${({ clickable }) =>
    clickable &&
    `
      &:hover {
        cursor: pointer;
      }
  `}
`;

const AnswerText = styled.p`
  color: ${(props) => (props.isTrue ? "#6080FF" : "#4B3F2C")};
  margin: 0;
`;

const BoardTd = styled.td`
  width: ${(props) => props.width || "200px"};
  text-align: ${(props) => props.align || null};
`;

// ===== component ======
const BoardItem = ({ boardType, data, onClick }) => {
  // 임시
  const getTypeName = (type) => {
    switch (type) {
      case 0:
        return "버그 제보 / 문제 해결";
      case 1:
        return "계정 관련 문제";
      case 2:
        return "서비스 이용 관련 문의";
      case 99:
        return "기타 문의";
    }
  };

  const getNeedsAnswer = (bool) => (
    <AnswerText isTrue={bool}>{bool ? "YES" : "NO"}</AnswerText>
  );

  const returnCreatedAt = (data) => data.createdAt || data.created_at;

  return (
    <>
      {boardType === "notice" ? (
        <BoardItemWrapper
          row="between"
          col="center"
          width="100%"
          height="40px"
          marginBottom="10px"
        >
          <FlexBoardText fontSize="20px" clickable onClick={onClick}>
            {data.title}
          </FlexBoardText>
          <BoardItemWrapper row="between" flex="0 0 18%">
            <BoardItemWrapper col="center">
              <BoardItemImage
                width="20px"
                height="20px"
                src={createdAtIcon}
                marginRight="10px"
              />
              <FlexBoardText color="#A7A7A7" fontSize="18px">
                {formatDateToTimestamp(returnCreatedAt(data)).split(" ")[0]}
              </FlexBoardText>
            </BoardItemWrapper>
            <BoardItemWrapper col="center">
              <BoardItemImage
                width="20px"
                height="20px"
                src={viewsIcon}
                marginRight="10px"
              />
              <FlexBoardText color="#A7A7A7" fontSize="18px">
                {data.views}
              </FlexBoardText>
            </BoardItemWrapper>
          </BoardItemWrapper>
        </BoardItemWrapper>
      ) : (
        <>
          {
            <BoardItemWrapper
              width="100%"
              row="between"
              col="center"
              borderTop="1px solid #C2C2C2"
              onClick={onClick}
            >
              {boardType === "header" && (
                <table>
                  <tbody>
                    <tr>
                      <BoardTd>
                        <FlexBoardText
                          margin="7px"
                          marginLeft="15px"
                          fontWeight="700"
                          fontSize="22px"
                        >
                          문의 유형
                        </FlexBoardText>
                      </BoardTd>
                      <BoardTd width="700px">
                        <FlexBoardText
                          margin="7px"
                          marginLeft="15px"
                          fontWeight="700"
                          fontSize="22px"
                        >
                          문의 제목
                        </FlexBoardText>
                      </BoardTd>
                      <BoardTd align="right" width="200px">
                        <FlexBoardText
                          margin="7px"
                          marginLeft="50px"
                          fontWeight="700"
                          fontSize="22px"
                        >
                          작성일
                        </FlexBoardText>
                      </BoardTd>
                      <BoardTd align="right" width="180px">
                        <FlexBoardText
                          margin="7px"
                          marginRight="15px"
                          fontWeight="700"
                          fontSize="22px"
                          width="180px"
                        >
                          답변 유무
                        </FlexBoardText>
                      </BoardTd>
                    </tr>
                  </tbody>
                </table>
              )}
              {boardType === "inquiry" && (
                <table>
                  <tbody>
                    <tr>
                      <BoardTd>
                        <FlexBoardText
                          margin="7px"
                          marginLeft="15px"
                          fontSize="20px"
                          width="130px"
                        >
                          {getTypeName(data.type)}
                        </FlexBoardText>
                      </BoardTd>
                      <BoardTd width="700px">
                        <FlexBoardText margin="7px" fontSize="22px">
                          {data.title}
                        </FlexBoardText>
                      </BoardTd>
                      <BoardTd>
                        <FlexBoardText margin="7px" fontSize="20px" width="120px">
                          {data.createdAt}
                        </FlexBoardText>
                      </BoardTd>
                      <BoardTd align="right" width="180px">
                        <FlexBoardText
                          margin="7px"
                          fontWeight="700"
                          fontSize="20px"
                          width="120px"
                        >
                          {getNeedsAnswer(data.needsAnswer)}
                        </FlexBoardText>
                      </BoardTd>
                    </tr>
                  </tbody>
                </table>
              )}
            </BoardItemWrapper>
          }
        </>
      )}
    </>
  );
};

BoardItem.propTypes = {
  boardType: PropTypes.string,
  isAnswer: PropTypes.bool,
  data: PropTypes.object,
  onClick: PropTypes.func
};

export default BoardItem;
