import { FC } from 'react';

import IVacancies from '../../../models/vacancies';
import VacancyCard from '../../Shared/VacancyCard/VacancyCard';

interface VacancyMainInfo {
  vacancy: IVacancies[0];
}

const VacancyMainInfo: FC<VacancyMainInfo> = ({ vacancy }) => {
  return (
    <section data-elem={`vacancy-${vacancy.id}`}>
      <VacancyCard isInList={false} {...vacancy}/>
    </section>
  );
};

export default VacancyMainInfo;