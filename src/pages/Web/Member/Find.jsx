import React from "react";
import { useLocation } from "react-router-dom";

// ===== style import =====
import { FlexBox } from "@/styles/FlexStyle";
import { ContentWrapper, NarrowContent } from "@/styles/CommonStyle";

// ===== components import =====
import Header from "@/components/Web/Shared/Layout/Header";
import FindidForm from "@/components/Web/Member/FindidForm";
import FindpwForm from "@/components/Web/Member/FindpwForm";

// ===== component =====
const Find = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const type = query.get("type");

  return (
    <>
      <ContentWrapper row="center" col="center">
        <Header type="big" />
        <NarrowContent>
          <FlexBox as="main" width="100%" margin="15.5rem 0 3.5rem">
            {type === "id" && <FindidForm />}
            {type === "pw" && <FindpwForm />}
          </FlexBox>
        </NarrowContent>
      </ContentWrapper>
    </>
  );
};

export default Find;
