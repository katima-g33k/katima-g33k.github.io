import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { NavItem } from "./types";

export const useNabBar = () => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const locale = i18n.language;
  const navItems: NavItem[] = [
    { href: `/${locale}`, icon: "Home", label: i18n.t("globals.nav.home") },
    { href: `/${locale}/about`, icon: "User", label: i18n.t("globals.nav.about") },
    { href: `/${locale}/experience`, icon: "Code", label: i18n.t("globals.nav.experience") },
    { href: `/${locale}/contact`, icon: "MessageSquare", label: i18n.t("globals.nav.contact") },
  ];

  return {
    locale,
    navItems,
    pathname,
  };
};