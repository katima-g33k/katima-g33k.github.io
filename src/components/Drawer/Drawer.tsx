import React, { useEffect } from "react";
import ModernDrawer from "react-modern-drawer";

import { H2 } from "../Typography";
import LocaleSwitcher from "../LocaleSwitcher";
import Navbar from "../Navbar";

import { useDrawer } from "./DrawerContext";
import { useTranslation } from "react-i18next";

import "react-modern-drawer/dist/index.css";

const Drawer = () => {
  const { isOpen, setIsOpen, toggleIsOpen } = useDrawer();
  const { i18n } = useTranslation();

  useEffect(() => {
    const closeDrawer = () => setIsOpen(false);

    window.addEventListener("resize", closeDrawer);

    return () => {
      window.removeEventListener("resize", closeDrawer);
    };
  }, []);

  return (
    <ModernDrawer
      className="lg:hidden"
      direction="left"
      onClose={toggleIsOpen}
      open={isOpen}
    >
      <div className="flex flex-col h-full bg-gray-900">
        <H2 className="p-4">{i18n.t("globals.title")}</H2>
        <hr />
        <Navbar
          activeItemClassName="font-semibold bg-gray-600"
          className="flex-1"
          itemClassName="block p-4"
          listClassName="flex flex-col"
          tag="div"
        />
        <hr />
        <LocaleSwitcher className="p-4 text-left w-full" />
      </div>
    </ModernDrawer>
  );
};

export default Drawer;
