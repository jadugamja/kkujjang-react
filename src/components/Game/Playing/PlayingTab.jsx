import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import { Tab } from "@/components/Game/Shared/Tab";

const PlayingTab = () => (
  <TabWrapper>
    <Tab type="playing">게임중</Tab>
  </TabWrapper>
);

const TabWrapper = styled(FlexBox)`
  & > * + * {
    margin-left: 5px;
  }
`;

export default PlayingTab;
