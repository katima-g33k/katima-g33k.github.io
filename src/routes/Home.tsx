import React from "react";
import { useTranslation } from "react-i18next";

import { H1, H2 } from "../components/Typography";

export default function Home() {
  const { i18n } = useTranslation();

  return (
    <>
      <H1 className="!mb-0">{i18n.t("home.title")}</H1>
      <H2>{i18n.t("home.subtitle")}</H2>
    </>
  );
}
