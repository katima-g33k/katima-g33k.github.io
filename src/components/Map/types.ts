import { COUNTRIES } from "./constants";

export type CountryCode = keyof typeof COUNTRIES;

export type CountryName = typeof COUNTRIES[CountryCode];
