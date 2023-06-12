import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widgets/Page";
import { useTranslation } from "react-i18next";
import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={classNames(cls.NotFoundPage, {}, [className])}>
      {t("Страница не найдена")}
    </Page>
  );
};

export default NotFoundPage;
