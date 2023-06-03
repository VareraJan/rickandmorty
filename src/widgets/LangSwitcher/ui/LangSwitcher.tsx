import React from "react";

import cls from "./LangSwitcher.module.scss";

import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { className } = props;
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "eng" : "ru");
  };

  return (
    <button
      className={classNames(cls.langSwitcher, {}, [className])}
      onClick={toggle}
    >
      {t("Язык")}
    </button>
  );
};
