import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";
import Header from "@/components/Web/Shared/Layout/Header";

const HomeMember = () => {
  return (
    <ContentWrapper row="center" col="center">
      <WideContent dir="col">
        <Header />
        <Main></Main>
      </WideContent>
    </ContentWrapper>
  );
};

export default HomeMember;
