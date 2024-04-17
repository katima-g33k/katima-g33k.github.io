import React from "react";
import classnames from "classnames";
import { useTranslation } from "react-i18next";

import { H2 } from "../Typography";
import LocaleSwitcher from "../LocaleSwitcher";
import Navbar from "../Navbar";

import { useHeader } from "./useHeader";

const Header = () => {
  const { i18n } = useTranslation();
  const { isTransparent } = useHeader();

  return (
    <header
      className={classnames(
        "fixed w-full flex gap-6 items-center py-3 px-6 md:px-3 flex-wrap justify-between",
        isTransparent ? "bg-transparent" : "bg-gray-700"
      )}
    >
      <H2 className="!mb-0">{i18n.t("globals.title")}</H2>
      <Navbar className="basis-full lg:basis-auto order-3 lg:order-2" />
      <LocaleSwitcher className="order-2 lg:order-3" />
    </header>
  );
};

export default Header;
