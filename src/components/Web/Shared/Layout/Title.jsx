import styled from "styled-components";
import PropTypes from "prop-types";
import { FlexBox } from "@/styles/FlexStyle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Title = ({ children }) => {
  return (
    <FlexBox col="center" height="4rem" padding="15px 0 4px 0">
      <StyledTitle
        fontSize="26px"
        fontWeight="800"
        color="#413014"
        margin="0 12px 0 33px"
      >
        {children}
      </StyledTitle>
      <FontAwesomeIcon icon={faChevronRight} size="lg" />
    </FlexBox>
  );
};

Title.propTypes = {
  children: PropTypes.string
};

const StyledTitle = styled.h2`
  margin: ${({ margin }) => margin};
  font-family: "Pretendard Variable";
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;

export default Title;
