import React from "react";
import { useTranslation } from "react-i18next";

import H2 from "./H2";
import LocaleSwitcher from "./LocaleSwitcher";
import Navbar from "./Navbar";

export default function Header() {
  const { i18n } = useTranslation();

  return (
    <header className="flex gap-6 items-center py-3 px-6 md:px-3 flex-wrap justify-between">
      <H2>{i18n.t("globals.title")}</H2>
      <LocaleSwitcher className="lg:order-3"  />
      <Navbar className="basis-full lg:basis-auto lg:order-2" />
    </header>
  );
}
