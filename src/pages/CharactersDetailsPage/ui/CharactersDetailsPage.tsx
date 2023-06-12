import { Page } from "@/widgets/Page";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const CharactersDetailsPage = () => {
  const { id } = useParams();
  const { t } = useTranslation("characters");
  return (
    <Page>
      <h1>{`${t("Страница персонажа")} ${id}`}</h1>
    </Page>
  );
};

export default CharactersDetailsPage;
