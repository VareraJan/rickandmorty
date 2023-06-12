import { Page } from "@/widgets/Page";
import { useTranslation } from "react-i18next";

const EpisodesPage = () => {
  const {t} = useTranslation('episodes')
  return (
    <Page>
      <h1>{t('Эпизоды')}</h1>
    </Page>
  );
};

export default EpisodesPage;