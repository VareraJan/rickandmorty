import { Page } from "@/widgets/Page";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const EpisodesDetailsPage = () => {
  const { id } = useParams();
  const {t} = useTranslation('episodes')
  return (
    <Page>
      <h1>{t('Страница эпизода') + ` ${id}`}</h1>
    </Page>
  );
};

export default EpisodesDetailsPage;