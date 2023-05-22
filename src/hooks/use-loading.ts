import { useEffect } from 'react';

import useAppDispatch from './use-app-dispatch';
import { uiActions } from '../store/ui/ui-slice';

const useLoading = (isLoading: boolean): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(uiActions.setLoading());
    } else {
      dispatch(uiActions.removeLoading());
    }
  }, [isLoading]);
};

export default useLoading;