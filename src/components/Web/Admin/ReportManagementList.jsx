import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import PropTypes from "prop-types";
import styled from "styled-components";

import ManagementTitle from "./ManagementTitle";
import ManagementList from "./ManagementList";
import Filter from "../Shared/Board/Filter";
import Pagination from "../Shared/Board/Pagination";
import { FlexBox } from "@/styles/FlexStyle";
import { Box } from "../../Game/Shared/Layout";
import useAxios from "@/hooks/useAxios";

const ReportManagementList = ({ type, onSideOpen }) => {
  const [cookies] = useCookies(["sessionId"]);
  const [data, setData] = useState([]);
  const [selectedFilterOptions, setSelectedFilterOptions] = useState({
    createdAt: "latest",
    types: {
      isOffensive: 1,
      isPoorManner: 1,
      isCheating: 1
    },
    isHandled: 0
  });
  const [currPage, setCurrPage] = useState(1);
  const [lastPageIdx, setLastPageIdx] = useState(1);
  const [apiConfig, setApiConfig] = useState({
    method: "get",
    url: `/report/search?page=${currPage}`,
    headers: {
      sessionId: cookies.sessionId
    }
  });
  const { response, loading, error, fetchData } = useAxios(apiConfig, false);

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
    if (apiConfig !== null) {
      fetchData();
    }
  }, [apiConfig]);

  useEffect(() => {
    if (response !== null) {
      setLastPageIdx(response.result.lastPage === 0 ? 1 : response.result.lastPage);
      setData(
        response.result.list?.map(
          ({
            id,
            reporterNickname,
            isCheating,
            isOffensive,
            isPoorManner,
            note,
            reporteeNickname,
            createdAt,
            isHandled
          }) => ({
            id,
            reporteeNickname,
            types: {
              isCheating,
              isOffensive,
              isPoorManner,
              note
            },
            reporterNickname,
            createdAt,
            isHandled
          })
        )
      );
    } else {
      setLastPageIdx(1);
      setData([]);
    }
  }, [response]);

  // 페이지, 필터 변경 시 호출
  useEffect(() => {
    if (data?.length === 0) {
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

const HeaderWrapper = styled(FlexBox)`
  padding-bottom: 14px;
`;

const FilterWrapper = styled.div`
  margin-top: ${({ marginTop }) => marginTop};
  margin-right: ${({ marginRight }) => marginRight};
`;

export default ReportManagementList;
