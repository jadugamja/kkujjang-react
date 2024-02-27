import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GUIDE } from "@/assets/data/const";
import { faCircleQuestion, faGear, faX } from "@fortawesome/free-solid-svg-icons";
import Modal from "./GameModal";

const StyledSmallButton = styled.button`
  width: 50px;
  height: 42px;
  background-color: ${({ type }) => getColors(type).bgColor || "initial"};
  border-radius: 15px 15px 0 0;

  &:hover {
    background-color: ${({ type }) => getColors(type).hoverBgColor};
  }
`;

const StyledButtonIcon = styled(FontAwesomeIcon)`
  color: ${({ type }) => getColors(type).color || "initial"};
  font-size: ${({ type }) => getColors(type).fontSize || "20px"};
`;

export const StyledMiniButton = styled.button`
  padding: ${({ layout }) => (layout === "side" ? "5px 9px" : "5px 14px")};
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 10px;
  font-size: 11px;
`;

const getColors = (type) => {
  switch (type) {
    case "help":
      return {
        bgColor: "#ccc",
        hoverBgColor: "#E0E0E0"
      };
    case "setting":
      return {
        bgColor: "#bbbbb9",
        hoverBgColor: "#ddd"
      };
    case "exit":
      return {
        bgColor: "#FF6C6C",
        hoverBgColor: "#e55f5f",
        color: "#fff",
        fontSize: "19px"
      };
  }
};

const getIcon = (type) => {
  switch (type) {
    case "help":
      return faCircleQuestion;
    case "setting":
      return faGear;
    case "exit":
      return faX;
  }
};

export const Button = ({ type, location }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getMessage = (type) => {
    if (type === "help") {
      return GUIDE;
    } else if (type === "exit") {
      return location === "playing" ? "게임을 그만두시겠습니까?" : "방을 나가시겠습니까?";
    }
  };

  return (
    <>
      <StyledSmallButton type={type} onClick={() => setIsModalOpen(true)}>
        <StyledButtonIcon type={type} icon={getIcon(type)} />
      </StyledSmallButton>
      {isModalOpen ? (
        <Modal type={type} isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          {getMessage(type)}
        </Modal>
      ) : null}
    </>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  location: PropTypes.string
};

// 준비 버튼
// const ButtonWrapper = styled(FlexBox)`
//   flex-grow: 1;
//   background-color: #eee;
// `;

// const ReadyButton = styled.button`
//   padding: 14px 26px;
//   background-color: #ffd700;
//   font-family: "DNFBitBitv2";
//   font-size: 32px;
//   letter-spacing: 10px;
//   transition-duration: 0.4s;
//   border-radius: 6px;

//   &:hover {
//     background-color: #8b4513;
//     color: black;
//   }

//   &:first-letter {
//     margin-left: 10px;
//   }
// `;
