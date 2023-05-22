import { FC } from 'react';
import { useParams } from 'react-router-dom';

import useLoading from '../hooks/use-loading';
import { useGetVacancyByIdQuery } from '../store/vacancy/vacancy-api';
import VacancyLayout from '../components/Vacancy/VacancyLayout';
import VacancyMainInfo from '../components/Vacancy/VacancyMainInfo/VacancyMainInfo';
import VacancyDetailedInfo from '../components/Vacancy/VacancyDetailedInfo/VacancyDetailedInfo';

const VacancyPage: FC = () => {
  const { vacancyId } = useParams();
  const { data: vacancy, isLoading: isVacancyLoading } = useGetVacancyByIdQuery(vacancyId!);

  useLoading(isVacancyLoading);

  return (
    <VacancyLayout>
      {vacancy && (
        <>
          <VacancyMainInfo vacancy={vacancy}/>
          <VacancyDetailedInfo vacancyHtmlInfo={vacancy.vacancyRichText}/>
        </>
      )}
    </VacancyLayout>
  );
};

export default VacancyPage;