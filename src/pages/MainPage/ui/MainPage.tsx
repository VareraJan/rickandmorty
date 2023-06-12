import { Page } from "@/widgets/Page";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <h1>{t("Главная")}</h1>
    </Page>
  );
};

export default MainPage;
