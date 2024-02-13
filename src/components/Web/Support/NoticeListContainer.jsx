import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import PropTypes from "prop-types";

// ===== components import =====
import BoardTitle from "@/components/Web/Shared/Board/BoardTitle";
import SearchBar from "@/components/Web/Shared/Board/SearchBar";
import BoardItem from "@/components/Web/Shared/Board/BoardItem";

// ===== style =====
const Noticewrapper = styled(FlexBox)``;

// ===== component =====
const NoticeListContainer = ({ noticeData }) => {
  return (
    <>
      <BoardTitle type="notice" />
      <Noticewrapper row="end">
        <SearchBar />
      </Noticewrapper>
      {noticeData?.map((data) => (
        <BoardItem key={data.id} id={data.id} data={data} />
      ))}
    </>
  );
};

NoticeListContainer.propTypes = {
  noticeData: PropTypes.array
};

export default NoticeListContainer;
