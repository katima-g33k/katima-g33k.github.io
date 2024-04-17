import type { Locale } from "../types";

export const LOCALE: Record<string, Locale> = {
  EN: "en",
  FR: "fr",
};

export const DEFAULT_LOCALE: Locale = LOCALE.EN;

export const LOCALE_REGEX = /^\/(en|fr)/;
