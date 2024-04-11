import React from "react";
import { useTranslation } from "react-i18next";

import H2 from "../H2";
import WorkListColumn from "./WorkListColumn";
import { useWorkList } from "./useWorkList";

const WorkList = () => {
  const { i18n } = useTranslation();
  const { worklists } = useWorkList();

  return (
    <div>
      <H2>{i18n.t("experience.work.title")}</H2>
      <div className="w-full flex-wrap gap-4 grid md:grid-cols-2 ">
        {worklists.map((workList, index) => <WorkListColumn key={index} workList={workList} />)}
      </div>
    </div>
  );
};

export default WorkList;
