import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const CharactersDetailsPage = () => {
  const { id } = useParams();
  const { t } = useTranslation('characters');
  return (
    <div>
      <h1>{`${t("Страница персонажа")} ${id}`}</h1>
    </div>
  );
};

export default CharactersDetailsPage;
