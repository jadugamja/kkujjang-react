import styled from "styled-components";
import FlexBox from "@/styles/FlexStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

const RoomList = () => {
  const timeLimits = [60, 90, 120];

  const rooms = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `Room ${i + 1}`,
    isPlaying: i % 2 === 0,
    roundCnt: Math.floor(Math.random() * 10) + 1,
    timeLimit: timeLimits[Math.floor(Math.random() * timeLimits.length)],
    isLocked: Math.random() > 0.5,
    playerCnt: Math.floor(Math.random() * 8) + 1,
    maxPlayerCnt: 8
  }));

  return (
    <RoomItemWrapper row="between">
      {rooms?.map(
        ({
          id,
          name,
          isPlaying,
          roundCnt,
          timeLimit,
          isLocked,
          playerCnt,
          maxPlayerCnt
        }) => (
          <RoomItem key={id} isPlaying={isPlaying}>
            <RoomItemInfoWrapper row="between">
              <LeftInfoWrapper row="center" col="center">
                <RoomNumber>{id}</RoomNumber>
              </LeftInfoWrapper>
              <CenterInfoWrapper dir="col">
                <RoomName>{name}</RoomName>
                <CenterBottomInfoWrapper>
                  <span>{`라운드 ${roundCnt}`}</span>
                  <span>{`${timeLimit}초`}</span>
                </CenterBottomInfoWrapper>
              </CenterInfoWrapper>
              <RightInfoWrapper dir="col">
                <PlayerCount>{`${playerCnt}/${maxPlayerCnt}`}</PlayerCount>
                <RightInfoWrapper row="center" col="center">
                  <LockIcon icon={isLocked ? faLock : faLockOpen} />
                </RightInfoWrapper>
              </RightInfoWrapper>
            </RoomItemInfoWrapper>
          </RoomItem>
        )
      )}
    </RoomItemWrapper>
  );
};

const RoomItemWrapper = styled(FlexBox)`
  margin: 12px 24px;
  flex-wrap: wrap;
`;

const RoomItem = styled.div`
  width: calc(50% - 1.5rem);
  height: 7rem;
  background-color: ${({ isPlaying }) => (isPlaying ? "#737373" : "#EBEBEB")};
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  margin: 5px 8px;
  padding: 15px 12px;
`;

const RoomItemInfoWrapper = styled(FlexBox)`
  height: 100%;
`;

const LeftInfoWrapper = styled(FlexBox)`
  width: 3rem;
`;

const CenterInfoWrapper = styled(FlexBox)`
  width: 17rem;
  & > * + * {
    margin-top: 8px;
  }
`;

const CenterBottomInfoWrapper = styled(FlexBox)`
  & > * + * {
    margin-left: 15px;
  }
`;

const RightInfoWrapper = styled(FlexBox)``;

const RoomNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 800;
  padding-bottom: 4px;
`;

const RoomName = styled.span`
  font-size: 23px;
  font-weight: 700;
`;

const PlayerCount = styled.span`
  font-size: 28px;
  font-weight: 800;
`;

const LockIcon = styled(FontAwesomeIcon)`
  font-size: 28px;
`;

export default RoomList;
