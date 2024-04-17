import React from "react";
import classnames from "classnames";

import type { TypographyProps } from "./types";

const H2 = ({ children, className }: TypographyProps) => (
  <h2 className={classnames("font-semibold text-xl mb-2", className)}>{children}</h2>
);

export default H2;
