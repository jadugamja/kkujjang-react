import { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import GridBox from "@/styles/GridStyle";
import { StyledMiniButton as Button } from "../Shared/Button";
import TitleBar from "../Shared/TitleBar";

const Ranking = () => {
  const [rankData, setRankData] = useState([]);
  const [myRank, setMyRank] = useState(31);
  const [currPage, setCurrPage] = useState(1);
  const [lastPageIdx, setLastPageIdx] = useState(30);

  useEffect(() => {
    // 랭킹 목록 조회 api 호출

    const rankings = Array.from({ length: 15 }, (_, i) => ({
      rank: (currPage - 1) * 15 + i + 1,
      level: Math.floor(Math.random() * 100),
      nickname: `User${(currPage - 1) * 15 + i + 1}`
    }));

    setRankData(rankings);
  }, [currPage]);

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
      <TitleBar type="rank" />
      <TableWrapper>
        <Table>
          <thead>
            <Tr>
              <Th width="28px">#</Th>
              <Th width="58px">레벨</Th>
              <Th>닉네임</Th>
            </Tr>
          </thead>
          <Tbody>
            {rankData.map(({ rank, level, nickname }) => (
              <Tr key={rank}>
                <Td bgColor={getTopRankColor(rank)}>{rank}</Td>
                <Td>{level}</Td>
                <Td textAlign="left">{nickname}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <GridBox flow="col" cols="1fr 1.5fr 1fr" margin="7px 24px">
          <FlexBox row="center">
            {currPage > 1 && (
              <Button layout="side" onClick={() => setCurrPage(currPage - 1)}>
                이전
              </Button>
            )}
          </FlexBox>
          <FlexBox row="center">
            <Button layout="center" onClick={() => setCurrPage(Math.ceil(myRank / 15))}>
              내 순위
            </Button>
          </FlexBox>
          <FlexBox row="center">
            {currPage < lastPageIdx && (
              <Button layout="side" onClick={() => setCurrPage(currPage + 1)}>
                다음
              </Button>
            )}
          </FlexBox>
        </GridBox>
      </TableWrapper>
    </RankingWrapper>
  );
};

const RankingWrapper = styled.div`
  width: 100%;
  height: 27.25rem;
  padding: 3px 5px;
  background-color: #f3f3f3;
  border: 1px solid #ccc;
  border-bottom: 0;
`;

const TableWrapper = styled.div`
  height: 100%;
  padding: 5px 10px;
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
  max-height: 24px;

  & > * + * {
    margin-left: 3px;
  }
`;

const Th = styled.th`
  width: ${({ width }) => width || "auto"};
  background-color: #ddd;
  border: 3px solid #f3f3f3;
  font-size: 13px;
`;

const Td = styled.td`
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  border: 3px solid #f3f3f3;
  padding-left: ${({ textAlign }) => textAlign === "left" && "10px"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  font-size: 12px;
  font-weight: 430;
`;

export default Ranking;
