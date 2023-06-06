import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Header.module.scss";

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.header, {}, [className])}>
      The Rick and Morty
    </div>
  );
};
