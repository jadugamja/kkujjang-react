import { Container as TabWrapper } from "@/styles/StyledComponents";
import { Tab } from "@/components/Game/Shared/Tab";

const PlayingTab = () => (
  <TabWrapper $display="flex" $horizontalGap="5px">
    <Tab type="playing">게임중</Tab>
  </TabWrapper>
);

export default PlayingTab;
