import { useRecoilState } from "recoil";
import PropTypes from "prop-types";
import styled from "styled-components";

import { isActiveAccountState } from "@/recoil/userState";
import { FlexBox } from "@/styles/FlexStyle";

const ProfileActiveToggle = ({ isActive }) => {
  // const [accountStates, setAccountStates] = useRecoilState(isActiveAccountState);
  // const isActiveAccount = accountStates[userId];
  const isActiveAccount = isActive;

  const onActiveToggle = () => {
    if (isActiveAccount) {
      // 임시
      alert("계정을 비활성화하시겠습니까?");
    } else {
      // 임시
      alert("계정을 활성화시키겠습니까?");
    }
    setAccountStates((oldState) => ({ ...oldState, [userId]: !isActiveAccount }));
  };

  return (
    <ActiveToggle
      col="center"
      row={isActiveAccount ? "end" : "start"}
      active={isActiveAccount}
      onClick={onActiveToggle}
    >
      <ActiveCircle />
    </ActiveToggle>
  );
};

ProfileActiveToggle.propTypes = {
  isActive: PropTypes.bool
  // userId: PropTypes.oneOfType[(PropTypes.number, PropTypes.string)]
};

const ActiveToggle = styled(FlexBox)`
  width: 64px;
  height: 36px;
  background-color: ${({ active }) => (active ? "#fff" : "#D9D9D9")};
  border: 3px solid ${({ active }) => (active ? "#34E250" : "#787878")};
  border-radius: 40px;

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
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export default ProfileActiveToggle;
