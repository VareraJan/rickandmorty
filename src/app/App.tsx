import { LangSwitcher } from "@/features/LangSwitcher";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { Header } from "@/shared/ui/Header";
import { Suspense } from "react";
import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "../shared/lib/hooks/useTheme/useTheme";
import { AppRouter } from "./Providers/router";
import "./styles/index.scss";

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Header />
        <LangSwitcher />
        <ThemeSwitcher />
        <h2>APP 1</h2>
        <AppRouter />
      </Suspense>
    </div>
  );
};
