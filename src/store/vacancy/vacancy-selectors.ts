import { RootState } from '../index';

export const favouritesSelector = (state: RootState) => state.vacancy.favourites;

export const getVacanciesParamsSelector = (state: RootState) => state.vacancy.getVacanciesParams;