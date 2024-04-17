import React from "react";
import classnames from "classnames";

import NavBarItem from "./NavbarItem";
import { useNabBar } from "./useNavBar";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { locale, navItems, pathname } = useNabBar();

  return (
    <nav className={classnames("flex-1", className)}>
      <ul className="flex gap-5 items-center justify-around md:justify-start">
        {navItems.map(item =>
          <NavBarItem
            {...item}
            key={item.href}
            isActive={item.href === pathname || (pathname === "/" && item.href === `/${locale}`)}
          />
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
