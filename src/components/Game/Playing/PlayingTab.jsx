import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import { MainTab } from "@/components/Game/Shared/Tab";

const PlayingTab = () => (
  <TabWrapper>
    <MainTab bgColor="#889E7D">게임중</MainTab>
  </TabWrapper>
);

const TabWrapper = styled(FlexBox)`
  & > * + * {
    margin-left: 5px;
  }
`;

export default PlayingTab;
