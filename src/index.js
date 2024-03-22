import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { webTheme, gameTheme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import App from "./App";

const ThemedApp = () => {
  const location = useLocation();
  let isGame = location.pathname.startsWith("/game");

  return (
    <ThemeProvider theme={isGame ? gameTheme : webTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
};

// Strict Mode for dev
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RecoilRoot>
//       <CookiesProvider>
//         <Router>
//           <ThemedApp />
//         </Router>
//       </CookiesProvider>
//     </RecoilRoot>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <CookiesProvider>
      <Router>
        <ThemedApp />
      </Router>
    </CookiesProvider>
  </RecoilRoot>
);
