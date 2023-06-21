import { useTranslation } from 'react-i18next';

import cls from './ThemeSwitcher.module.scss';

import { Theme } from '@/shared/const/theme';
// @ts-expect-error
import { ReactElement as ThemeIcon } from '@/shared/icons/dark_theme.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();

    return (
        <Button
            theme={ButtonTheme.BACKGROUND_INVERTED}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? (
                <ThemeIcon className={cls.iconLight} />
            ) : (
                <ThemeIcon className={cls.iconDark} />
            )}
        </Button>
    );
};
