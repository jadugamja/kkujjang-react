import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// ===== style ======
const FormTitleWrapper = styled.div`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
`;

const FormTitleText = styled.p`
  color: ${(props) => props.color || "#828282"};
  font-family: "Gugi";
  font-size: ${(props) => props.fontSize || "32px"};
  font-weight: ${(props) => props.fontWeight || "500"};
  margin: ${(props) => props.margin || "30px 0 20px"};
`;

// ===== component ======
const FormTitle = ({ type, marginTop, marginBottom }) => {
  const getFormTitle = () => {
    switch (type) {
      case "signup":
        return "회원가입";
      case "login":
        return "로그인";
      case "findid":
        return "아이디 찾기";
      case "findpw":
        return "비밀번호 찾기";
      case "changepw":
        return "비밀번호 변경";
      case "withdrawal":
        return "회원 탈퇴";
    }
  };

  return (
    <FormTitleWrapper>
      <FormTitleText marginTop={marginTop} marginBottom={marginBottom}>
        {getFormTitle()}
      </FormTitleText>
    </FormTitleWrapper>
  );
};

FormTitle.propTypes = {
  type: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string
};

export default FormTitle;
