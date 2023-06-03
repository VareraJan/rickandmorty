import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "../shared/lib/hooks/useTheme/useTheme";
import { AppRouter } from "./Providers/router";
import "./styles/index.scss";

const Component = () => {
  const { t, i18n } = useTranslation();

  return <h1>{t("Привет")}</h1>;
};

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <h2>APP 1</h2>
        <Component />
        <AppRouter />
      </Suspense>
    </div>
  );
};
