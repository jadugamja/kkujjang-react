import styled from "styled-components";
import { setLayout, setText } from "./setStyles";

export const BaseBox = styled.div`
  ${setLayout}
`;

export const BaseText = styled.span`
  ${setText}
`;

export const Container = BaseBox;
export const Main = BaseBox.withComponent("main");
export const Section = BaseBox.withComponent("section");
export const Article = BaseBox.withComponent("article");
export const Nav = BaseBox.withComponent("nav");
export const Aside = BaseBox.withComponent("aside");
export const StyledHeader = BaseBox.withComponent("header");
export const StyledFooter = BaseBox.withComponent("footer");
export const Button = BaseBox.withComponent("button");
export const Input = BaseBox.withComponent("input");
export const Img = BaseBox.withComponent("img");
export const Hr = BaseBox.withComponent("hr");
export const H1 = BaseBox.withComponent("h1");
export const H2 = BaseBox.withComponent("h2");
export const H3 = BaseBox.withComponent("h3");
export const H4 = BaseBox.withComponent("h4");
export const Ul = BaseBox.withComponent("ul");
export const Li = BaseBox.withComponent("li");
export const Anchor = BaseBox.withComponent("a");

export const Span = BaseText;
export const P = BaseText.withComponent("p");
export const Code = BaseText.withComponent("code");
