import React from "react"
import ReactDOM from "react-dom/client"
import { RecoilRoot } from "recoil"
import { CookiesProvider } from "react-cookie"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import GlobalStyle from "./styles/GlobalStyle"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </CookiesProvider>
    </RecoilRoot>
  </React.StrictMode>,
)
