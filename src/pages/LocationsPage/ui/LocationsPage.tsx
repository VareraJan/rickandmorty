import { useTranslation } from "react-i18next";

const LocationsPage = () => {
  const {t} = useTranslation('locations')
  return (
    <div>
      <h1>{t('Все локации')}</h1>
    </div>
  );
};

export default LocationsPage;