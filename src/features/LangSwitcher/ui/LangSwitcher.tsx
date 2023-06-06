import React from "react";

import cls from "./LangSwitcher.module.scss";

import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button";
import { ButtonTheme } from "@/shared/ui/Button/Button";

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
    <Button
      theme={ButtonTheme.BACKGROUND_INVERTED}
      className={classNames(cls.langSwitcher, {}, [className])}
      onClick={toggle}
    >
      {t("Язык")}
    </Button>
  );
};
