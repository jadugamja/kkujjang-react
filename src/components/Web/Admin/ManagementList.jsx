import React, { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import PropTypes from "prop-types";
import styled from "styled-components";

import ProfileActiveToggle from "@/components/Game/Shared/ProfileActiveToggle";
import { isActiveAccountState } from "@/recoil/userState";
import { isAnswerCompletedState, itemIdState } from "@/recoil/boardState";
import { type } from "@testing-library/user-event/dist/type";

const ManagementList = ({ isHome, title, data = [], onSideOpen }) => {
  // 전역 상태로 id 관리
  const setItemId = useSetRecoilState(itemIdState);
  const isAnswerCompleted = useRecoilValue(isAnswerCompletedState);
  const isActiveAccount = useRecoilValue(isActiveAccountState);
  const [header, setHeader] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const getTitleText = (title) => {
    switch (title) {
      case "notice":
        return "공지사항";
      case "inquiry":
        return "문의";
      case "report":
        return "신고";
      case "user":
        return "사용자 관리";
    }
  };

  const getKeyText = (data) => {
    if (!data || data.length === 0) {
      return [];
    }

    return Object.keys(data[0])
      ?.filter((key) => key !== "id")
      ?.map((key, idx) => {
        switch (key) {
          case "reporterNickname":
            return <Th key={idx}>신고자</Th>;
          case "type":
            return (
              <ThLeft key={idx} width="6.5rem">{`${getTitleText(title)} 유형`}</ThLeft>
            );
          case "types":
            return (
              <ThLeft width={isHome ? "9.5rem" : "10.5rem"}>{`${getTitleText(
                title
              )} 사유`}</ThLeft>
            );
          case "title":
            return (
              <ThLeft key={idx}>
                {title !== "notice" ? `${getTitleText(title)} 제목` : "제목"}
              </ThLeft>
            );
          case "reporteeNickname":
            return <Th key={idx}>피신고자</Th>;
          case "createdAt":
            return (
              <Th key={idx} width="7rem">
                {title === "report" ? "신고 날짜" : "작성일"}
              </Th>
            );
          case "created_at":
            return (
              <Th key={idx} width="7rem">
                작성일
              </Th>
            );
          case "author":
            return <Th key={idx}>작성자</Th>;
          case "views":
            return (
              <Th key={idx} width="5.5rem">
                조회수
              </Th>
            );
          case "reporterId":
            return <Th key={idx}>신고자</Th>;
          case "reporteeId":
            return <Th key={idx}>피신고자</Th>;
          case "nickname":
            return (
              <Th key={idx} width={title === "user" && "6rem"}>
                닉네임
              </Th>
            );
          case "username":
            return (
              <Th key={idx} width={title === "user" && "4.5rem"}>
                아이디
              </Th>
            );
          case "needAnswer":
            return (
              <Th key={idx} width="5.5rem">
                답변여부
              </Th>
            );
          case "isBanned":
            return (
              <Th key={idx} width="3.2rem">
                활성화 여부
              </Th>
            );
          default:
            return <Th key={idx}>Field</Th>;
        }
      });
  };

  const getTypeText = (type) => {
    if (title === "inquiry") {
      switch (type) {
        case 0:
          return "버그문의";
        case 1:
          return "계정문의";
        case 2:
          return "서비스문의";
        case 5:
          return "단어추가문의";
        case 99:
          return "기타문의";
        default:
          return "기타";
      }
    }
  };

  useEffect(() => {
    if (data.length > 0) {
      setHeader(getKeyText(data));
    }
  }, [data]);

  return (
    <TableWrapper title={title}>
      <Table title={title} isHome={isHome}>
        <thead>
          <ThWrapper fontSize={!isHome ? "20px" : "18px"}>{header}</ThWrapper>
        </thead>
        <Tbody>
          {data.length === 0 ? (
            <tr>
              <td>검색 결과가 없습니다.</td>
            </tr>
          ) : (
            data?.map((item) => (
              <Tr
                fontSize="18px"
                key={item.id}
                onClick={() => {
                  setItemId(item.id);
                  onSideOpen(item.id);
                  setSelectedId(item.id);
                }}
                isSelected={item.id === selectedId}
              >
                {Object.entries(item)
                  ?.filter(([key]) => key !== "id")
                  ?.map(([key, value]) => {
                    if (key === "type")
                      return (
                        <React.Fragment key={key}>
                          {title === "report" ? (
                            <TdLeft key={key}>{value}</TdLeft>
                          ) : (
                            <TdCenter key={key} fontSize="15px">
                              {getTypeText(value)}
                            </TdCenter>
                          )}
                        </React.Fragment>
                      );
                    if (key === "types")
                      return (
                        <TdLeft key={key}>
                          {Object.entries(value)
                            ?.filter(([_key, _value]) => _value === true)
                            .map(
                              ([_key, _value]) =>
                                (_key === "isOffensive" && "공격적인 언어 사용") ||
                                (_key === "isCheating" && "부정행위") ||
                                (_key === "isPoorManner" && "비매너 행위")
                            )
                            .join(", ")}
                        </TdLeft>
                      );
                    if (key === "title") return <TdLeft key={key}>{value}</TdLeft>;
                    if (key === "createdAt")
                      return <TdCenter key={key}>{value.substr(0, 10)}</TdCenter>;
                    if (key === "username") return <TdLeft key={key}>{value}</TdLeft>;
                    if (key === "nickname") return <TdLeft key={key}>{value}</TdLeft>;
                    if (key === "isBanned")
                      return (
                        <TdCenter key={key} paddingLeft={isHome ? "1rem" : "2rem"}>
                          <ProfileActiveToggle isActiveAccount={!value} />
                        </TdCenter>
                      );
                    if (key === "needAnswer")
                      return (
                        <TdCenter
                          key={key}
                          style={{
                            color: !value ? "#32250F" : "#FF6C6C",
                            fontWeight: "700"
                          }}
                        >
                          {!value ? "YES" : "NO"}
                        </TdCenter>
                      );
                    return <TdCenter key={key}>{value}</TdCenter>;
                  })}
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </TableWrapper>
  );
};

ManagementList.propTypes = {
  isHome: PropTypes.bool,
  title: PropTypes.string,
  data: PropTypes.array,
  onSideOpen: PropTypes.func,
  isAnswerCompleted: PropTypes.object
};

const TableWrapper = styled.div`
  height: 36.7rem;
  width: 100%;
  max-width: 100%;
`;

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
`;

const ThWrapper = styled.tr`
  width: 100%;
  height: 3.2rem;
  display: table-row;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};
  font-size: ${({ fontSize }) => fontSize || "18px"};
`;

const Th = styled.th`
  width: ${({ width }) => width};
`;

const ThLeft = styled(Th)`
  width: ${({ width }) => width};
  text-align: left;
  padding-left: 16px;
`;

const Tbody = styled.tbody`
  font-size: ${({ theme }) => theme.fontSize.xxxs};
`;

const Tr = styled.tr`
  height: 3.36rem;
  line-height: 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  background-color: ${({ isSelected }) =>
    isSelected ? "rgba(107, 107, 107, 0.1)" : "transparent"};
  font-weight: ${({ isSelected }) => (isSelected ? "700" : "normal")};

  &:hover {
    cursor: pointer;
    background-color: rgba(107, 107, 107, 0.1);
    font-weight: 700;
  }
`;

const Td = styled.td`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const TdLeft = styled(Td)`
  padding-left: 16px;
`;

const TdCenter = styled(Td)`
  padding-left: ${({ paddingLeft }) => paddingLeft};
  text-align: center;
  font-size: ${({ fontSize }) => fontSize};
`;

export default ManagementList;
