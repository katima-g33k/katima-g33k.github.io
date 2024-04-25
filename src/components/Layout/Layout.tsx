import React from "react";
import { Outlet } from "react-router-dom";
import classnames from "classnames";

import { Drawer, DrawerProvider } from "../Drawer";
import ContentWrapper from "./ContentWrapper";
import Footer from "../Footer";
import Header from "../Header";
import { useLayout } from "./useLayout";

const Layout = () => {
  const { backgroundClass, isHome } = useLayout();

  return (
    <DrawerProvider>
      <div className={classnames(
        "flex flex-col w-full min-h-screen",
        "before:content-[''] before:fixed before:left-0 before:right-0 before:z-[-1] before:block before:h-full",
        "before:w-full, before:blur-sm before:brightness-50 before:bg-no-repeat before:bg-cover",
        backgroundClass
      )}>
        <Header />
        <ContentWrapper isHome={isHome}>
          <Outlet />
        </ContentWrapper>
        <Footer />
      </div>
      <Drawer />
    </DrawerProvider>
  );
};

export default Layout;
