import { Theme } from "@/shared/const/theme";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Button } from "@/shared/ui/Button";
import { ButtonTheme } from "@/shared/ui/Button/Button";
import cls from "./ThemeSwitcher.module.scss";

// @ts-ignore
import { ReactComponent as Logo } from "./logo.svg";
// @ts-ignore
import { ReactComponent as ThemeIcon } from "@/shared/icons/dark_theme.svg";
import { useTranslation } from "react-i18next";

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
      className={classNames(cls.themeSwitcher, {}, [className])}
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
