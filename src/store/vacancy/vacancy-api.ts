import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  API_HEADERS,
  API_PARAMS,
  BASE_URL,
  getAccessToken,
  X_SECRET_KEY
} from '../../api/api';
import IVacancies from '../../models/vacancies';
import IVacancy from '../../models/vacancy';
import ICatalogues from '../../models/catalogues';

export interface IGetVacanciesParams {
  keyword: string;
  catalogues: string;
  payment_from: string;
  payment_to: string;
}

export const vacancyApi = createApi({
  reducerPath: 'vacancyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async headers => {
      headers.set(X_SECRET_KEY, API_HEADERS[X_SECRET_KEY]);
      headers.set('Authorization', `Bearer ${await getAccessToken()}`);

      return headers;
    },
  }),
  endpoints: build => ({
    getVacancies: build.query<IVacancies, IGetVacanciesParams>({
      query: params => ({
        url: '/vacancies',
        params: {
          ...API_PARAMS,
          ...params,
          published: 1,
        }
      }),
      transformResponse: (response: { objects: IVacancies }) => response.objects
    }),
    getVacancyById: build.query<IVacancy, string>({
      query: id => ({
        url: `/vacancies/${id}`,
        params: {
          ...API_PARAMS
        }
      })
    }),
    getCatalogues: build.query<ICatalogues, void>({
      query: () => ({
        url: '/catalogues',
        params: {
          ...API_PARAMS
        }
      })
    })
  })
});

export const {
  useGetVacanciesQuery,
  useGetVacancyByIdQuery,
  useGetCataloguesQuery
} = vacancyApi;