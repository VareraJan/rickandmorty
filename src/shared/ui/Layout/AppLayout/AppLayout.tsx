import { type ReactNode } from 'react';

import cls from './AppLayout.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLayoutProps {
    children: ReactNode;
    className?: string;
}

export const AppLayout = (props: AppLayoutProps) => {
    const { children, className } = props;
    return (
        <main className={classNames(cls.appLayout, {}, [className])}>
            {children}
        </main>
    );
};
