import { useMemo } from 'react';

import { getNavbarItems } from '../model/services/getNavbarItems';

import cls from './Navbar.module.scss';
import { NavbarItem } from './NavbarItem/NavbarItem';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;

    const navbarItems = getNavbarItems();

    const itemsList = useMemo(
        () =>
            navbarItems.map((item) => (
                <NavbarItem className={cls.link} key={item.text} item={item} />
            )),
        [navbarItems],
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
