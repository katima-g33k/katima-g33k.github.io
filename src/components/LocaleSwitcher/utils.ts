import { LOCALE, LOCALE_REGEX } from "../../constants";

export const getPath = (pathname: string, locale: string, search?: string) => {
  switch (pathname) {
    case "/":
    case `/${LOCALE.EN}`:
      return `/${LOCALE.FR}`;
    case `/${LOCALE.FR}`:
      return `/${LOCALE.EN}`;
    default:
      return pathname !== "/" ? `${pathname.replace(LOCALE_REGEX, `/${locale}`)}${search}` : "";
  }
};
