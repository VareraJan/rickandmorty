import { LangSwitcher } from "@/features/LangSwitcher";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useMemo } from "react";
import { getNavbarItems } from "../model/services/getNavbarItems";
import cls from "./Navbar.module.scss";
import { NavbarItem } from "./NavbarItem/NavbarItem";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  const navbarItems = getNavbarItems();
  console.log("navbarItems ", navbarItems);

  const itemsList = useMemo(
    () => navbarItems.map((item) => <NavbarItem key={item.text} item={item} />),
    [navbarItems]
  );

  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>{itemsList}</div>
      <div>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
