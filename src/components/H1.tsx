import React from "react";
import { classNames } from "../lib/classNames";

interface H1Props {
  children: string;
  className?: string;
}

export default function H1({ children, className = "" }: H1Props) {
  return (
    <h1 className={classNames("text-6xl font-bold", className)}>{children}</h1>
  );
}
