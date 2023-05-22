import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import classes from './Button.module.scss';

type BtnType = 'button' | 'submit';

interface ButtonProps {
  dataElem?: string;
  type?: BtnType;
  className: string;
  onClick?: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
                                   dataElem,
                                   type = 'button',
                                   className,
                                   children,
                                   onClick
                                 }) => {
  return (
    <button
      data-elem={dataElem}
      type={type}
      className={classNames(classes.button, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;