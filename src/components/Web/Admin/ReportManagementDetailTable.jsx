import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FlexBox from "@/styles/FlexStyle";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import ChatItem from "../../Game/Shared/ChatItem";
import { formatDateToTimestamp } from "@/services/date";

const ReportManagementDetailTable = ({ data, type }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Table dir="col">
      {type === "report" && (
        <>
          <TableHead col="center">
            <IconWrapper row="center" col="center">
              <WarningIcon icon={faTriangleExclamation} />
            </IconWrapper>
            <TextWrapper dir="col">
              <span>{data?.reporteeNickname}</span>
              <span>{`(${data?.reporteeId})`}</span>
            </TextWrapper>
          </TableHead>
          <TableRow dir="col" key={data?.id}>
            <TableCell>
              <TableCellLabel>신고자</TableCellLabel>
              <TableCellContent>{`${data?.reporterNickname} (${data?.reporterId})`}</TableCellContent>
            </TableCell>
            <TableCell>
              <TableCellLabel>신고 시각</TableCellLabel>
              <TableCellContent>{data?.createdAt}</TableCellContent>
            </TableCell>
            <TableCell>
              <TableCellLabel>신고 사유</TableCellLabel>
              <TableCellContent>
                {[
                  ...Object.entries(data?.types)
                    ?.filter(([_key, _value]) => _value === true)
                    ?.map(
                      ([_key, _value]) =>
                        (_key === "isOffensive" && "공격적인 언어 사용") ||
                        (_key === "isCheating" && "사기 행위") ||
                        (_key === "isPoorManner" && "비매너 행위")
                    ),
                  types.note && `기타: ${types.note}`
                ].join(", ")}
              </TableCellContent>
            </TableCell>
            <TableCell>
              <TableCellLabel>게임방 ID</TableCellLabel>
              <TableCellContent>{data?.roomId}</TableCellContent>
            </TableCell>
          </TableRow>
        </>
      )}
      {type === "room" && (
        <>
          <SkyBlueTableHead>
            <TableCell>
              <TableCellLabel width="100px" row="center" col="center">
                게임방 ID
              </TableCellLabel>
              <TableCellContent col="center">yyyyMMdd-0001</TableCellContent>
            </TableCell>
          </SkyBlueTableHead>
          <TableRow type={type} dir="col">
            <TableCell type={type}>
              <TableCellLabel width="90px">개설 시각</TableCellLabel>
              <TableCellContent>{data?.createdAt}</TableCellContent>
            </TableCell>
            <TableCell type={type}>
              <TableCellLabel width="90px">종료 시각</TableCellLabel>
              <TableCellContent>{data?.expiredAt}</TableCellContent>
            </TableCell>
            <TableCell type={type}>
              <TableCellLabel width="90px">플레이 횟수</TableCellLabel>
              <TableCellContent>{34}</TableCellContent>
            </TableCell>
          </TableRow>
        </>
      )}

      {type === "chat" && (
        <>
          <SkyBlueTableHead type={type} row="center" col="center">
            <TextWrapper type={type}>채팅 내역</TextWrapper>
          </SkyBlueTableHead>
          <TableRow type={type}>
            <ChatItemWrapper dir="col">
              {data?.map((chat, i) => (
                <ChatItem
                  key={i}
                  nickname={chat?.nickname}
                  message={chat?.content}
                  createdAt={formatDateToTimestamp(chat?.createdAt)}
                />
              ))}
            </ChatItemWrapper>
          </TableRow>
        </>
      )}
    </Table>
  );
};

ReportManagementDetailTable.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  type: PropTypes.string
};

const Table = styled(FlexBox)`
  width: 100%;
  height: 100%;
`;

const TableHead = styled(FlexBox)`
  height: 5.625rem;
  border-bottom: 1px solid #ccc;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 600;
`;

const SkyBlueTableHead = styled(TableHead)`
  height: ${({ type }) => (type !== "chat" ? "3.25rem" : "1.75rem")};
  background-color: #d5e0f0;
  border-bottom: 0;
  font-size: ${({ theme }) => theme.fontSize.xxxs};
`;

const TableRow = styled(FlexBox)`
  flex-grow: ${({ type }) => type !== "room" && 1};
  padding: ${({ type }) => type === "chat" && "10px 0"};
`;

const TableCell = styled(FlexBox)`
  flex: 1;
  flex-basis: ${({ type }) => type === "room" && "3.375rem"};
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: ${({ type }) => type !== "room" && 0};
  }
`;

const TableCellLabel = styled(FlexBox)`
  width: ${({ width }) => width || "80px"};
  flex-shrink: 0;
  font-weight: 500;
`;

const TableCellContent = styled.div`
  flex-grow: 1;
`;

const IconWrapper = styled(FlexBox)`
  width: 3.75rem;
  height: 3.75rem;
`;

const TextWrapper = styled(FlexBox)`
  font-size: ${({ type }) => type === "chat" && "16px"};
`;

const ChatItemWrapper = styled(FlexBox)`
  flex-basis: 65%;
  flex-grow: 1;
  margin: 2px 12px;
  max-height: 26.25rem;
`;

const WarningIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.error};
`;

export default ReportManagementDetailTable;
