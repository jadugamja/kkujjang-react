import { useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FlexBox } from "@/styles/FlexStyle";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ setSearchKeyword }) => {
  const keywordRef = useRef();

  const sendKeyword = (e) => {
    e.preventDefault();

    setSearchKeyword(keywordRef.current.value);
    keywordRef.current.value = "";
  };

  return (
    <SearchInputWrapper col="center">
      <SearchTypeInput type="text" readOnly value="제목" />
      <SearchKeywordInput
        type="text"
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

Search.propTypes = {
  setSearchKeyword: PropTypes.func
};

const SearchInputWrapper = styled(FlexBox)`
  border: 2px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 10px;
  width: ${(props) => props.width || "26.5rem"};
  height: ${(props) => props.height || "3.5rem"};
`;

const TransparentInput = styled.input`
  border: 0;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.xxxs};
`;

const SearchTypeInput = styled(TransparentInput)`
  width: 4.2rem;
  padding: 0 16px;
  border-right: 2px solid ${({ theme }) => theme.colors.gray200};

  &:hover {
    cursor: default;
  }
`;

const SearchKeywordInput = styled(TransparentInput)`
  flex: 1;
  margin: 0 10px;

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

export default Search;
