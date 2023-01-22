import React, { PropsWithChildren } from "react";
import ContentWrapper, { ContentWrapperProps } from "./ContentWrapper";
import Header from "./Header";
import Footer from "./Footer";
import { classNames } from "../lib/classNames";

interface LayoutProps extends ContentWrapperProps {
  backgroundClass?: string;
}

export default function Layout({ backgroundClass = "", children, ...props }: PropsWithChildren<LayoutProps>) {
  return (
    <div className={classNames(
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
  );
}
