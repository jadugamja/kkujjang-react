import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        hoverBgColor: "#ddd"
      };
    case "setting":
      return {
        bgColor: "#bbbbb9",
        hoverBgColor: "#cccccc"
      };
    case "exit":
      return {
        bgColor: "#FF6C6C",
        hoverBgColor: "",
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

const guide = `
끝말잇기

끝말잇기는 이전 한국어 단어의 끝 한 자리로 시작하는 두 글자 이상의 한국어 단어를 이용하여 차례를 넘기는 방식입니다.

예시) 강아지 -> 지피지기 -> 기회

한글 맞춤법 3장 5절 두음 법칙에 따라 음절을 바꾸어 이을 수 있습니다.

예시) 강강술래 -> 내력 -> 역학`;

export const Button = ({ type, location }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getMessage = (type) => {
    if (type === "help") {
      return guide;
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
        <Modal
          type={type}
          message={getMessage(type)}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      ) : null}
    </>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  location: PropTypes.string
};
