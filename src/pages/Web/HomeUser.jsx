import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import { userInfoState } from "../../recoil/userState";
import useAxios from "@/hooks/useAxios";
import FlexBox from "@/styles/FlexStyle";
import { ContentWrapper, WideContent } from "@/styles/CommonStyle";
import Header from "@/components/Web/Shared/Layout/Header";
import Title from "@/components/Web/Shared/Layout/Title";
import HomeButton from "@/components/Web/Shared/Buttons/HomeButton";
import Banner from "@/components/Web/Shared/Layout/Banner";
import { Span, StyledLink as NoticeLink } from "@/components/Game/Shared/Layout";

const HomeUser = () => {
  const user = useRecoilValue(userInfoState);
  const isAuthenticated = user != null;

  const [listData, setListData] = useState([]);
  const { response, loading, error } = useAxios({
    method: "get",
    url: "/notice/list?page=1"
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (response !== null) {
      setListData(response.list);
    } else {
      setListData([]);
    }
  }, [response]);

  return (
    <ContentWrapper row="center" col="center">
      <WideContent dir="col">
        <Header type={!isAuthenticated ? "guest" : "clearTab"} />
        <FlexBox as="main" dir="col" height="100%" margin="7.5rem 0 0" padding="0 2rem">
          {/* upper */}
          <FlexBox
            height="25rem"
            padding="10px"
            margin="1.5rem 0 0"
            row="end"
            col="center"
          >
            <Banner />
            <HomeButton type={!isAuthenticated ? "guest" : "member"} />
          </FlexBox>

          {/* lower */}
          <FlexBox
            dir="col"
            width="100%"
            height="fit-content"
            margin="80px 0 0 0"
            padding="0 0 15px 0"
            flex="0 1 0%"
            border="1px solid #e5e5e5"
          >
            {loading ? (
              <Span>Loading...</Span>
            ) : error ? (
              <Span>{error}</Span>
            ) : (
              <>
                <NoticeLink to="/notice/list" width="fit-content">
                  <Title>공지사항</Title>
                </NoticeLink>
                {listData?.slice(0, 3)?.map((item) => (
                  <FlexBox
                    row="between"
                    col="center"
                    width="70%"
                    height="fit-content"
                    margin="8px 32px"
                    key={item.id}
                    id={item.id}
                    onClick={() => navigate(`/notice/${item.id}`)}
                    clicky
                  >
                    <Span font="Noto Sans KR" fontSize="18px">
                      {item.title}
                    </Span>
                    <Span font="Noto Sans KR" fontSize="17px" color="#8F692B">
                      {item.created_at?.split("T")[0]}
                    </Span>
                  </FlexBox>
                ))}
              </>
            )}
          </FlexBox>
        </FlexBox>
      </WideContent>
    </ContentWrapper>
  );
};

export default HomeUser;
