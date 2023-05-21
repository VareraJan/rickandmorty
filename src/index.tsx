import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { ThemeProvider } from "./app/Providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");

if (!container) {
  throw new Error(
    "Контейнер root не найден. НЕ удалось вмонтировать реакт приложение!"
  );
}

const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
