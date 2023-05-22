import { FC } from 'react';

import { favouritesSelector } from '../store/vacancy/vacancy-selectors';
import useAppSelector from '../hooks/use-app-selector';
import FavouriteVacanciesLayout from '../components/FavouriteVacancies/FavouriteVacanciesLayout';
import VacancyList from '../components/Shared/VacancyList/VacancyList';
import NoFavouriteVacanciesFound from '../components/FavouriteVacancies/NoFavouriteVacanciesFound/NoFavouriteVacanciesFound';

const FavouriteVacanciesPage: FC = () => {
  const favouriteVacancies = useAppSelector(favouritesSelector);

  return (
    <FavouriteVacanciesLayout>
      {favouriteVacancies.length
        ? <VacancyList vacancies={favouriteVacancies}/>
        : <NoFavouriteVacanciesFound/>}
    </FavouriteVacanciesLayout>
  );
};

export default FavouriteVacanciesPage;