import { useTranslation } from "react-i18next";

const EpisodesPage = () => {
  const {t} = useTranslation('episodes')
  return (
    <div>
      <h1>{t('Эпизоды')}</h1>
    </div>
  );
};

export default EpisodesPage;