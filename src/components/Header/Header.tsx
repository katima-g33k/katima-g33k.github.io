import React from "react";
import classnames from "classnames";
import { Menu } from "react-feather";
import { useTranslation } from "react-i18next";

import { H2 } from "../Typography";
import LocaleSwitcher from "../LocaleSwitcher";
import Navbar from "../Navbar";

import { useDrawer } from "../Drawer";
import { useHeader } from "./useHeader";

const Header = () => {
  const { i18n } = useTranslation();
  const { isTransparent } = useHeader();
  const { toggleIsOpen: toggleDrawer } = useDrawer();

  return (
    <header
      className={classnames(
        "fixed w-full flex gap-6 items-center py-3 px-6 md:px-3 flex-wrap justify-between",
        isTransparent ? "bg-transparent" : "bg-gray-700"
      )}
    >
      <H2 className="!mb-0">{i18n.t("globals.title")}</H2>
      <Navbar
        className="hidden lg:block"
        itemProps={{
          activeClassName: "font-semibold border-b-white",
          className: "flex gap-1 text-lg border-b border-b-solid border-b-transparent hover:border-b-white"
        }}
        listClassName="flex gap-5 justify-start items-center"
      />
      <LocaleSwitcher className="hidden lg:block" />
      <button className="lg:hidden" onClick={toggleDrawer}>
        <Menu />
      </button>
    </header>
  );
};

export default Header;
