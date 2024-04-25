import React from "react";
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import { useLocaleSwitcher } from "./useLocaleSwitcher";

interface LocaleSwitcherProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const LocaleSwitcher = ({ className, onClick }: LocaleSwitcherProps) => {
  const { i18n } = useTranslation();
  const { toggleLocale } = useLocaleSwitcher();
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    toggleLocale();
    onClick?.(event);
  };

  return (
    <button
      className={classnames("bg-none border-none cursor-pointer font-semibold text-lg", className)}
      onClick={handleOnClick}
    >
      {i18n.t("globals.changeLocale")}
    </button>
  );
};

export default LocaleSwitcher;
