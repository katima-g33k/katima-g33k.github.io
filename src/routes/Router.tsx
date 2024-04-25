import React from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "../constants/routes";
import { LOCALE } from "../constants";

import Layout from "../components/Layout";

import About from "./About";
import DestinationsPage from "./Destinations";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {([LOCALE.EN, LOCALE.FR]).map((locale) => (
          <Route key={locale} path={locale}>
            <Route index element={<Home />} />
            <Route path={routes[locale].about} element={<About />} />
            <Route path={routes[locale].contact} element={<Contact />} />
            <Route path={routes[locale].experience} element={<Experience />} />
            <Route path={routes[locale].destinations} element={<DestinationsPage />} />
          </Route>
        ))}
      </Route>
    </Routes>
  );
}
