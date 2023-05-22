import { FC, lazy, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppUrls from './constants/app-urls';
import Root from './pages/Root';
import LazyLoader from './components/Shared/LazyLoader/LazyLoader';
import SCROLL_WIDTH from './constants/scroll-width';

const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const VacancySearchPage = lazy(() => import('./pages/VacancySearchPage'));
const VacancyPage = lazy(() => import('./pages/VacancyPage'));
const FavouriteVacanciesPage = lazy(() => import('./pages/FavouriteVacanciesPage'));

const router = createBrowserRouter([
  {
    path: AppUrls.VACANCIES,
    element: <Root/>,
    errorElement: (
      <LazyLoader>
        <ErrorPage/>
      </LazyLoader>
    ),
    children: [
      {
        index: true,
        element: (
          <LazyLoader>
            <VacancySearchPage/>
          </LazyLoader>
        )
      },
      {
        path: ':vacancyId',
        element: (
          <LazyLoader>
            <VacancyPage/>
          </LazyLoader>
        )
      },
      {
        path: AppUrls.FAVOURITE_VACANCIES,
        element: (
          <LazyLoader>
            <FavouriteVacanciesPage/>
          </LazyLoader>
        )
      }
    ]
  }
]);

const App: FC = () => {
  useEffect(() => {
    document.body.style.paddingRight = `${SCROLL_WIDTH}px`;
  }, []);

  return <RouterProvider router={router}/>;
};

export default App;
