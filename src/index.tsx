import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import App from "./App";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locale/en.json";
import fr from "./locale/fr.json";
import { BrowserRouter } from "react-router-dom";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: "en",
    fallbackLng: "en",
  });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
