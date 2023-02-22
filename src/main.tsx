import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Routes>
        <App />
      </Routes>
    </ThemeProvider>
  </React.StrictMode>
);
