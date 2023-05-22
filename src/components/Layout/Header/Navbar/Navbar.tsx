import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.scss';
import AppUrls from '../../../../constants/app-urls';

const Navbar: FC = () => {
  const navLinkClassName = ({ isActive }: { isActive: boolean }) => isActive ? classes.navbar__link_active : '';

  return (
    <nav className={classes.navbar}>
      <ul className={classes.navbar__list}>
        <li>
          <NavLink
            to={AppUrls.VACANCIES}
            className={navLinkClassName}
          >
            Поиск Вакансий
          </NavLink>
        </li>
        <li>
          <NavLink
            to={AppUrls.FAVOURITE_VACANCIES}
            className={navLinkClassName}
          >
            Избранное
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;