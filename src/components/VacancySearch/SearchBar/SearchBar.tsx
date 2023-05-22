import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import classes from './SearchBar.module.scss';
import useAppDispatch from '../../../hooks/use-app-dispatch';
import useAppSelector from '../../../hooks/use-app-selector';
import { getVacanciesParamsSelector } from '../../../store/vacancy/vacancy-selectors';
import { getResponsiveInputPlaceholder } from './search-bar-utils';
import { vacancyActions } from '../../../store/vacancy/vacancy-slice';
import ContentWrapper from '../../UI/ContentWrapper/ContentWrapper';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg';
import Button from '../../UI/Button/Button';
import AppUrls from '../../../constants/app-urls';

const SearchBar: FC = () => {
  const [, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { keyword } = useAppSelector(getVacanciesParamsSelector);
  const [inputValue, setInputValue] = useState<string>(keyword);
  const [inputPlaceholder, setInputPlaceholder] = useState<string>(getResponsiveInputPlaceholder());

  useEffect(() => {
    const resizeHandler = (): void => {
      setInputPlaceholder(getResponsiveInputPlaceholder());
    };

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  const changeInputValueHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const searchVacanciesClickHandler = (): void => {
    if (keyword !== inputValue) {
      dispatch(vacancyActions.saveGetVacanciesKeywordParam(inputValue));
      setSearchParams({ [AppUrls.PAGE_QUERY_PARAM]: '1' });
    }
  };

  return (
    <section className={classes['search-bar']}>
      <ContentWrapper className={classes['search-bar__wrapper']}>
        <SearchIcon/>
        <input
          data-elem="search-input"
          type="text"
          placeholder={inputPlaceholder}
          className={classes['search-bar__input']}
          value={inputValue}
          onChange={changeInputValueHandler}
        />
        <Button
          className={classes['search-bar__button']}
          onClick={searchVacanciesClickHandler}
        >
          Поиск
        </Button>
      </ContentWrapper>
    </section>
  );
};

export default SearchBar;