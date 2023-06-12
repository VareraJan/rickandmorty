import { Pagination } from "@/features/Pagination";
import {
  getCharactersPageData,
  getCharactersPageError,
  getCharactersPageIsLoading,
} from "@/pages/CharactersPage/model/selectors/charactersPageSelectors";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import { Loader } from "@/shared/ui/Loader";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import cls from "./CharactersList.module.scss";

interface CharactersListProps {
  className?: string;
}

export const CharactersList = memo((props: CharactersListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const isLoading = useSelector(getCharactersPageIsLoading);
  const error = useSelector(getCharactersPageError);
  const allCharacters = useSelector(getCharactersPageData);

  if (isLoading) {
    //  TODO заменить на скелетоны
    return <Loader />;
  }

  if (error) {
    return <h1>{t("Ошибка при загрузке")}</h1>;
  }

  return (
    <div className={classNames(cls.charactersList, {}, [className])}>
      {/* TODO промапаться по данным и вывести карточки персонажей(создать их предварительно) */}
      <h1>CharactersList</h1>
      {/* <Pagination /> */}
    </div>
  );
});
