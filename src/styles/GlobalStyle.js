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

  // 배달의민족 한나체
  @font-face {
    font-family: 'Hanna';
    src: url('/fonts/BMHANNA_11yrs_ttf.ttf');
  }

  // 배달의민족 한나체 Air
  @font-face {
    font-family: 'BMHANNAAir';
    src: url('/fonts/BMHANNAAir_ttf.ttf');
    font-weight: normal;
    font-style: normal;
  }

  // Alfa Slab One
  @font-face {
    font-family: 'AlfaSlabOne';
    src: url('/fonts/AlfaSlabOne-Regular.ttf');
  }

  // Zen Dots
  @font-face {
    font-family: 'ZenDots';
    src: url('/fonts/ZenDots-Regular.ttf');
  }

  // Poller One
  @font-face {
    font-family: 'PollerOne';
    src: url('/fonts/PollerOne-Regular.ttf');
  }


  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, 'FontAwesome';
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.main};
    cursor: auto;
  }

  form {
    margin: 0;
  }

  table {
    border-collapse: collapse;
  }

  input, select {
    outline: 0;
  }

  textarea {
    outline: 0;
    resize: none;
  }

  button {
    border-width: 0;
  }

  ul, ol {
    list-style-type: none;
    margin: 0;
    padding-inline-start: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover, button:hover, input[type="submit"] {
    cursor: pointer;
  }
`;

export default GlobalStyle;
