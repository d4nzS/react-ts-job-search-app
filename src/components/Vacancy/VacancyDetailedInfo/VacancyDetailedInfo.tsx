import { FC } from 'react';
import parse from 'html-react-parser';

import classes from './VacancyDetailedInfo.module.scss';
import ContentWrapper from '../../UI/ContentWrapper/ContentWrapper';

interface VacancyDetailedInfoProps {
  vacancyHtmlInfo: string;
}

const VacancyDetailedInfo: FC<VacancyDetailedInfoProps> = ({ vacancyHtmlInfo }) => {
  return (
    <section className={classes['detailed-info']}>
      <ContentWrapper className={classes['detailed-info__wrapper']}>
        {parse(vacancyHtmlInfo)}
      </ContentWrapper>
    </section>
  );
};

export default VacancyDetailedInfo;