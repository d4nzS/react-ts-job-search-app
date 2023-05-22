import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import IVacancies from '../../models/vacancies';
import localSave from '../../utils/local-save';
import { IGetVacanciesParams } from './vacancy-api';

const FAVOURITE_VACANCIES_KEY = 'fvk';

interface IGetVacanciesFiltersParams {
  catalogues: string;
  payment_from: string;
  payment_to: string;
}

interface VacancyState {
  favourites: IVacancies;
  getVacanciesParams: IGetVacanciesParams;
}

const initialState: VacancyState = {
  favourites: JSON.parse(localStorage.getItem(FAVOURITE_VACANCIES_KEY) ?? '[]'),
  getVacanciesParams: {
    keyword: '',
    catalogues: '',
    payment_from: '',
    payment_to: ''
  }
};

const vacancySlice = createSlice({
  name: 'vacancy',
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<IVacancies[0]>) {
      state.favourites.push(action.payload);
      localSave(FAVOURITE_VACANCIES_KEY, state.favourites);
    },
    removeFavouriteById(state, action: PayloadAction<number>) {
      state.favourites = state.favourites.filter(f => f.id !== action.payload);
      localSave(FAVOURITE_VACANCIES_KEY, state.favourites);
    },
    saveGetVacanciesKeywordParam(state, action: PayloadAction<string>) {
      state.getVacanciesParams.keyword = action.payload;
    },
    saveGetVacanciesFilterParams(state, action: PayloadAction<IGetVacanciesFiltersParams>) {
      state.getVacanciesParams = { ...state.getVacanciesParams, ...action.payload };
    }
  }
});

export const vacancyActions = vacancySlice.actions;

export default vacancySlice;
