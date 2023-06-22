import { type ReactNode, useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '../../../../shared/const/localstorage';
import { Theme } from '../../../../shared/const/theme';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const { children, initialTheme } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme);
    document.body.className = theme;

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
