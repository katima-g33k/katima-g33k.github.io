import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getPath } from "./utils";
import { LOCALE, LOCALE_REGEX } from "../../constants";

export const useLocaleSwitcher = () => {
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

  return { toggleLocale };
};