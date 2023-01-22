import React from "react";
import { useTranslation } from "react-i18next";

import H1 from "../components/H1";
import Layout from "../components/Layout";

export default function About() {
  const { i18n } = useTranslation();
  const description = i18n.t("about.description", { returnObjects: true }) as string[];

  return (
    <Layout backgroundClass="before:bg-train">
      <H1>{i18n.t("about.title")}</H1>

      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <img className="rounded-full h-52 w-52 md:h-64 md:w-64" src="/jessy.jpg" alt={i18n.t("about.imageAlt") as string} />

        <div className="flex flex-col gap-4">
          {description.map((text, index) => <p key={index}>{text}</p>)}
        </div>
      </div>
    </Layout>
  );
}
