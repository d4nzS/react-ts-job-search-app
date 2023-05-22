import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';

import classes from './Loader.module.scss';
import useAppDispatch from '../../../hooks/use-app-dispatch';
import useAppSelector from '../../../hooks/use-app-selector';
import { loaderAnimationAdvanceSelector } from '../../../store/ui/ui-selectors';
import { uiActions } from '../../../store/ui/ui-slice';
import Backdrop from '../Backdrop/Backdrop';

const Loader: FC = () => {
  const dispatch = useAppDispatch();
  const loaderAnimationAdvance = useAppSelector(loaderAnimationAdvanceSelector);

  useEffect(() => {
    const startLoadingTimestamp = Date.now();

    return () => {
      dispatch(uiActions.setLoaderAnimationAdvance(loaderAnimationAdvance + (Date.now() - startLoadingTimestamp) / 1000));
    };
  }, []);

  return (
    <>
      {createPortal(
        (
          <Backdrop>
            <div className={classes.loader} style={{ animationDelay: `${-loaderAnimationAdvance}s` }}/>
          </Backdrop>
        ),
        document.getElementById('loader-root') as HTMLElement
      )}
    </>
  );
};

export default Loader;