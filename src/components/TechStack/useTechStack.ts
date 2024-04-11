import { useTranslation } from "react-i18next";

export const useTechStack = () => {
  const { i18n } = useTranslation();
  const stackList = i18n.t("experience.stack.list", { returnObjects: true }) as string[];

  return { stackList };
};
