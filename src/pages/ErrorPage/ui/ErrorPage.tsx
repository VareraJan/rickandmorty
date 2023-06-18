import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import { ButtonTheme } from "@/shared/ui/Button/Button";
import { Page } from "@/widgets/Page";
import { useTranslation } from "react-i18next";
import cls from "./ErrorPage.module.scss";

interface ErrorPageProps {
  className?: string;
}

const ErrorPage = (props: ErrorPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <Page className={classNames(cls.errorPage, {}, [className])}>
      <p>{t("Произошла непредвиденная ошибка")}</p>
      <Button theme={ButtonTheme.BACKGROUND_INVERTED} onClick={reloadPage}>
        {t("Обновить страницу")}
      </Button>
    </Page>
  );
};

export default ErrorPage;
