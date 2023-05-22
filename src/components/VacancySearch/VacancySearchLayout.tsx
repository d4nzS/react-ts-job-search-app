import { FC, ReactNode } from 'react';

import classes from './VacancySearchLayout.module.scss';

interface VacancySearchLayoutProps {
  children: ReactNode;
}

const VacancySearchLayout: FC<VacancySearchLayoutProps> = ({ children }) => {
  return <main className={classes.main}>{children}</main>;
};

export default VacancySearchLayout;