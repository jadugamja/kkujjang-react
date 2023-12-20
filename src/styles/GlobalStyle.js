import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('/fonts/NotoSansKR-VariableFont_wght.ttf') format('truetype');
    font-weight: 100 900;
  }

  @font-face {
    font-family: 'Pretendard Variable';
    src: url('/fonts/PretendardVariable.woff2') format('woff2-variations');
    font-weight: 100 900;
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif, 'FontAwesome';
  }

  body {
    margin: 0;
    background: ${(props) => props.theme.color.background}
  }

  form {
    margin: 0;
  }

  a:hover, button:hover, input[type="submit"] {
    cursor: pointer;
  }
`;

export default GlobalStyle;
