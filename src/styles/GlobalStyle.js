import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  // 노토 산스
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('/fonts/NotoSansKR-VariableFont_wght.ttf') format('truetype');
    font-weight: 100 900;
  }

  // 프리텐다드
  @font-face {
    font-family: 'Pretendard Variable';
    src: url('/fonts/PretendardVariable.woff2') format('woff2-variations');
    font-weight: 100 900;
  }

  // 구기체
  @font-face {
    font-family: 'Gugi';
    src: url('/fonts/Gugi-Regular.ttf');
    font-weight: 400;
  }

  // 던전앤파이터 비트비트체
  @font-face {
    font-family: 'DNFBitBitv2';
    src: url('/fonts/DNFBitBitv2.otf');
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
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.main};
  }

  form {
    margin: 0;
  }

  input[type="text"], input[type="submit"], input[type="submit"] {
    outline: 0;
  }

  button {
    border-width: 0;
  }
  
  a {
    text-decoration: none;
  }

  a:hover, button:hover, input[type="submit"] {
    cursor: pointer;
  }
`;

export default GlobalStyle;
