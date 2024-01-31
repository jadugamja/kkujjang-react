import { useState } from "react";
import styled from "styled-components";
import Modal from "../Shared/GameModal";
import { ExtraButton, ExtraButtonIcon as ButtonIcon } from "../Shared/Button";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export const SettingButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>
        <ButtonIcon icon={faGear} />
      </Button>
      {isModalOpen ? (
        <Modal type="setting" isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      ) : null}
    </>
  );
};

const Button = styled(ExtraButton)`
  background-color: #bbbbb9;
`;
