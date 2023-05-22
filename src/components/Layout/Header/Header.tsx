import { FC } from 'react';

import classes from './Header.module.scss';
import { ReactComponent as LogoIcon } from '../../../assets/icons/logo-icon.svg'
import Navbar from './Navbar/Navbar';

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__wrapper}>
        <LogoIcon/>
        <h1 className={classes.header__title}>Jobored</h1>
        <Navbar/>
      </div>
    </header>
  );
};

export default Header;