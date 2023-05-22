import { FC, ReactNode } from 'react';

import classes from './VacancyLayout.module.scss';

interface VacancyLayoutProps {
  children: ReactNode;
}

const VacancyLayout: FC<VacancyLayoutProps> = ({ children }) => {
  return <main className={classes.main}>{children}</main>;
};

export default VacancyLayout;