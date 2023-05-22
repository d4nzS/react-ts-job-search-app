import { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './NoFavouriteVacanciesFound.module.scss';
import { ReactComponent as NotificationIcon } from '../../../assets/icons/notification-icon.svg';
import AppUrls from '../../../constants/app-urls';

const NoFavouriteVacanciesFound: FC = () => {
  return (
    <section className={classes.notification}>
      <NotificationIcon/>
      <h2 className={classes.notification__title}>Упс, здесь еще ничего нет!</h2>
      <Link to={AppUrls.VACANCIES} className={classes.notification__link}>
        Поиск вакансий
      </Link>
    </section>
  );
};

export default NoFavouriteVacanciesFound;