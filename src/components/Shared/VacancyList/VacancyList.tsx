import { FC, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames';

import classes from './VacancyList.module.scss';
import IVacancies from '../../../models/vacancies';
import AppUrls from '../../../constants/app-urls';
import { getPageCount, getSelectedVacancies, getVacancyOffset } from './vacancy-list-utils';
import { PAGINATION_SCROLL_OFFSET_CSS } from './vacancy-list-contants';
import VacancyCard from '../VacancyCard/VacancyCard';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/pagination-arrow-icon.svg';

interface VacancyListProps {
  vacancies: IVacancies;
  paginationHorizontalOffsetCSS?: string;
}

const VacancyList: FC<VacancyListProps> = ({ vacancies, paginationHorizontalOffsetCSS = '0' }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get(AppUrls.PAGE_QUERY_PARAM)) || 1;
  const [vacancyOffset, setVacancyOffset] = useState<number>(getVacancyOffset(currentPage, vacancies.length));

  const selectedVacancies = getSelectedVacancies(vacancies, vacancyOffset);
  const pageCount = getPageCount(vacancies.length);

  useEffect(() => {
    setVacancyOffset(getVacancyOffset(currentPage, vacancies.length));
  }, [currentPage, vacancies]);

  useEffect(() => {
    if (currentPage > pageCount) {
      setSearchParams({ [AppUrls.PAGE_QUERY_PARAM]: pageCount.toString() });
    }
  }, [currentPage, pageCount]);

  const pageClickHandler = (event: { selected: number }): void => {
    const selectedPage = event.selected + 1;

    setVacancyOffset(getVacancyOffset(selectedPage, vacancies.length));
    setSearchParams({ [AppUrls.PAGE_QUERY_PARAM]: selectedPage.toString() });
  };

  return (
    <section className={classes.vacancies}>
      <ul className={classes.vacancies__list}>
        {selectedVacancies.map(vacancy => (
          <li
            key={vacancy.id}
            data-elem={`vacancy-${vacancy.id}`}
            className={classes.vacancies__item}
          >
            <Link to={`/${vacancy.id.toString()}`}>
              <article>
                <VacancyCard isInList {...vacancy}/>
              </article>
            </Link>
          </li>
        ))}
      </ul>
      <style>
        {`
          @media (min-width: 992px) {
            #position-container {
              left: calc(50% + ${paginationHorizontalOffsetCSS} - ${PAGINATION_SCROLL_OFFSET_CSS}) !important;
            }
          }  
        `}
      </style>
      <div
        id="position-container"
        style={{ left: `calc(50% - ${PAGINATION_SCROLL_OFFSET_CSS})` }}
        className={classes['position-container']}
      >
        <ReactPaginate
          forcePage={currentPage - 1}
          pageCount={pageCount}
          previousLabel={<ArrowIcon/>}
          nextLabel={<ArrowIcon className={classes.pagination__icon_reversed}/>}
          containerClassName={classNames(classes.pagination)}
          previousLinkClassName={classes.pagination__link}
          nextLinkClassName={classes.pagination__link}
          pageLinkClassName={classes.pagination__link}
          activeLinkClassName={classes.pagination__link_active}
          disabledLinkClassName={classes.pagination__link_disabled}
          onPageChange={pageClickHandler}
        />
      </div>
    </section>
  );
};

export default VacancyList;