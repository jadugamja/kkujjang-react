import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ManagementList from "./ManagementList";
import Pagination from "../Shared/Board/Pagination";
import ManagementTitle from "./ManagementTitle";

const InquiryManagementList = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const tmp = [
      {
        id: 0,
        type: "문의유형1",
        title: "제목1",
        needsAnswer: true
      },
      {
        id: 1,
        type: "문의유형1",
        title: "제목2",
        needsAnswer: true
      },
      {
        id: 2,
        type: "문의유형1",
        title: "제목3",
        needsAnswer: true
      }
    ];

    setData(tmp);
  }, []);

  return (
    <>
      {type !== "home" ? (
        <Box>
          <ManagementTitle title="inquiry" />
          <ManagementList title="inquiry" data={data} />
          <Pagination />
        </Box>
      ) : (
        <Box type={type}>
          <ManagementTitle type={type} title="inquiry" />
          <ManagementList title="inquiry" data={data} />
        </Box>
      )}
    </>
  );
};

InquiryManagementList.propTypes = {
  type: PropTypes.string
};

const Box = styled.div`
  width: ${({ type }) => (type === "home" ? "28rem" : "37.5rem")};
  height: 48.6rem;
  background-color: ${({ type, theme }) =>
    type === "home" ? "#fff" : theme.colors.content};
`;

export default InquiryManagementList;
