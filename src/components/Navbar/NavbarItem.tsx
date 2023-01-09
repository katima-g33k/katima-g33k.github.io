import React from "react";
import { NavLink } from "react-router-dom";

import { classNames } from "../../lib/classNames";
import Icon, { IconNameList } from "../Icon";

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
        className={classNames("flex gap-1 text-lg underline-offset-4 hover:underline", isActive ? "font-semibold underline" : "")}
        to={href}
      >
        <Icon aria-label={label} className="md:hidden" name={icon} />
        <span className="hidden md:inline">
          {label}
        </span>
      </NavLink>
    </li>
  );
}
