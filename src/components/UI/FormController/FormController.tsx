import {
  ChangeEvent,
  Dispatch,
  FC,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState
} from 'react';
import classNames from 'classnames';

import classes from './FormController.module.scss';
import { ReactComponent as SelectArrowIcon } from '../../../assets/icons/select-arrow-icon.svg';
import { ReactComponent as InputArrowIcon } from '../../../assets/icons/input-arrow-icon.svg';

type InputType = 'text' | 'number' | 'select';

interface IOption {
  value: string;
  text: string;
}

interface FormControllerProps {
  dataElem?: string;
  type?: InputType;
  label?: string;
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  options?: IOption[];
  className?: string;
}

const FormController: FC<FormControllerProps> = ({
                                                   dataElem,
                                                   type = 'text',
                                                   label,
                                                   placeholder,
                                                   value,
                                                   setValue,
                                                   options,
                                                   className
                                                 }) => {
  const [selectInputIsOpen, setSelectInputIsOpen] = useState<boolean>(false);

  const hideInputTypeSelectHandler = (): void => {
    setSelectInputIsOpen(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', hideInputTypeSelectHandler);

    return () => {
      document.body.removeEventListener('click', hideInputTypeSelectHandler);
    };
  }, []);

  const changeInputValueHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const incrementInputTypeNumberHandler = (): void => {
    setValue(prevState => (+prevState + 1).toString());
  };

  const decrementInputTypeNumberHandler = (): void => {
    setValue(prevState => (+prevState - 1).toString());
  };


  const toggleInputTypeSelectHandler = (event: MouseEvent<HTMLDivElement>): void => {
    event.stopPropagation();

    setSelectInputIsOpen(prevState => !prevState);
  };

  const selectOptionHandler = (value: string): void => {
    setValue(value);
    hideInputTypeSelectHandler();
  };

  const selectedOption = options?.find(option => option.value === value);

  return (
    <div className={classNames(classes.controller, className)}>
      {label && <label className={classes.controller__label}>{label}</label>}
      {type !== 'select'
        ? <input
          data-elem={dataElem}
          type={type}
          placeholder={placeholder}
          className={classes.controller__input}
          value={value}
          onChange={changeInputValueHandler}
        />
        : (
          <div
            data-elem={dataElem}
            className={classNames(
              classes.controller__input,
              classes.controller__input_type_select,
              { [classes.controller__input_type_select_active]: selectInputIsOpen }
            )}
            onClick={toggleInputTypeSelectHandler}
          >
            {selectedOption
              ? <span className={classes.controller__selected}>{selectedOption.text}</span>
              : placeholder}
            <SelectArrowIcon/>
          </div>
        )}
      {selectInputIsOpen && (
        <div className={classes.dropdown}>
          <ul className={classes.dropdown__list}>
            {options?.map(option => (
              <li
                key={option.value}
                className={classNames(
                  classes.dropdown__item,
                  { [classes.dropdown__item_active]: option.value === value }
                )}
                onClick={() => selectOptionHandler(option.value)}
              >
                {option.text}
              </li>
            ))}
          </ul>
        </div>
      )}
      {type === 'number' && (
        <div className={classes.controller__actions}>
          <button
            type="button"
            className={classes.controller__button}
            onClick={incrementInputTypeNumberHandler}
          >
            <InputArrowIcon/>
          </button>
          <button
            type="button"
            className={classNames(
              classes.controller__button,
              classes.controller__button_reversed
            )}
            onClick={decrementInputTypeNumberHandler}
          >
            <InputArrowIcon/>
          </button>
        </div>
      )}
    </div>
  );
};

export default FormController;