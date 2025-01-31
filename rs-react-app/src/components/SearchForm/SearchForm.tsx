import { ChangeEvent, Component, FormEvent } from 'react';
import { ErrorButton } from '../ErrorButton/ErrorButton';
import { LocaleStorageAPI } from '../API/LocaleStorageAPI';
import style from './searchForm.module.css';

interface Props {
  onClick: (value: string) => void;
}

export class SearchForm extends Component<Props> {
  localeStorageAPI = new LocaleStorageAPI();

  state = {
    inputValue: '',
  };

  componentDidMount() {
    if (!this.localeStorageAPI.hasSave()) {
      return;
    }

    const request = this.localeStorageAPI.loadRequest();
    this.setState({ inputValue: request });
    this.props.onClick(request);
  }

  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  onClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.localeStorageAPI.saveRequest(this.state.inputValue);
    this.props.onClick(this.state.inputValue);
  };

  render() {
    return (
      <form className={style.form} onSubmit={this.onClick}>
        <span className={style.formTitle}>search form: </span>
        <input
          value={this.state.inputValue}
          onChange={this.onChange}
          placeholder="Enter a search term"
          className={style.formInput}
        />
        <button type="submit">{'Search'}</button>
        <ErrorButton />
      </form>
    );
  }
}
