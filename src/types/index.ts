import * as FeatherIcons from "react-feather";

export type IconNameList = keyof typeof FeatherIcons;

export type Locale = "en" | "fr";

export type Path = "about" | "contact" | "destinations" | "experience";

export type RouteObject = Record<Locale, Record<Path, string>>;

export interface SocialMediaLink {
  href: string;
  icon: IconNameList;
}
