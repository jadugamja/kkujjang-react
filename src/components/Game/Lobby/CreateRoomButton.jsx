import { useState } from "react";
import GameModal from "../Shared/GameModal";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

const CreateRoomButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <TabButton
        row="center"
        col="center"
        bgColor="rgb(178 197 213)"
        onClick={() => setIsModalOpen(true)}
      >
        <TabSpan>방 만들기</TabSpan>
      </TabButton>
      {isModalOpen ? (
        <GameModal type="room" isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      ) : null}
    </>
  );
};

const TabButton = styled(FlexBox).attrs({ as: "button" })`
  position: relative;
  z-index: 10;
  width: 8.75rem;
  height: 3rem;
  background-color: ${({ bgColor }) => bgColor};
  border: 0;
  border-radius: 12px 12px 0 0;
  flex-shrink: 0;
`;

const TabSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;
`;

export default CreateRoomButton;
