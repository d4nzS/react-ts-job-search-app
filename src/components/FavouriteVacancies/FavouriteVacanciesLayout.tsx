import { FC, ReactNode } from 'react';

import classes from './FavouriteVacanciesLayout.module.scss';

interface FavouriteVacanciesLayoutProps {
  children: ReactNode;
}

const FavouriteVacanciesLayout: FC<FavouriteVacanciesLayoutProps> = ({ children }) => {
  return <main className={classes.main}>{children}</main>;
};

export default FavouriteVacanciesLayout;