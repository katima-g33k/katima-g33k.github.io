import React from "react";
import { NavLink } from "react-router-dom";

import { classNames } from "../../lib/classNames";
import Icon from "../Icon";
import type { IconNameList } from "../../types";

interface NavBarItemProps {
  href: string;
  icon: IconNameList;
  isActive?: boolean;
  label: string;
}

export default function NavBarItem({ href, icon, isActive, label }: NavBarItemProps) {
  return (
    <li>
      <NavLink
        className={classNames(
          "flex gap-1 text-lg border-b border-b-solid hover:border-b-white",
          isActive ? "font-semibold border-b-white" : "border-b-transparent"
        )}
        to={href}
      >
        <Icon aria-label={label} className="mb-2 md:hidden" name={icon} />
        <span className="hidden md:inline">
          {label}
        </span>
      </NavLink>
    </li>
  );
}
