import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n"; //dzieki temu dziala useTranslation
import { RedirectionProvider } from "./context/redirectionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RedirectionProvider>
        <App />
      </RedirectionProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
