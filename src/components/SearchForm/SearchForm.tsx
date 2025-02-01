import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { ErrorButton } from '../ErrorButton/ErrorButton';
//import { LocaleStorageAPI } from '../API/LocaleStorageAPI';
import style from './searchForm.module.css';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface Props {
  onClick: (value: string) => void;
}

//const localeStorageAPI = new LocaleStorageAPI();

export function SearchForm({ onClick }: Props) {
  const [request, setRequest] = useLocalStorage();
  console.log('request', request);
  const [inputValue, setInputValue] = useState(request);
  console.log('inputValue', inputValue);

  // useEffect(()=> {
  //   setInputValue(request)
  // }, [request])
  // const [request] = useLocalStorage()
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

  // useEffect(() => {
  //   // if (!localeStorageAPI.hasSave()) return;
  //   // const request = localeStorageAPI.loadRequest();
  //   setInputValue(request);
  //   onClick(request);
  //   console.log('useEffect', request)
  // }, [onClick, request]);

  useEffect(() => {
    setInputValue(request);
    //if (request !== ''){
    onClick(request); //}
    console.log(request);
    // }
  }, [request, onClick]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    //this.setState({ inputValue: event.target.value });
    setInputValue(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //localeStorageAPI.saveRequest(inputValue);
    setRequest(inputValue);
    onClick(inputValue);
    //  this.props.onClick(this.state.inputValue);
  };

  // render() {
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
  // }
}
