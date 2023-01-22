import React from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import NavBarItem from "./NavbarItem";
import { classNames } from "../../lib/classNames";
import type { IconNameList } from "../../types";

interface NavItem {
  href: string;
  icon: IconNameList;
  label: string;
}

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "" }: NavbarProps) {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const locale = i18n.language;
  const navItems = [
    { href: `/${locale}`, icon: "Home", label: i18n.t("globals.nav.home") },
    { href: `/${locale}/about`, icon: "User", label: i18n.t("globals.nav.about") },
    { href: `/${locale}/experience`, icon: "Code", label: i18n.t("globals.nav.experience") },
    { href: `/${locale}/contact`, icon: "MessageSquare", label: i18n.t("globals.nav.contact") },
  ] as NavItem[];

  return (
    <nav className={classNames("flex-1", className)}>
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
}
