import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "../constants/routes";
import { LOCALE } from "../constants";

const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Experience = lazy(() => import("./Experience"));
const Home = lazy(() => import("./Home"));

export default function Router() {
  return (
    <Suspense>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          {([LOCALE.EN, LOCALE.FR]).map((locale) => (
            <Route key={locale} path={locale}>
              <Route index element={<Home />} />
              <Route path={routes[locale].about} element={<About />} />
              <Route path={routes[locale].contact} element={<Contact />} />
              <Route path={routes[locale].experience} element={<Experience />} />
            </Route>
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
}
