import { useTranslation } from "react-i18next";

import type { Work } from "./types";

export const useWorkList = () => {
  const { i18n } = useTranslation();
  const workList = i18n.t("experience.work.list", { returnObjects: true }) as Work[];
  const worklists = workList.reduce((acc, curr, index) => {
    acc[index % 2].push(curr);
    return acc;
  }, [[], []] as Work[][]);

  return { worklists };
};
