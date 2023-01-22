import React, { PropsWithChildren } from "react";
import { classNames } from "../lib/classNames";

export interface ContentWrapperProps {
  isHome?: boolean;
}

export default function ContentWrapper({ children, isHome }: PropsWithChildren<ContentWrapperProps>) {
  return (
    <main className="flex flex-1 px-6 md:px-3 mt-[100px] md:mt-[104px] lg:mt-[52px] justify-center">
      <div className={classNames(
        "flex flex-col flex-1 justify-center md:max-w-[75%]",
        isHome ? "gap-2" : "mt-8 lg:mt-0 items-center md:items-start"
      )}>
        {children}
      </div>
    </main>
  );
}
