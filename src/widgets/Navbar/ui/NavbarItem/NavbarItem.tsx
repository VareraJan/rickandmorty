import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { NavbarItemType } from "../../model/types/navbar";
import cls from "./NavbarItem.module.scss";

interface NavbarItemProps {
  className?: string;
  item: NavbarItemType;
}

export const NavbarItem = (props: NavbarItemProps) => {
  const { className, item } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.navbarItem, {}, [className])}>
      <Link className={cls.appLink} to={item.path}>
        {t(`link.${[item.text]}`)}
      </Link>
    </div>
  );
};
