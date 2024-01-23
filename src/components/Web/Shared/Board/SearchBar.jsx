import { useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FlexBox } from "@/styles/FlexStyle";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ searchType, setSearchKeyword }) => {
  const keywordRef = useRef();

  const sendKeyword = (e) => {
    e.preventDefault();

    setSearchKeyword(keywordRef.current.value);
    keywordRef.current.value = "";
  };

  return (
    <SearchInputWrapper col="center" field={searchType}>
      <SearchTypeInput type="text" readOnly value={searchType} />
      <SearchKeywordInput
        type="text"
        field={searchType}
        placeholder="검색어 입력"
        onKeyDown={(e) => {
          if (e.key === "Enter") sendKeyword(e);
        }}
        ref={keywordRef}
      />
      <SearchButton onClick={(e) => sendKeyword(e)}>
        <SearchIcon icon={faMagnifyingGlass} />
      </SearchButton>
    </SearchInputWrapper>
  );
};

SearchBar.propTypes = {
  searchType: PropTypes.string,
  setSearchKeyword: PropTypes.func
};

const SearchInputWrapper = styled(FlexBox)`
  border: 2px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 10px;
  width: ${({ field }) => (field !== "닉네임" ? "26.5rem" : "18.5rem")};
  height: ${(props) => props.height || "3.2rem"};
`;

const TransparentInput = styled.input`
  border: 0;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.xxxs};
`;

const SearchTypeInput = styled(TransparentInput)`
  width: ${({ value }) => (value === "닉네임" ? "5.25rem" : "4.2rem")};
  padding: 0 16px;
  border-right: 2px solid ${({ theme }) => theme.colors.gray200};

  &:hover {
    cursor: default;
  }
`;

const SearchKeywordInput = styled(TransparentInput)`
  flex: 1;
  margin: 0 10px;
  width: ${({ field }) => field === "닉네임" && "9.25rem"};

  &::placeholder {
    color: #a7a7a7;
  }
`;

const SearchButton = styled.button`
  background-color: transparent;
  width: 22px;
  margin-right: 15px;
  padding: 0;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 19px;
`;

export default SearchBar;
