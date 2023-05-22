import { FC } from 'react';
import { useRouteError } from 'react-router-dom';

import Layout from '../components/Layout/Layout';

const ErrorPage: FC = () => {
  const error = useRouteError() as { status: number };

  return (
    <Layout>
      <main>
        <h2 style={{ textAlign: 'center', lineHeight: '28px' }}>
          {error.status === 404
            ? 'К сожалению, такой страницы не существует.'
            : 'Что-то пошло не так... Обновите страницу через некоторое время.'
          }
        </h2>
      </main>
    </Layout>
  );
};

export default ErrorPage;