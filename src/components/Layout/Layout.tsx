import { FC, ReactNode } from 'react';

import Header from './Header/Header';

import classes from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header/>
      <div className={classes['layout-container']}>
        {children}
      </div>
    </>
  );
};

export default Layout;