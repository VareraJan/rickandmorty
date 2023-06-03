import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const EpisodesDetailsPage = () => {
  const { id } = useParams();
  const {t} = useTranslation('episodes')
  return (
    <div>
      <h1>{t('Страница эпизода') + ` ${id}`}</h1>
    </div>
  );
};

export default EpisodesDetailsPage;