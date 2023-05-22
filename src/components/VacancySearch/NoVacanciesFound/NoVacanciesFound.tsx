import { FC } from 'react';

import classes from './NoVacanciesFound.module.scss';

const NoVacanciesFound: FC = () => {
  return (
    <section className={classes['no-vacancy-found']}>
      <h2 className={classes['no-vacancy-found__title']}>
        К сожалению по Вашему запросу ничего не найдено...
      </h2>
    </section>
  );
};

export default NoVacanciesFound;