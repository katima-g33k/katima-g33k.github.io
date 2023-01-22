import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { classNames } from "../lib/classNames";
import { LOCALE, LOCALE_REGEX } from "../constants";

interface LocaleSwitcherProps {
  className?: string;
}

function getPath(pathname: string, locale: string, search?: string) {
  switch (pathname) {
    case "/":
    case `/${LOCALE.EN}`:
      return `/${LOCALE.FR}`;
    case `/${LOCALE.FR}`:
      return `/${LOCALE.EN}`;
    default:
      return pathname !== "/" ? `${pathname.replace(LOCALE_REGEX, `/${locale}`)}${search}` : "";
  }
}

export default function LocaleSwitcher({ className = "" }: LocaleSwitcherProps) {
  const { i18n } = useTranslation();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const regExpExecArray = LOCALE_REGEX.exec(pathname);
    const locale = regExpExecArray && regExpExecArray[1] ? regExpExecArray[1] : LOCALE.EN;

    i18n.changeLanguage(locale).catch();
  }, [pathname]);

  const toggleLocale = () => {
    navigate(getPath(pathname, i18n.language === LOCALE.EN ? LOCALE.FR : LOCALE.EN, search));
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
