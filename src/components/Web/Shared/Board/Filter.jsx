import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import hoveredFilter from "@/assets/images/icon-filter-gr.png";
import defaultFilter from "@/assets/images/icon-filter.png";

const Filter = ({ data }) => {
  data = [{ status: true }, { status: false }];

  const [filter, setFilter] = useState(data[0]);
  const [isClicked, setIsClicked] = useState(false);

  const applyFilterOption = (e) => {
    setFilter(e.target.value);
    setIsClicked(!isClicked);
  };

  // const filteredData = data.filter((item) => item.includes(filter));

  return (
    <div>
      <FilterImage
        src={defaultFilter}
        onClick={() => setIsClicked(!isClicked)}
        onMouseOver={(e) => e.target.setAttribute("src", hoveredFilter)}
        onMouseOut={(e) => e.target.setAttribute("src", defaultFilter)}
      />
      {isClicked && (
        <FilterList>
          {data?.map((item, idx) => (
            <FilterListItem key={idx} value={item} onClick={applyFilterOption}>
              {item.status ? "답변 " : ""}
            </FilterListItem>
          ))}
        </FilterList>
      )}
    </div>
  );
};

Filter.propTypes = {
  data: PropTypes.array
};

const FilterImage = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

const FilterList = styled.ul`
  width: max-content;
  background-color: ${({ theme }) => theme.colors.content};
  border: 2px solid #a2a2a2;
  border-radius: 1px;
  box-shadow: 0 1px 4px #00000019;
`;

const FilterListItem = styled.li`
  padding: 3px 10px;
  &:hover {
    background-color: #ebeae6;
    font-weight: 700;
    cursor: pointer;
  }
`;

export default Filter;
