import { useState } from "react";
import styled from "styled-components";
import GameModal from "../Shared/GameModal";
import { ExtraButton, ExtarButtonIcon as ButtonIcon } from "../Shared/Button";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const guide = `
끝말잇기

끝말잇기는 이전 한국어 단어의 끝 한 자리로 시작하는 두 글자 이상의 한국어 단어를 이용하여 차례를 넘기는 방식입니다.

예시) 강아지 -> 지피지기 -> 기회

한글 맞춤법 3장 5절 두음 법칙에 따라 음절을 바꾸어 이을 수 있습니다.

예시) 강강술래 -> 내력 -> 역학`;

export const HelpButton = () => {
  const [isModalOpen, setIsModalOpen] = useState();

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>
        <ButtonIcon icon={faCircleQuestion} />
      </Button>
      {isModalOpen ? (
        <GameModal
          type="help"
          message={guide}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      ) : null}
    </>
  );
};

const Button = styled(ExtraButton)`
  background-color: #ccc;
`;
