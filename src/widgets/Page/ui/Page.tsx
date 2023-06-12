import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, ReactNode } from "react";
import cls from "./Page.module.scss";

interface PageProps {
  className?: string;
  children: ReactNode;
}

export const Page = memo((props: PageProps) => {
  const { children, className } = props;
  return (
    <main className={classNames(cls.page, {}, [className])}>{children}</main>
  );
});
