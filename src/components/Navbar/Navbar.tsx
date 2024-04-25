import React from "react";
import classnames from "classnames";

import NavBarItem from "./NavbarItem";
import { useNabBar } from "./useNavBar";

interface NavbarProps {
  activeItemClassName?: string;
  className?: string;
  itemClassName?: string;
  listClassName?: string;
  tag?: keyof JSX.IntrinsicElements
}

const Navbar = ({ activeItemClassName, className, itemClassName, listClassName, tag = "nav" }: NavbarProps) => {
  const { locale, navItems, pathname } = useNabBar();
  const Tag = tag;

  return (
    <Tag className={classnames("flex-1", className)}>
      <ul className={listClassName}>
        {navItems.map(item =>
          <NavBarItem
            {...item}
            key={item.href}
            activeClassName={activeItemClassName}
            className={itemClassName}
            isActive={item.href === pathname || (pathname === "/" && item.href === `/${locale}`)}
          />
        )}
      </ul>
    </Tag>
  );
};

export default Navbar;
