import React, { PropsWithChildren } from "react";
import classnames from "classnames";

import { Drawer, DrawerProvider } from "../Drawer";
import ContentWrapper, { ContentWrapperProps } from "./ContentWrapper";
import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps extends ContentWrapperProps {
  backgroundClass?: string;
}

const Layout = ({ backgroundClass, children, ...props }: PropsWithChildren<LayoutProps>) => {
  return (
    <DrawerProvider>
      <div className={classnames(
        "flex flex-col w-full min-h-screen",
        "before:content-[''] before:fixed before:left-0 before:right-0 before:z-[-1] before:block before:h-full",
        "before:w-full, before:blur-sm before:brightness-50 before:bg-no-repeat before:bg-cover",
        backgroundClass
      )}>
        <Header />
        <ContentWrapper {...props}>
          {children}
        </ContentWrapper>
        <Footer />
      </div>
      <Drawer />
    </DrawerProvider>
  );
};

export default Layout;
