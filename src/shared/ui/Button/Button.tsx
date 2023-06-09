import { type ButtonHTMLAttributes, memo, type ReactNode } from 'react';

import cls from './Button.module.scss';

import { classNames, type Mods } from '@/shared/lib/classNames/classNames';

export enum ButtonTheme {
    CLEAR = 'clear',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    disabled?: boolean;
    theme?: ButtonTheme;
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        className,
        disabled,
        theme = ButtonTheme.BACKGROUND,
        ...otherProps
    } = props;

    const mod: Mods = {
        [cls.disabled]: disabled,
        [cls[theme]]: true,
    };

    return (
        <button
            type="button"
            className={classNames(cls.button, mod, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
