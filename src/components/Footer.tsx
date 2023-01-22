import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { i18n } = useTranslation();
  const year = (new Date()).getFullYear();
  const text = i18n.t("globals.footer.copyright", { returnObjects: true, year }) as string[];

  return (
    <footer className="mt-10 p-3 flex flex-col md:flex-row items-center md:justify-end">
      {text.map((str, index) => (
        <span key={index}>{str}&nbsp;</span>
      ))}
    </footer>
  );
}
