import { CharactersList } from "@/entities/Character";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Page } from "@/widgets/Page";
import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  getCharactersPageData,
  getCharactersPageIsLoading,
} from "../model/selectors/charactersPageSelectors";
import { fetchCharactersList } from "../model/services/fetchCharactersList";
import cls from "./CharactersPage.module.scss";

interface CharactersPageProps {
  className?: string;
}

const CharactersPage = memo((props: CharactersPageProps) => {
  const { className } = props;
  const { t } = useTranslation("characters");
  const dispatch = useAppDispatch();
  

  useEffect(() => {
    dispatch(fetchCharactersList(null));
  }, [dispatch]);

  return (
    <Page className={classNames(cls.charactersPage, {}, [className])}>
      <h1>{t("Персонажи")}</h1>
      <CharactersList />
    </Page>
  );
});

export default CharactersPage;
