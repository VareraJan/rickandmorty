import { classNames } from "@/shared/lib/classNames/classNames";
import { nextTick } from "process";
import { memo } from "react";
import cls from "./Pagination.module.scss";

interface PaginationProps {
  next: (() => void) | null;
  prev: (() => void) | null;
  className?: string;
}

export const Pagination = memo((props: PaginationProps) => {
  const { next, prev, className } = props;

  const nextPage = () => {
    if (next) {
      next();
    }
  };

  const prevPage = () => {
    if (prev) {
      prev();
    }
  };

  return (
    <div className={classNames(cls.pagination, {}, [className])}>
      <span onClick={nextPage}>NEXT</span>/<span onClick={prevPage}>PREV</span>
    </div>
  );
});
