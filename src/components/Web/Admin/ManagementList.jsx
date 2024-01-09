import PropTypes from "prop-types";
import styled from "styled-components";
import ProfileActiveToggle from "@/components/Game/Shared/ProfileActiveToggle";

const ManagementList = ({ title, data = [], onDetailOpen }) => {
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
          case "type":
            return (
              <ThLeft key={idx} width="6.5rem">{`${getTitleText(title)} 유형`}</ThLeft>
            );
          case "title":
            return (
              <ThLeft key={idx}>
                {title !== "notice" ? `${getTitleText(title)} 제목` : "제목"}
              </ThLeft>
            );
          case "createdAt":
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
            return <Th key={idx}>닉네임</Th>;
          case "username":
            return <Th key={idx}>아이디</Th>;
          case "needsAnswer":
            return (
              <Th key={idx} width="5.5rem">
                답변여부
              </Th>
            );
          case "isBanned":
            return (
              <Th key={idx} width="5.5rem">
                활성화 여부
              </Th>
            );
          default:
            return <Th key={idx}>Field</Th>;
        }
      });
  };

  return (
    <TableWrapper>
      <Table>
        <thead>
          <ThWrapper>{getKeyText(data)}</ThWrapper>
        </thead>
        <Tbody>
          {data.length === 0 ? (
            <tr>
              <td>검색 결과가 없습니다.</td>
            </tr>
          ) : (
            data?.map((item) => (
              <Tr key={item.id} onClick={() => onDetailOpen(item.id)}>
                {Object.entries(item)
                  ?.filter(([key]) => key !== "id")
                  ?.map(([key, value]) => {
                    if (key === "type" || key === "title")
                      return <TdLeft key={key}>{value}</TdLeft>;
                    if (key === "createdAt")
                      return <TdCenter key={key}>{value.substr(0, 10)}</TdCenter>;
                    if (key === "isBanned")
                      return (
                        <TdCenter key={key} paddingLeft="8px">
                          <ProfileActiveToggle isActiveAccount={!item.isBanned} />
                        </TdCenter>
                      );
                    if (key === "needsAnswer")
                      return (
                        <TdCenter key={key}>{!item?.needsAnswer ? "NO" : "YES"}</TdCenter>
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
  title: PropTypes.string,
  data: PropTypes.array,
  onDetailOpen: PropTypes.func
};

const TableWrapper = styled.div`
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
`;

const ThWrapper = styled.tr`
  width: 100%;
  height: 3.6rem;
  display: table-row;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};
`;

const Th = styled.th`
  width: ${({ width }) => width};
  font-size: ${({ theme }) => theme.fontSize.xxs};
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
  height: 3.25rem;
  /* height: 3.7rem; */
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};

  &:hover {
    cursor: pointer;
    background-color: rgba(107, 107, 107, 0.1);
    font-weight: 700;
  }
`;

const TdLeft = styled.td`
  padding-left: 16px;
`;

const TdCenter = styled.td`
  padding-left: ${({ paddingLeft }) => paddingLeft};
  text-align: center;
`;

export default ManagementList;
