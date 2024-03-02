import { useState, useEffect } from "react";
import styled from "styled-components";
import { ContentWrapper, WideContent } from "@/styles/CommonStyle";
import Header from "@/components/Web/Shared/Layout/Header";
import FlexBox from "../../styles/FlexStyle";
import { Link, useNavigate } from "react-router-dom";
import Title from "../../components/Web/Shared/Layout/Title";
import useAxios from "../../hooks/useAxios";
import HomeButton from "../../components/Web/Shared/Buttons/HomeButton";

const HomeGuest = () => {
  const [listData, setListData] = useState([]);
  const { response, loading, error } = useAxios({
    method: "get",
    url: "/notice/list"
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (response !== null) {
      setListData(response.list);
    } else {
      setListData([]);
    }

    // 임시 데이터
    const list = [
      {
        id: 0,
        title: "제목1",
        createdAt: "2024-01-01 03:10",
        views: 0
      },
      {
        id: 1,
        title: "제목2",
        createdAt: "2024-01-01 03:10",
        views: 0
      },
      {
        id: 2,
        title: "제목3",
        createdAt: "2024-01-01 03:10",
        views: 0
      },
      {
        id: 3,
        title: "제목4",
        createdAt: "2024-01-01 03:10",
        views: 0
      },
      {
        id: 4,
        title: "제목5",
        createdAt: "2024-01-01 03:10",
        views: 0
      },
      {
        id: 5,
        title: "제목6",
        createdAt: "2024-01-01 03:10",
        views: 0
      },
      {
        id: 6,
        title: "제목7",
        createdAt: "2024-01-01 03:10",
        views: 0
      },
      {
        id: 7,
        title: "제목8",
        createdAt: "2024-01-01 03:10",
        views: 0
      },
      {
        id: 8,
        title: "제목9",
        createdAt: "2024-01-01 03:10",
        views: 0
      },
      {
        id: 9,
        title: "제목10",
        createdAt: "2024-01-01 03:10",
        views: 0
      }
    ];

    setListData(list);
  }, [response]);

  return (
    <ContentWrapper row="center" col="center">
      <WideContent dir="col">
        <Header type="clearTab" />
        <FlexBox as="main" dir="col" height="100%" margin="7.5rem 0 0" padding="10px">
          <FlexBox
            height="33.125rem"
            border="1px solid #e5e5e5"
            margin="10px"
            row="end"
            col="center"
          >
            <HomeButton type="guest" />
          </FlexBox>
          <FlexGrow dir="col">
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
              >
                <Span>{item.title}</Span>
                <Span fontSize="18px" color="#8F692B">
                  {item.createdAt?.split(" ")[0]}
                </Span>
              </FlexBox>
            ))}
          </FlexGrow>
        </FlexBox>
      </WideContent>
    </ContentWrapper>
  );
};

const Span = styled.span`
  font-size: ${({ fontSize }) => fontSize || "21px"};
  color: ${({ color }) => color || "inherit"};
`;

const FlexGrow = styled(FlexBox)`
  width: 100%;
  flex-grow: 1;
  border: 1px solid #e5e5e5;
`;

export default HomeGuest;
