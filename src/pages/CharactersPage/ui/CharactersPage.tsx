import { useTranslation } from 'react-i18next';

const CharactersPage = () => {
    const { t } = useTranslation('characters');
    return (
        <div>
            <h1>{t('Персонажи')}</h1>
        </div>
    );
};

export default CharactersPage;
