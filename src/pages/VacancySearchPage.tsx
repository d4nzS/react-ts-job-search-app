import { FC } from 'react';

import useAppSelector from '../hooks/use-app-selector';
import { getVacanciesParamsSelector } from '../store/vacancy/vacancy-selectors';
import { useGetCataloguesQuery, useGetVacanciesQuery } from '../store/vacancy/vacancy-api';
import useLoading from '../hooks/use-loading';
import VacancySearchLayout from '../components/VacancySearch/VacancySearchLayout';
import Filters from '../components/VacancySearch/Filters/Filters';
import SearchBar from '../components/VacancySearch/SearchBar/SearchBar';
import VacancyList from '../components/Shared/VacancyList/VacancyList';
import NoVacanciesFound from '../components/VacancySearch/NoVacanciesFound/NoVacanciesFound';

const VacancySearchPage: FC = () => {
  const getVacanciesParams = useAppSelector(getVacanciesParamsSelector);
  const { data: vacancies, isFetching: isVacanciesLoading } = useGetVacanciesQuery(getVacanciesParams);
  const { data: catalogues, isLoading: isCataloguesLoading } = useGetCataloguesQuery();

  useLoading(isVacanciesLoading || isCataloguesLoading);

  const hasVacancies = vacancies && !!vacancies.length;
  const noVacanciesFound = vacancies && !vacancies.length;

  return (
    <VacancySearchLayout>
      {catalogues && <Filters vacancyCatalogues={catalogues}/>}
      <SearchBar/>
      {hasVacancies && <VacancyList
        vacancies={vacancies}
        paginationHorizontalOffsetCSS="11.8125rem"
      />}
      {noVacanciesFound && <NoVacanciesFound/>}
    </VacancySearchLayout>
  );
};

export default VacancySearchPage;