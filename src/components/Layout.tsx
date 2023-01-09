import React, { PropsWithChildren } from "react";
import Header from "./Header";
import { classNames } from "../lib/classNames";

interface LayoutProps {
  backgroundClass?: string;
}

export default function Layout({ backgroundClass = "", children }: PropsWithChildren<LayoutProps>) {
  return (
    <div className={classNames(
      "flex flex-col w-full min-h-screen",
      "before:content-[''] before:fixed before:left-0 before:right-0 before:z-[-1] before:block before:h-full",
      "before:w-full, before:blur-sm before:brightness-50 before:bg-no-repeat before:bg-cover",
      backgroundClass
    )}>
      <Header />
      <main className="flex flex-1 px-6 md:px-3 justify-center">
        {children}
      </main>
    </div>
  );
}
