import PropTypes from "prop-types";
import styled from "styled-components";

import { FlexBox } from "@/styles/FlexStyle";

const ProfileActiveToggle = ({ isActiveAccount, setIsActiveAccount }) => {
  const handleToggle = () => {
    if (isActiveAccount) {
      // 임시
      alert("계정을 비활성화하시겠습니까?");
    } else {
      // 임시
      alert("계정을 활성화시키겠습니까?");
    }
    setIsActiveAccount(!isActiveAccount);
  };

  return (
    <ActiveToggle
      col="center"
      row={isActiveAccount ? "end" : "start"}
      active={isActiveAccount}
      onClick={handleToggle}
    >
      <ActiveCircle />
    </ActiveToggle>
  );
};

ProfileActiveToggle.propTypes = {
  isActiveAccount: PropTypes.bool,
  setIsActiveAccount: PropTypes.func
};

const ActiveToggle = styled(FlexBox)`
  width: 75px;
  height: 44px;
  background-color: ${({ active }) => (active ? "#fff" : "#D9D9D9")};
  border: 3px solid ${({ active }) => (active ? "#34E250" : "#787878")};
  border-radius: 22px;

  &:hover {
    cursor: pointer;
  }

  & > div {
    background-color: ${({ active }) => (active ? "#34E250" : "#787878")};
    margin-left: ${({ active }) => !active && "3px"};
    margin-right: ${({ active }) => active && "3px"};
  }
`;

const ActiveCircle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

export default ProfileActiveToggle;
