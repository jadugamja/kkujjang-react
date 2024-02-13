import React from "react";
import { useLocation } from "react-router-dom";

// ===== components import =====
import Header from "@/components/Web/Shared/Layout/Header";
import FindidForm from "@/components/Web/Member/FindidForm";
import FindpwForm from "@/components/Web/Member/FindpwForm";

// ===== style import =====
import { ContentWrapper, NarrowContent, Main } from "@/styles/CommonStyle";

const Find = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const type = query.get("type");

  return (
    <>
      <ContentWrapper row="center" col="center">
        <Header type="big" />
        <NarrowContent>
          <Main>
            <FindidForm />
            {/* <FindpwForm /> */}
            {/* {type === "id" && <FindidForm />} */}
            {/* {type === "pw" && <FindpwForm />} */}
          </Main>
        </NarrowContent>
      </ContentWrapper>
    </>
  );
};

export default Find;
