import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import { SmallWrapper, BottomLink, SpringTab } from "@/styles/CommonStyle";

const Tab = ({ type }) => {
  const [clickedTab, setClickedTab] = useState(false);
  const tabsRef = useRef([React.createRef(), React.createRef(), React.createRef()]);

  const handleClick = (e) => {
    const idx = tabsRef.current.findIndex((tab) => tab.current === e.target);
    setClickedTab(idx);
  };

  return (
    <SmallWrapper align="flex-end" width="23rem" row="between" onClick={handleClick}>
      <BottomLink to="/notice/list">
        <SpringTab type={type} ref={tabsRef.current[0]} clicked={clickedTab === 0}>
          공지
        </SpringTab>
      </BottomLink>
      <BottomLink to="/inquiry/list">
        <SpringTab type={type} ref={tabsRef.current[1]} clicked={clickedTab === 1}>
          문의
        </SpringTab>
      </BottomLink>
      <SpringTab type={type} ref={tabsRef.current[2]} clicked={clickedTab === 2}>
        내 정보
      </SpringTab>
    </SmallWrapper>
  );
};

Tab.propTypes = {
  type: PropTypes.string
};

Tab.defaultProps = {
  type: "default"
};

export default Tab;
