import React from "react";
import PropTypes from "prop-types";

import {
  ModalBackground,
  ModalWrapper,
  ModalHeader,
  ExitMiniCircle,
  ModalContent,
  ModalMessage
} from "./WebModalStyle.jsx";

const handelExit = (e) => {};

const WebModal = ({ type, message }) => {
  return (
    <ModalBackground>
      <ModalWrapper onClick={handelExit}>
        {type === "confirm" && (
          <>
            {/* {문구 + 버튼 조합 모달 (버튼 클릭 시, 모달창 닫힘)} */}
            <ModalHeader>
              <ExitMiniCircle></ExitMiniCircle>
            </ModalHeader>
            <ModalContent>
              <ModalMessage>{message}</ModalMessage>
            </ModalContent>
          </>
        )}
      </ModalWrapper>
    </ModalBackground>
  );
};

WebModal.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string
};

export default WebModal;
