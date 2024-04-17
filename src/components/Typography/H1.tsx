import React from "react";
import classnames from "classnames";

import type { TypographyProps } from "./types";

const H1 = ({ children, className }: TypographyProps) => (
  <h1 className={classnames("text-6xl font-bold mb-8", className)}>{children}</h1>
);

export default H1;
