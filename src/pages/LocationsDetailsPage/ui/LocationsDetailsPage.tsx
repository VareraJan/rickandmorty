import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const LocationsDetailsPage = () => {
  const { id } = useParams();
  const { t } = useTranslation('locations');
  return (
    <div>
      <h1>{t("Локация") + ` ${id}`}</h1>
    </div>
  );
};

export default LocationsDetailsPage;
