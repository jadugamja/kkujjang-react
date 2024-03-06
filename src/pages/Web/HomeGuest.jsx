import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "@/hooks/useAxios";
import { ContentWrapper, WideContent } from "@/styles/CommonStyle";
import Header from "@/components/Web/Shared/Layout/Header";
import FlexBox from "@/styles/FlexStyle";
import { Span } from "../../components/Game/Shared/Layout";
import Title from "@/components/Web/Shared/Layout/Title";
import HomeButton from "@/components/Web/Shared/Buttons/HomeButton";
import Banner from "@/components/Web/Shared/Layout/Banner";

const HomeGuest = () => {
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
        <Header type="clearTab" />
        <FlexBox as="main" dir="col" height="100%" margin="7.5rem 0 0" padding="10px">
          <FlexBox
            height="33.125rem"
            border="1px solid #e5e5e5"
            padding="10px"
            margin="0 0 5px"
            row="end"
            col="center"
          >
            <Banner />
            <HomeButton type="guest" />
          </FlexBox>
          <FlexBox dir="col" width="100%" flex="1" border="1px solid #e5e5e5">
            <Link to="/notice/list">
              <Title>공지사항</Title>
            </Link>
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
                <Span font="Noto Sans KR">{item.title}</Span>
                <Span font="Noto Sans KR" fontSize="18px" color="#8F692B">
                  {item.createdAt?.split(" ")[0]}
                </Span>
              </FlexBox>
            ))}
          </FlexBox>
        </FlexBox>
      </WideContent>
    </ContentWrapper>
  );
};

export default HomeGuest;
