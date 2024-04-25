import React from "react";
import { useTranslation } from "react-i18next";

import { H1 } from "../components/Typography";
import TechStack from "../components/TechStack";
import WorkList from "../components/WorkList";

export default function Experience() {
  const { i18n } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <H1>{i18n.t("experience.title")}</H1>
        <p>{i18n.t("experience.description")}</p>
      </div>
      <TechStack />
      <WorkList />
    </div>   
  );
}
