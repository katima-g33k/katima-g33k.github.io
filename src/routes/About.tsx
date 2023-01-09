import React from "react";
import { useTranslation } from "react-i18next";

import H1 from "../components/H1";
import Layout from "../components/Layout";

export default function About() {
  const { i18n } = useTranslation();

  return (
    <Layout backgroundClass="before:bg-viewpoint">
      <div className="flex flex-col flex-1 justify-center items-center">
        <H1>{i18n.t("about.title")}</H1>
      </div>
    </Layout>
  );
}
