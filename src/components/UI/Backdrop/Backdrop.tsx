import { FC, ReactNode, useEffect } from 'react';

import classes from './Backdrop.module.scss';

interface BackdropProps {
  children: ReactNode;
}

const Backdrop: FC<BackdropProps> = ({ children }) => {
  useEffect(() => {
    document.body.classList.add('without-scroll');

    return () => document.body.classList.remove('without-scroll');
  }, []);

  return <div className={classes.backdrop}>{children}</div>;
};

export default Backdrop;