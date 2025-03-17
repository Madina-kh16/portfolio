import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./components/styles/GlobalStyles.tsx";
import { myTheme } from "./components/styles/Theme.styled.tsx";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={myTheme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>
);
