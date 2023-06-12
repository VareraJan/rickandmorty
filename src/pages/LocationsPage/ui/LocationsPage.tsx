import { Page } from "@/widgets/Page";
import { useTranslation } from "react-i18next";

const LocationsPage = () => {
  const { t } = useTranslation("locations");
  return (
    <Page>
      <h1>{t("Все локации")}</h1>
    </Page>
  );
};

export default LocationsPage;
