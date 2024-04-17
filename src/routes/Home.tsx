import React from "react";
import { useTranslation } from "react-i18next";

import { H1, H2 } from "../components/Typography";
import Layout from "../components/Layout";

export default function Home() {
  const { i18n } = useTranslation();

  return (
    <Layout backgroundClass="before:bg-viewpoint" isHome>
      <H1 className="!mb-0">{i18n.t("home.title")}</H1>
      <H2>{i18n.t("home.subtitle")}</H2>
    </Layout>
  );
}
