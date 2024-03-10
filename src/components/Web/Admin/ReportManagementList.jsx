import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import PropTypes from "prop-types";
import styled from "styled-components";

import ManagementTitle from "./ManagementTitle";
import ManagementList from "./ManagementList";
import Filter from "../Shared/Board/Filter";
import Pagination from "../Shared/Board/Pagination";
import { FlexBox } from "@/styles/FlexStyle";
import useAxios from "@/hooks/useAxios";

const ReportManagementList = ({ type, onSideOpen }) => {
  const [cookies] = useCookies(["sessionId"]);
  const [data, setData] = useState([]);
  const [selectedFilterOptions, setSelectedFilterOptions] = useState({});
  const [currPage, setCurrPage] = useState(1);
  const [lastPageIdx, setLastPageIdx] = useState(25);
  const [apiConfig, setApiConfig] = useState({
    method: "get",
    url: `/report/search?page=${currPage}`,
    headers: {
      Authorization: `Bearer ${cookies.sessionId}`
    }
  });
  const { response, loading, error, fetchData } = useAxios(apiConfig);

  // 필터 key 데이터 추출
  const filterKeys = ["createdAt", "types"];

  const filterOptions = filterKeys?.map((key) => {
    if (key === "createdAt") {
      return { key, values: ["oldest", "latest"] };
    } else if (key === "types") {
      return { key, values: ["isOffensive", "isCheating", "isPoorManner"] };
    }
  });

  useEffect(() => {
    fetchData();
  }, [apiConfig]);

  useEffect(() => {
    if (response !== null) {
      setLastPageIdx(response.lastPage + 1);
      setData(response.list);
    } else {
      setLastPageIdx(1);
      setData([]);
    }

    const tmp = [
      {
        id: 1,
        isOffensive: true,
        isCheating: false,
        isPoorManner: true,
        note: "지속적인 욕설 사용",
        createdAt: "yyyy-MM-dd hh:mm:ss",
        reporterId: 5,
        reporterNickname: "someNickname#5",
        reporteeId: 4,
        reporteeNickname: "someNickname#4"
      },
      {
        id: 2,
        isOffensive: true,
        isCheating: false,
        isPoorManner: false,
        note: "지속적인 욕설 사용",
        createdAt: "yyyy-MM-dd hh:mm:ss",
        reporterId: 5,
        reporterNickname: "someNickname#5",
        reporteeId: 4,
        reporteeNickname: "someNickname#4"
      },
      {
        id: 3,
        isOffensive: false,
        isCheating: false,
        isPoorManner: true,
        note: "지속적인 욕설 사용",
        createdAt: "yyyy-MM-dd hh:mm:ss",
        reporterId: 5,
        reporterNickname: "someNickname#5",
        reporteeId: 4,
        reporteeNickname: "someNickname#4"
      }
    ];

    const listData = tmp.map(
      ({
        reporterNickname,
        reporteeNickname,
        createdAt,
        isOffensive,
        isCheating,
        isPoorManner
      }) => ({
        reporterNickname,
        types: {
          isOffensive,
          isCheating,
          isPoorManner
        },
        reporteeNickname,
        createdAt
      })
    );

    setData(listData);
  }, [response]);

  // 페이지, 필터 변경 시 호출
  useEffect(() => {
    if (data.length === 0) {
      return;
    }

    let filteredData = [...data];

    Object.entries(selectedFilterOptions).forEach(([key, value]) => {
      if (key === "createdAt") {
        filteredData.sort((a, b) =>
          value === "oldest"
            ? new Date(a[key]) - new Date(b[key])
            : new Date(b[key]) - new Date(a[key])
        );
      } else if (key === "types") {
        filteredData = filteredData.filter((item) => {
          return Object.entries(value).every(([typeKey, typeValue]) => {
            return typeValue === null || item[typeKey] === typeValue;
          });
        });
      }
    });

    setData(filteredData);

    const queryString = Object.entries(selectedFilterOptions)
      .map(([key, value]) => {
        if (key === "types") {
          return Object.entries(value)
            ?.map(([typeKey, typeValue]) => `${typeKey}=${typeValue ? 1 : 0}`)
            ?.join("&");
        } else if (key === "createdAt") {
          return `order=${value}`;
        } else {
          return `${key}=${value}`;
        }
      })
      .join("&");

    setApiConfig({
      ...apiConfig,
      url: `/report/search?page=${currPage}&${queryString}`
    });
  }, [currPage, selectedFilterOptions]);

  return (
    <>
      {type !== "home" ? (
        <Box>
          <HeaderWrapper row="between" col="center">
            <ManagementTitle title="report" />
            <FilterWrapper marginTop="1.313rem" marginRight="0.75rem">
              <Filter
                filterOptions={filterOptions}
                setSelectedFilterOptions={setSelectedFilterOptions}
              />
            </FilterWrapper>
          </HeaderWrapper>
          <ManagementList
            isHome={false}
            title="report"
            data={data}
            onSideOpen={onSideOpen}
          />
          <Pagination
            currPage={currPage}
            setCurrPage={setCurrPage}
            lastPageIdx={lastPageIdx}
          />
        </Box>
      ) : (
        <Box type={type}>
          <ManagementTitle type={type} title="report" />
          <ManagementList
            isHome={true}
            title="report"
            data={data}
            onSideOpen={onSideOpen}
          />
        </Box>
      )}
    </>
  );
};

ReportManagementList.propTypes = {
  type: PropTypes.string,
  onSideOpen: PropTypes.func
};

const Box = styled.div`
  width: ${({ type }) => (type === "home" ? "28rem" : "37.5rem")};
  height: ${({ type }) => (type === "home" ? "43.6rem" : "49.6rem")};
  padding: 10px;
  background-color: ${({ type, theme }) =>
    type === "home" ? "#fff" : theme.colors.content};
  border-radius: 25px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
`;

const HeaderWrapper = styled(FlexBox)`
  padding-bottom: 14px;
  border-bottom: 5px solid ${({ theme }) => theme.colors.gray400};
`;

const FilterWrapper = styled.div`
  margin-top: ${({ marginTop }) => marginTop};
  margin-right: ${({ marginRight }) => marginRight};
`;

export default ReportManagementList;
