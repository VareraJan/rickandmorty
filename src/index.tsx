import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { ThemeProvider } from "./app/Providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

import "./shared/config/i18n/i18n";
import { StoreProvider } from "./app/Providers/StoreProvider";
import { ErrorBoundary } from "./app/Providers/ErrorBoundary";

const container = document.getElementById("root");

if (!container) {
  throw new Error(
    "Контейнер root не найден. НЕ удалось вмонтировать реакт приложение!"
  );
}

const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
);
