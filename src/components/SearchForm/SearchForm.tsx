import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { ErrorButton } from '../ErrorButton/ErrorButton';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import style from './searchForm.module.css';

interface Props {
  onClick: (value: string) => void;
}

export function SearchForm({ onClick }: Props) {
  const [request, setRequest] = useLocalStorage();
  const [inputValue, setInputValue] = useState(request);

  useEffect(() => {
    setInputValue(request);
    onClick(request);
  }, [request, onClick]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRequest(inputValue);
    onClick(inputValue);
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <span className={style.formTitle}>search form: </span>
      <input
        value={inputValue}
        onChange={onChange}
        placeholder="Enter a search term"
        className={style.formInput}
      />
      <button type="submit">{'Search'}</button>
      <ErrorButton />
    </form>
  );
}
