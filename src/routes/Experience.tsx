import React from "react";
import { useTranslation } from "react-i18next";

import H1 from "../components/H1";
import Layout from "../components/Layout";
import List from "../components/List";

export default function Experience() {
  const { i18n }  = useTranslation();
  const volunteerList = i18n.t("experience.volunteer.list", { returnObjects: true }) as string[];
  const workList = i18n.t("experience.work.list", { returnObjects: true }) as string[];

  return (
    <Layout backgroundClass="before:bg-sunset">
      <H1>{i18n.t("experience.title")}</H1>
      <p>{i18n.t("experience.description")}</p>

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <List
          className="flex-1"
          items={workList}
          title={i18n.t("experience.work.title")}
        />

        <List
          className="flex-1"
          items={volunteerList}
          title={i18n.t("experience.volunteer.title")}
        />
      </div>
    </Layout>
  );
}
