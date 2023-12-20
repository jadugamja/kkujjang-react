import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${(props) => props.theme.color.background}
  }
`;

export default GlobalStyle;
