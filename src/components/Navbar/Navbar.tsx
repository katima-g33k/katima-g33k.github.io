import React from "react";
import classnames from "classnames";

import NavBarItem, { NavBarItemProps } from "./NavbarItem";
import { useNabBar } from "./useNavBar";

interface NavbarProps {
  className?: string;
  itemProps?: Omit<NavBarItemProps, "href" | "isActive" | "label">;
  listClassName?: string;
  tag?: keyof JSX.IntrinsicElements
}

const Navbar = ({ className , itemProps, listClassName, tag = "nav" }: NavbarProps) => {
  const { locale, navItems, pathname } = useNabBar();
  const Tag = tag;

  return (
    <Tag className={classnames("flex-1", className)}>
      <ul className={listClassName}>
        {navItems.map(item =>
          <NavBarItem
            {...item}
            {...itemProps}
            key={item.href}
            isActive={item.href === pathname || (pathname === "/" && item.href === `/${locale}`)}
          />
        )}
      </ul>
    </Tag>
  );
};

export default Navbar;
