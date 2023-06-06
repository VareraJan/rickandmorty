import { Header } from "@/shared/ui/Header";
import { AppLayout } from "@/shared/ui/Layout";
import { Navbar } from "@/widgets/Navbar";
import { Suspense } from "react";
import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "../shared/lib/hooks/useTheme/useTheme";
import { AppRouter } from "./Providers/router";
import "./styles/index.scss";

export const App = () => {
  const { theme } = useTheme();
  return (
    <AppLayout>
      <div className={classNames("app", {}, [theme])}>
        <Suspense fallback="">
          <Header />
          <Navbar />

          <h2>APP 1</h2>
          <AppRouter />
        </Suspense>
      </div>
    </AppLayout>
  );
};
