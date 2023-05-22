import { FC, MouseEvent } from 'react';
import classNames from 'classnames';

import classes from './VacancyCard.module.scss';
import IVacancies from '../../../models/vacancies';
import useAppSelector from '../../../hooks/use-app-selector';
import { favouritesSelector } from '../../../store/vacancy/vacancy-selectors';
import useAppDispatch from '../../../hooks/use-app-dispatch';
import { vacancyActions } from '../../../store/vacancy/vacancy-slice';
import ContentWrapper from '../../UI/ContentWrapper/ContentWrapper';
import { ReactComponent as SaveIcon } from '../../../assets/icons/star-icon.svg';
import formatPayment from '../../../utils/format-payment';
import { ReactComponent as LocationIcon } from '../../../assets/icons/location-icon.svg';

const VacancyCard: FC<{ isInList: boolean } & IVacancies[0]> = ({
                                                                  isInList,
                                                                  id,
                                                                  profession,
                                                                  town,
                                                                  type_of_work,
                                                                  payment_from,
                                                                  payment_to,
                                                                  currency
                                                                }) => {
  const isVacancyInFavourites = !!useAppSelector(favouritesSelector).find(f => f.id === id);
  const dispatch = useAppDispatch();

  const toggleFavouriteHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    if (isVacancyInFavourites) {
      dispatch(vacancyActions.removeFavouriteById(id));
    } else {
      dispatch(vacancyActions.addFavourite({
        id,
        profession,
        town,
        type_of_work,
        payment_from,
        payment_to,
        currency
      }));
    }
  };

  return (
    <ContentWrapper className={classes.card}>
      <header className={classes.card__header}>
        <h3 className={classNames(
          classes.card__title,
          { [classes['card__title_in-list']]: isInList }
        )}>
          {profession}
        </h3>
        <button
          data-elem={`vacancy-${id}-shortlist-button`}
          className={classNames(
            classes.card__button,
            { [classes.card__button_active]: isVacancyInFavourites }
          )}
          onClick={toggleFavouriteHandler}
        >
          <SaveIcon/>
        </button>
      </header>
      <p className={classNames(
        classes['card__main-info'],
        { [classes['card__main-info_in-list']]: isInList }
      )}>
        <strong className={classes.card__payment}>
          з/п {formatPayment({ from: payment_from, to: payment_to })} {currency}
        </strong>
        <span>
          <span className={classes.card__separator}>•</span>
          {type_of_work.title}
        </span>
      </p>
      <address className={classes.card__address}>
        <LocationIcon className={classes.card__icon}/>
        {town.title}
      </address>
    </ContentWrapper>
  );
};

export default VacancyCard;