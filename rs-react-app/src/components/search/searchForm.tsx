import { Component } from 'react';
import { Input } from './input/input';
import { Button } from './button/button';
import { ErrorButton } from '../errorButton/errorButton';
import { LocaleStorageAPI } from '../API/LocaleStorageAPI';
import './searchForm.css';

interface Props {
  onClick: (value: string) => void;
}

export class SearchForm extends Component<Props> {
  ButtonText = 'Search';
  LocaleStorageAPI = new LocaleStorageAPI();

  state = {
    inputValue: '',
  };

  componentDidMount() {
    if (this.LocaleStorageAPI.hasSave()) {
      const request = this.LocaleStorageAPI.loadRequest();
      this.setState({ inputValue: request });
      this.props.onClick(request);
    }
  }

  onChange = (value: string) => {
    this.setState({ inputValue: value });
  };

  onClick = () => {
    this.LocaleStorageAPI.saveRequest(this.state.inputValue);
    this.props.onClick(this.state.inputValue);
  };

  render() {
    return (
      <form className="form">
        <span className="form-title">search form: </span>
        <Input inputValue={this.state.inputValue} onChange={this.onChange} />
        <Button onClick={this.onClick} buttonText={this.ButtonText} />
        <ErrorButton />
      </form>
    );
  }
}
