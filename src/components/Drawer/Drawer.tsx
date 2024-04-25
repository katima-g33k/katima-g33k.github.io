import React, { useEffect } from "react";
import ModernDrawer from "react-modern-drawer";

import { H2 } from "../Typography";
import LocaleSwitcher from "../LocaleSwitcher";
import Navbar from "../Navbar";

import { useDrawer } from "./DrawerContext";
import { useTranslation } from "react-i18next";

import "react-modern-drawer/dist/index.css";

const Drawer = () => {
  const { isOpen, setIsOpen } = useDrawer();
  const { i18n } = useTranslation();
  const closeDrawer = () => setIsOpen(false);

  useEffect(() => {
    window.addEventListener("resize", closeDrawer);

    return () => {
      window.removeEventListener("resize", closeDrawer);
    };
  }, []);

  return (
    <ModernDrawer
      className="lg:hidden"
      direction="left"
      onClose={closeDrawer}
      open={isOpen}
    >
      <div className="flex flex-col h-full bg-gray-900">
        <H2 className="p-4">{i18n.t("globals.title")}</H2>
        <hr />
        <Navbar
          className="flex-1"
          itemProps={{
            activeClassName: "font-semibold bg-gray-600",
            className: "block p-4",
            onClick: closeDrawer,
          }}
          listClassName="flex flex-col"
          tag="div"
        />
        <hr />
        <LocaleSwitcher className="p-4 text-left w-full" onClick={closeDrawer} />
      </div>
    </ModernDrawer>
  );
};

export default Drawer;
