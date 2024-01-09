import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ManagementList from "./ManagementList";
import Pagination from "../Shared/Board/Pagination";
import ManagementTitle from "./ManagementTitle";

const ReportManagementList = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const tmp = [
      {
        id: 0,
        reporterId: "신고자 아이디1",
        type: "문의유형1",
        reporteeId: "피신고자 아이디1",
        createdAt: "2024-01-01 03:10"
      },
      {
        id: 1,
        reporterId: "신고자 아이디1",
        type: "문의유형1",
        reporteeId: "피신고자 아이디1",
        createdAt: "2024-01-01 03:10"
      },
      {
        id: 2,
        reporterId: "신고자 아이디1",
        type: "문의유형1",
        reporteeId: "피신고자 아이디1",
        createdAt: "2024-01-01 03:10"
      }
    ];

    setData(tmp);
  }, []);

  return (
    <>
      {type !== "home" ? (
        <Box>
          <ManagementTitle title="report" />
          <ManagementList data={data} />
          <Pagination />
        </Box>
      ) : (
        <Box type={type}>
          <ManagementTitle type={type} title="report" />
          <ManagementList title="report" data={data} />
        </Box>
      )}
    </>
  );
};

const Box = styled.div`
  width: ${({ type }) => (type === "home" ? "28rem" : "37.5rem")};
  height: 48.6rem;
  background-color: ${({ type, theme }) =>
    type === "home" ? "#fff" : theme.colors.content};
`;

ReportManagementList.propTypes = {
  type: PropTypes.string
};

export default ReportManagementList;
