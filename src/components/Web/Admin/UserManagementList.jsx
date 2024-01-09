import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ManagementList from "./ManagementList";
import Pagination from "../Shared/Board/Pagination";
import ManagementTitle from "./ManagementTitle";

const UserManagementList = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const tmp = [
      {
        id: 0,
        nickname: "닉네임1",
        username: "아이디1",
        createdAt: "2024-01-01 03:10",
        isBanned: false
      },
      {
        id: 1,
        nickname: "닉네임2",
        username: "아이디2",
        createdAt: "2024-01-01 03:10",
        isBanned: false
      },
      {
        id: 2,
        nickname: "닉네임3",
        username: "아이디3",
        createdAt: "2024-01-01 03:10",
        isBanned: false
      }
    ];

    setData(tmp);
  }, []);

  return (
    <>
      {type !== "home" ? (
        <Box>
          <ManagementTitle title="user" />
          <ManagementList title="user" data={data} />
          <Pagination />
        </Box>
      ) : (
        <Box type={type}>
          <ManagementTitle type={type} title="user" />
          <ManagementList title="user" data={data} />
        </Box>
      )}
    </>
  );
};

UserManagementList.propTypes = {
  type: PropTypes.string
};

const Box = styled.div`
  width: ${({ type }) => (type === "home" ? "28rem" : "37.5rem")};
  height: 48.6rem;
  background-color: ${({ type, theme }) =>
    type === "home" ? "#fff" : theme.colors.content};
`;

export default UserManagementList;
