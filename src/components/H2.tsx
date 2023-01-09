import React from "react";
import { classNames } from "../lib/classNames";

interface H2Props {
  children: string;
  className?: string;
}

export default function H2({ children, className = "" }: H2Props) {
  return (
    <h2 className={classNames("font-semibold text-xl", className)}>{children}</h2>
  );
}
