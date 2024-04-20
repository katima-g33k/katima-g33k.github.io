import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import Router from "./routes/Router";

import en from "./locale/en.json";
import fr from "./locale/fr.json";
import { DEFAULT_LOCALE } from "./constants";

import "./styles/index.css";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: DEFAULT_LOCALE,
    fallbackLng: DEFAULT_LOCALE,
  }).catch();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Router />
    </HashRouter>
  </React.StrictMode>
);
