import { VACANCIES_PER_PAGE } from './vacancy-list-contants';
import IVacancies from '../../../models/vacancies';

export const getVacancyOffset = (page: number, vacanciesLength: number): number => {
  return (page - 1) * VACANCIES_PER_PAGE % vacanciesLength;
};

export const getSelectedVacancies = (vacancies: IVacancies, vacancyOffset: number): IVacancies => {
  return vacancies.slice(vacancyOffset, vacancyOffset + VACANCIES_PER_PAGE);
};

export const getPageCount = (vacanciesLength: number): number => {
  return Math.ceil(vacanciesLength / VACANCIES_PER_PAGE);
};
