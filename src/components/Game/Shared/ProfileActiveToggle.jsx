import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRecoilValue, useRecoilState } from "recoil";
import PropTypes from "prop-types";
import styled from "styled-components";

import useAxios from "../../../hooks/useAxios";
import { itemIdState } from "@/recoil/boardState";
import { FlexBox } from "@/styles/FlexStyle";
import Modal from "@/components/Web/Shared/Modal/WebModal";

const ProfileActiveToggle = ({ isActiveAccount }) => {
  // const [accountStates, setAccountStates] = useRecoilState(isActiveAccountState);
  // const isActiveAccount = accountStates[userId];
  const id = useRecoilValue(itemIdState);
  const [isBannedUser, setIsBannedUser] = useState(isActiveAccount);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiConfig, setApiConfig] = useState(null);
  const { response, error, loading, fetchData } = useAxios(apiConfig, false);
  const [cookies] = useCookies(["sessionId"]);

  useEffect(() => {
    fetchData();
  }, [apiConfig]);

  useEffect(() => {
    if (response !== null) {
      setIsModalOpen(false);
      // setIsBannedUser(response.result.isBanned);
    }
  }, [response]);

  const onActiveToggle = (bannedDays, bannedReason) => {
    setApiConfig({
      method: "put",
      url: "/ban",
      headers: { sessionId: cookies.sessionId },
      data: {
        userId: id,
        bannedDays: bannedDays,
        bannedReason: bannedReason
      }
    });
  };

  return (
    <>
      {isModalOpen && (
        <Modal isBan={true} onClick={onActiveToggle} setIsOpen={setIsModalOpen} />
      )}
      <ActiveToggle
        col="center"
        row={isActiveAccount ? "end" : "start"}
        active={isActiveAccount}
        onClick={() => setIsModalOpen(true)}
      >
        <ActiveCircle />
      </ActiveToggle>
    </>
  );
};

ProfileActiveToggle.propTypes = {
  isActiveAccount: PropTypes.bool
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
