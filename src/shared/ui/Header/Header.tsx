import { useTranslation } from 'react-i18next';

import cls from './Header.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface HeaderProps {
    className?: string;
}

export const Header = (props: HeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.header, {}, [className])}>
            {t('The Rick and Morty')}
        </div>
    );
};
