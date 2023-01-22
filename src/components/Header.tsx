import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import H2 from "./H2";
import LocaleSwitcher from "./LocaleSwitcher";
import Navbar from "./Navbar";
import { classNames } from "../lib/classNames";

export default function Header() {
  const [isTransparent, setIsTransparent] = useState(true);
  const { i18n } = useTranslation();

  const setTransparency = () => setIsTransparent(window.scrollY < 50);

  useEffect(() => {
    window.addEventListener("scroll", setTransparency);

    return () => {
      window.removeEventListener("scroll", setTransparency);
    };
  }, []);

  return (
    <header
      className={classNames(
        "fixed w-full flex gap-6 items-center py-3 px-6 md:px-3 flex-wrap justify-between",
        isTransparent ? "bg-transparent" : "bg-gray-700"
      )}
    >
      <H2 className="!mb-0">{i18n.t("globals.title")}</H2>
      <LocaleSwitcher className="lg:order-3"  />
      <Navbar className="basis-full lg:basis-auto lg:order-2" />
    </header>
  );
}
