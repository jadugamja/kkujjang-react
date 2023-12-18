import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </CookiesProvider>
    </RecoilRoot>
  </React.StrictMode>
);
