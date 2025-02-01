import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { ErrorButton } from '../ErrorButton/ErrorButton';
import { LocaleStorageAPI } from '../API/LocaleStorageAPI';
import style from './searchForm.module.css';

interface Props {
  onClick: (value: string) => void;
}

const localeStorageAPI = new LocaleStorageAPI();

export function SearchForm(props: Props) {
  const [inputValue, setInputValue] = useState('');
  // state = {
  //   inputValue: '',
  // };

  // componentDidMount() {
  //   if (!this.localeStorageAPI.hasSave()) {
  //     return;
  //   }

  //   const request = this.localeStorageAPI.loadRequest();
  //   this.setState({ inputValue: request });
  //   this.props.onClick(request);
  // }

  useEffect(() => {
    if (!localeStorageAPI.hasSave()) return;
    const request = localeStorageAPI.loadRequest();
    setInputValue(request);
    props.onClick(request);
  }, [props]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    //this.setState({ inputValue: event.target.value });
    setInputValue(event.target.value);
  };

  const onClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localeStorageAPI.saveRequest(inputValue);
    props.onClick(inputValue);
    //  this.props.onClick(this.state.inputValue);
  };

  // render() {
  return (
    <form className={style.form} onSubmit={onClick}>
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
  // }
}
