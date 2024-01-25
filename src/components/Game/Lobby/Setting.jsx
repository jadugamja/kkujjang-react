import { useState } from "react";
import styled from "styled-components";
import GameModal from "../Shared/GameModal";
import { ExtraButton, ExtarButtonIcon as ButtonIcon } from "../Shared/Button";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export const SettingButton = () => {
  const [isModalOpen, setIsModalOpen] = useState();

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>
        <ButtonIcon icon={faGear} />
      </Button>
      {isModalOpen ? (
        <GameModal type="setting" isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      ) : null}
    </>
  );
};

const Button = styled(ExtraButton)`
  background-color: #bbbbb9;
`;
