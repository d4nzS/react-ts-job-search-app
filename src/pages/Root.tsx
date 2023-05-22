import { FC } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import useAppSelector from '../hooks/use-app-selector';
import { isLoadingSelector } from '../store/ui/ui-selectors';
import Layout from '../components/Layout/Layout';
import Loader from '../components/UI/Loader/Loader';

const Root: FC = () => {
  const isLoading = useAppSelector(isLoadingSelector);

  return (
    <>
      <ScrollRestoration/>
      {isLoading && <Loader/>}
      <Layout>
        <Outlet/>
      </Layout>
    </>
  );
};

export default Root;