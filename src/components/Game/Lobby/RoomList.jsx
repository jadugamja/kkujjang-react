import { useState } from "react";
import styled from "styled-components";
import FlexBox from "@/styles/FlexStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

const RoomList = () => {
  const timeLimits = [60, 90, 120];
  const [showWaitingRoom, setShowWaitingRoom] = useState(false);
  const [showOpenRoom, setShowOpenRoom] = useState(false);

  // 임시 데이터
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
    <RoomListWrapper dir="col">
      <TitleBar row="between">
        <div>
          <TitleIcon icon={faListUl} />
          <span>방 목록</span>
        </div>
        <CheckboxWrapper>
          <label>
            <input
              type="checkbox"
              checked={showWaitingRoom}
              onChange={(e) => setShowWaitingRoom(e.target.checked)}
            />
            대기방만 보기
          </label>
          <label>
            <input
              type="checkbox"
              checked={showOpenRoom}
              onChange={(e) => setShowOpenRoom(e.target.checked)}
            />
            열린 방만 보기
          </label>
        </CheckboxWrapper>
      </TitleBar>
      <RoomItemWrapper row="between">
        {rooms?.map((room) => (
          <RoomItem key={room.id} isPlaying={room.isPlaying}>
            <RoomItemInfoWrapper row="between">
              <LeftInfoWrapper row="center" col="center">
                <RoomNumber>{room.id}</RoomNumber>
              </LeftInfoWrapper>
              <CenterInfoWrapper dir="col" row="center">
                <RoomName>{room.name}</RoomName>
                <CenterBottomInfoWrapper>
                  <RoomSubText>{`라운드 ${room.roundCnt}`}</RoomSubText>
                  <RoomSubText>{`${room.timeLimit}초`}</RoomSubText>
                </CenterBottomInfoWrapper>
              </CenterInfoWrapper>
              <RightInfoWrapper dir="col">
                <PlayerCount>{`${room.playerCnt}/${room.maxPlayerCnt}`}</PlayerCount>
                <FlexBox row="center" col="center">
                  <LockIcon icon={room.isLocked ? faLock : faLockOpen} />
                </FlexBox>
              </RightInfoWrapper>
            </RoomItemInfoWrapper>
          </RoomItem>
        ))}
      </RoomItemWrapper>
    </RoomListWrapper>
  );
};

const RoomListWrapper = styled(FlexBox)`
  width: 57.6rem;
  height: 100%;
  padding: 3px 5px;
  background-color: #748f9b80;
  border: 1px solid #7d7d7d;
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

const TitleIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  font-size: ${({ theme }) => theme.fontSize.xxxxs};
`;

const CheckboxWrapper = styled.div`
  & > * + * {
    margin-left: 10px;
  }
`;

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
  margin: 8px 12px;
  padding: 15px 18px 15px 10px;
`;

const RoomItemInfoWrapper = styled(FlexBox)`
  height: 100%;
`;

const LeftInfoWrapper = styled(FlexBox)`
  width: 3rem;
`;

const CenterInfoWrapper = styled(FlexBox)`
  flex-grow: 1;

  & > * + * {
    margin-top: 8px;
  }
`;

const CenterBottomInfoWrapper = styled(FlexBox)`
  & > * + * {
    margin-left: 15px;
  }
`;

const RightInfoWrapper = styled(FlexBox)`
  width: 3.5rem;
`;

const RoomNumber = styled.span`
  font-family: "AlfaSlabOne";
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 800;
  padding-bottom: 4px;
`;

const RoomName = styled.span`
  font-family: "Hanna";
  font-size: 23px;
  font-weight: 500;
`;

const RoomSubText = styled.span`
  font-family: "Hanna";
  font-size: 18px;
  font-weight: 400;
`;

const PlayerCount = styled.span`
  font-family: "DNFBitBitv2";
  font-size: 27px;
`;

const LockIcon = styled(FontAwesomeIcon)`
  font-size: 28px;
`;

export default RoomList;
