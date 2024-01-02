import React from "react";
import PropTypes from "prop-types";

import { Label, Input } from "./InputFieldStyle";

const InputField = ({ type, message }) => {
  return (
    <>
      {/* {Label 포함한 Input (회원가입 등)} */}
      {type === "label_id" && (
        <Label>
          아이디
          <Input type="text" placeholder="아이디 입력" />
        </Label>
      )}
      {type === "label_pw" && (
        <Label>
          비밀번호
          <Input type="password" placeholder="비밀번호 입력" />
        </Label>
      )}
      {type === "label_pwCheck" && (
        <Label>
          비밀번호 확인
          <Input type="password" placeholder="비밀번호 확인" />
        </Label>
      )}
      {/* {Label 없는 Input} */}
      {type === "id" && <Input type="text" placeholder="아이디를 입력하세요" />}
      {type === "pw" && <Input type="password" placeholder={message} />}
    </>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string
};

export default InputField;
