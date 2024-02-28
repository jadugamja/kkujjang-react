import React from "react";
import styled, { keyframes } from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

// ===== components import =====
import Header from "@/components/Web/Shared/Layout/Header";

// ===== style =====
const fadeIn = keyframes`
  from { opacity: 0;}
  to {opacity: 1;}
`;

// 콘텐츠 영역 감싸는 태그
const StyledContentWrapper = styled(FlexBox)`
  animation: ${fadeIn} 0.5s ease-in-out;
`;

// 넓은 콘텐츠 영역 (width: 1200px)
const StyledWideContent = styled(FlexBox)`
  width: 100%;
  height: 100vh;
`;

// 좁은 콘텐츠 영역 (width: 652px)
const StyledNarrowContent = styled(FlexBox)`
  width: 36.75rem;
  height: ${(props) => props.height || "fit-content"};
`;

// 페이지의 핵심 콘텐츠
const StyledMain = styled.main`
  width: 100%;
  margin-top: ${(props) => props.marginTop || "7.5rem"};
`;

const StyledCustomMain = styled(StyledMain)`
  padding-top: ${(props) => props.paddingTop || "150px"};
  background-color: ${({ theme }) => theme.colors.content};
`;

const Member = ({ type, children, marginTop }) => {
  return (
    // type : big, detail
    <StyledContentWrapper row="center" col="center">
      <Header type={type} />
      {type === "detail" ? (
        <StyledWideContent>
          <StyledCustomMain>{children}</StyledCustomMain>
        </StyledWideContent>
      ) : (
        <StyledNarrowContent>
          <StyledMain marginTop={marginTop}>{children}</StyledMain>
        </StyledNarrowContent>
      )}
    </StyledContentWrapper>
  );
};

Member.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  marginTop: PropTypes.string
};

export default Member;
