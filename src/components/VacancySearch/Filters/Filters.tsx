import { FC, FormEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import classes from './Filters.module.scss';
import ICatalogues from '../../../models/catalogues';
import useAppDispatch from '../../../hooks/use-app-dispatch';
import useAppSelector from '../../../hooks/use-app-selector';
import { getVacanciesParamsSelector } from '../../../store/vacancy/vacancy-selectors';
import AppUrls from '../../../constants/app-urls';
import ContentWrapper from '../../UI/ContentWrapper/ContentWrapper';
import { ReactComponent as CrossIcon } from '../../../assets/icons/cross-icon.svg';
import FormController from '../../UI/FormController/FormController';
import Button from '../../UI/Button/Button';
import { vacancyActions } from '../../../store/vacancy/vacancy-slice';

interface FiltersProps {
  vacancyCatalogues: ICatalogues;
}

const Filters: FC<FiltersProps> = ({ vacancyCatalogues }) => {
  const [, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { catalogues, payment_from, payment_to } = useAppSelector(getVacanciesParamsSelector);
  const [selectedCatalogue, setSelectedCatalogue] = useState<string>(catalogues);
  const [salaryFrom, setSalaryFrom] = useState<string>(payment_from);
  const [salaryUpTo, setSalaryUpTo] = useState<string>(payment_to);

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (
      catalogues !== selectedCatalogue
      || payment_from !== salaryFrom
      || payment_to !== salaryUpTo
    ) {
      dispatch(vacancyActions.saveGetVacanciesFilterParams({
        catalogues: selectedCatalogue,
        payment_from: salaryFrom,
        payment_to: salaryUpTo
      }));
      setSearchParams({ [AppUrls.PAGE_QUERY_PARAM]: '1' });
    }
  };

  const resetHandler = (): void => {
    setSelectedCatalogue('');
    setSalaryFrom('');
    setSalaryUpTo('');
  };

  return (
    <section className={classes.filters}>
      <ContentWrapper className={classes.filters__wrapper}>
        <form onSubmit={submitHandler}>
          <header className={classes.filters__header}>
            <h2 className={classes.filters__title}>Фильтры</h2>
            <button
              type="button"
              className={classes.filters__button_type_reset}
              onClick={resetHandler}
            >
              Сбросить всё
              <CrossIcon className={classes.filters__icon}/>
            </button>
          </header>
          <FormController
            dataElem="industry-select"
            type="select"
            label="Отрасль"
            placeholder="Выберите отрасль"
            value={selectedCatalogue}
            setValue={setSelectedCatalogue}
            options={vacancyCatalogues.map(catalogue => ({
              value: catalogue.key.toString(),
              text: catalogue.title_rus
            }))}
            className={classes['filters__industry-controller']}
          />
          <FormController
            dataElem="salary-from-input"
            type="number"
            label="Оклад"
            placeholder="От"
            value={salaryFrom}
            setValue={setSalaryFrom}
          />
          <FormController
            dataElem="salary-to-input"
            type="number"
            placeholder="До"
            className={classes['filters__salary-up-to-controller']}
            value={salaryUpTo}
            setValue={setSalaryUpTo}
          />
          <Button
            type="submit"
            className={classes.filters__button_type_submit}
          >
            Применить
          </Button>
        </form>
      </ContentWrapper>
    </section>
  );
};

export default Filters;