import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRecoilValue, useSetRecoilState } from "recoil";
import PropTypes from "prop-types";
import styled from "styled-components";

import useAxios from "@/hooks/useAxios";
import { itemIdState, remoteApiConfigState } from "@/recoil/boardState";
import { FlexBox } from "@/styles/FlexStyle";
import Modal from "@/components/Web/Shared/Modal/WebModal";

const ProfileActiveToggle = ({ isActive, setIsActive }) => {
  const id = useRecoilValue(itemIdState);
  const setRemoteApiConfig = useSetRecoilState(remoteApiConfigState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiConfig, setApiConfig] = useState(null);
  const { response, error, loading, fetchData } = useAxios(apiConfig, false);
  const [cookies] = useCookies(["sessionId"]);

  useEffect(() => {
    if (apiConfig !== null) {
      fetchData();
    }
  }, [apiConfig]);

  useEffect(() => {
    if (response !== null) {
      setIsActive(!isActive);
      setRemoteApiConfig({
        method: "get",
        url: "/user/search",
        headers: {
          sessionId: cookies.sessionId
        }
      });
      setIsModalOpen(false);
    }
  }, [response]);

  const onActiveToggle = (bannedDays, bannedReason) => {
    if (!isActive) {
      setApiConfig({
        method: "put",
        url: "/ban",
        headers: { sessionId: cookies.sessionId },
        data: {
          userId: id,
          bannedDays: 0,
          bannedReason: "reactivate account"
        }
      });
    } else {
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
    }
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          isBan={isActive}
          hasButton={!isActive}
          onClick={onActiveToggle}
          setIsOpen={setIsModalOpen}
        >
          {!isActive && "계정을 활성화시키겠습니까?"}
        </Modal>
      )}
      <ActiveToggle
        col="center"
        row={isActive ? "end" : "start"}
        active={isActive}
        onClick={() => setIsModalOpen(true)}
      >
        <ActiveCircle />
      </ActiveToggle>
    </>
  );
};

ProfileActiveToggle.propTypes = {
  isActive: PropTypes.bool,
  setIsActive: PropTypes.func
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
