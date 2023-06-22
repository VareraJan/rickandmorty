import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { type NavbarItemType } from '../../model/types/navbar';

import cls from './NavbarItem.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

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
