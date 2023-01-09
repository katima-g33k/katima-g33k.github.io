export type Locale = "en" | "fr";

export type Path = "about" | "contact" | "experience";

export type RouteObject = Record<Locale, Record<Path, string>>;
