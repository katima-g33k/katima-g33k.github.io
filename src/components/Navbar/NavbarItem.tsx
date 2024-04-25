import React from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

export interface NavBarItemProps {
  activeClassName?: string;
  className?: string;
  href: string;
  isActive?: boolean;
  label: string;
  onClick?: () => void;
}

export default function NavBarItem({ activeClassName = "", className, href, isActive, label, onClick }: NavBarItemProps) {
  return (
    <li>
      <NavLink
        className={classnames(className, { [activeClassName]: isActive } )}
        onClick={onClick}
        to={href}
      >
        <span>
          {label}
        </span>
      </NavLink>
    </li>
  );
}
