import { FC, ReactNode, Suspense } from 'react';

import Loader from '../../UI/Loader/Loader';

interface LazyLoaderProps {
  children: ReactNode;
}

const LazyLoader: FC<LazyLoaderProps> = ({ children }) => {
  return (
    <Suspense fallback={<Loader/>}>
      {children}
    </Suspense>
  );
};

export default LazyLoader;