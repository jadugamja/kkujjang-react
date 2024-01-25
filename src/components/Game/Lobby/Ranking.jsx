import { useState } from "react";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

const Ranking = () => {
  const rankings = Array.from({ length: 15 }, (_, i) => ({
    rank: i + 1,
    level: Math.floor(Math.random() * 100),
    nickname: `User${i + 1}`
  }));

  const getTopRankColor = (rank) => {
    if (rank === 1) {
      return "#FFD700";
    } else if (rank === 2) {
      return "#C0C0C0";
    } else if (rank === 3) {
      return "#DE7A32";
    }

    return "transparent";
  };

  return (
    <RankingWrapper>
      <TitleBar>랭킹</TitleBar>
      <TableWrapper>
        <Table>
          <thead>
            <Tr>
              <Th width="28px">#</Th>
              <Th width="54px">레벨</Th>
              <Th>닉네임</Th>
            </Tr>
          </thead>
          <Tbody>
            {rankings.map(({ rank, level, nickname }) => (
              <Tr key={rank}>
                <Td bgColor={getTopRankColor(rank)}>{rank}</Td>
                <Td>{level}</Td>
                <Td>{nickname}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <ButtonWrapper row="evenly" col="center">
          <div>
            <SideButton>이전</SideButton>
          </div>
          <div>
            <CenterButton>내 순위</CenterButton>
          </div>
          <div>
            <SideButton>다음</SideButton>
          </div>
        </ButtonWrapper>
      </TableWrapper>
    </RankingWrapper>
  );
};

const RankingWrapper = styled.div`
  width: 100%;
  height: 28.25rem;
  padding: 3px 5px;
  background-color: #f3f3f3;
  border: 1px solid #ccc;
  border-bottom: 0;
`;

const TitleBar = styled(FlexBox).attrs({
  col: "center"
})`
  width: 100%;
  height: 1.5rem;
  padding: 0 7px;
  background-color: rgba(221, 221, 221, 0.5);
  border-radius: 4px;
  box-shadow: 2px 2px 1px #00000025;
  font-size: 14px;
  font-weight: 700;

  & > * + * {
    margin-left: 5px;
  }
`;

const TableWrapper = styled.div`
  height: 100%;
  padding: 8px 6px;
`;

const Table = styled.table`
  width: 100%;
  max-width: 100%;
`;

const Tbody = styled.tbody`
  & > * + * {
    margin-top: 10px;
  }
`;

const Tr = styled.tr`
  & > * + * {
    margin-left: 3px;
  }
`;

const Th = styled.th`
  width: ${({ width }) => width || "auto"};
  background-color: #ddd;
  border: 3px solid #f3f3f3;
  font-size: 14px;
`;

const Td = styled.td`
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  text-align: center;
  font-size: 14px;
  font-weight: 430;
`;

const ButtonWrapper = styled(FlexBox)`
  margin: 12px 24px;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 10px;
  font-size: 11px;
`;

const SideButton = styled(Button)`
  padding: 5px 9px;
`;

const CenterButton = styled(Button)`
  padding: 5px 14px;
`;

export default Ranking;
