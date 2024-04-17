import React from "react";
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import { useLocaleSwitcher } from "./useLocaleSwitcher";

interface LocaleSwitcherProps {
  className?: string;
}

const LocaleSwitcher = ({ className }: LocaleSwitcherProps) => {
  const { i18n } = useTranslation();
  const { toggleLocale } = useLocaleSwitcher();

  return (
    <button
      className={classnames("bg-none border-none cursor-pointer font-semibold text-lg", className)}
      onClick={toggleLocale}
    >
      {i18n.t("globals.changeLocale")}
    </button>
  );
};

export default LocaleSwitcher;
