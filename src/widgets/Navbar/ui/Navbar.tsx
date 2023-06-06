import { LangSwitcher } from "@/features/LangSwitcher";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div>navlinks</div>
      <div>
        <LangSwitcher  />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
