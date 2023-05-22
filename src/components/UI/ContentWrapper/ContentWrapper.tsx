import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import classes from './ContentWrapper.module.scss';

interface ContentWrapperProps {
  className: string;
  children: ReactNode;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ className, children }) => {
  return <div className={classNames(classes.wrapper, className)}>{children}</div>;
};

export default ContentWrapper;