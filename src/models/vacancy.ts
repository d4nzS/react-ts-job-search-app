import IVacancies from './vacancies';

type IVacancy = IVacancies[0] & { vacancyRichText: string };

export default IVacancy;