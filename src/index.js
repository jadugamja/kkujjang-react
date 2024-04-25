import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { webTheme, gameTheme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import App from "./App";
import Audio from "./components/Game/Shared/Audio";
import { PUBLIC_URL } from "./services/const";

const ThemedApp = () => {
  const location = useLocation();
  let isGame = location.pathname.startsWith("/game");

  return (
    <ThemeProvider theme={isGame ? gameTheme : webTheme}>
      <GlobalStyle />
      <Audio />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <CookiesProvider>
      <Router>
        <ThemedApp />
      </Router>
    </CookiesProvider>
  </RecoilRoot>
);
