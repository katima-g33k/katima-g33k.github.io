import React from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

interface NavBarItemProps {
  activeClassName?: string;
  className?: string;
  href: string;
  isActive?: boolean;
  label: string;
}

export default function NavBarItem({ activeClassName = "", className, href, isActive, label }: NavBarItemProps) {
  return (
    <li>
      <NavLink
        className={classnames(className, { [activeClassName]: isActive } )}
        to={href}
      >
        <span>
          {label}
        </span>
      </NavLink>
    </li>
  );
}
