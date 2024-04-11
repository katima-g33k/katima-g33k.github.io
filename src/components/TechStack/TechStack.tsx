import React from "react";
import { useTranslation } from "react-i18next";
import H2 from "../../components/H2";
import { useTechStack } from "./useTechStack";

const TechStack = () => {
  const { i18n } = useTranslation();
  const { stackList } = useTechStack();

  return (
    <div>
      <H2>{i18n.t("experience.stack.title")}</H2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {stackList.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
};

export default TechStack;
