import { Page } from "@/widgets/Page";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const LocationsDetailsPage = () => {
  const { id } = useParams();
  const { t } = useTranslation("locations");
  return (
    <Page>
      <h1>{t("Локация") + ` ${id}`}</h1>
    </Page>
  );
};

export default LocationsDetailsPage;
