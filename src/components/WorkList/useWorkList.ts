import { useTranslation } from "react-i18next";

import type { Work } from "./types";

export const useWorkList = () => {
  const { i18n } = useTranslation();
  const workList = i18n.t("experience.work.list", { returnObjects: true }) as Work[];
  const index = Math.round(workList.length / 2);
  const worklists = [workList.slice(0, index), workList.slice(index)];

  return { worklists };
};
