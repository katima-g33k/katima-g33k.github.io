import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { classNames } from "../lib/classNames";

interface LocaleSwitcherProps {
  className?: string;
}

function getPath(pathname: string, locale: string, search?: string) {
  switch (pathname) {
    case "/":
    case "/en":
      return "/fr";
    case "/fr":
      return "/en";
    default:
      return pathname !== "/" ? `${pathname.replace(/\/[a-z]{2}\//, `/${locale}/`)}${search}` : "";
  }
}

export default function LocaleSwitcher({ className = "" }: LocaleSwitcherProps) {
  const { i18n } = useTranslation();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const toggleLocale = () => {
    const locale = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(locale).then(() => navigate(getPath(pathname, locale, search)));
  };

  return (
    <button
      className={classNames("bg-none border-none cursor-pointer font-semibold text-lg", className)}
      onClick={toggleLocale}
    >
      {i18n.t("globals.changeLocale")}
    </button>
  );
}
