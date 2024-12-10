import { PureComponent } from 'react';
import './App.css';

import { Search } from './components/search/search';
import { LSAPI } from './components/API/LSAPI';

export class App extends PureComponent {
  state = {
    inputValue: '',
    searchRequest: '',
  };

  loadSaveRequest: LSAPI;

  constructor() {
    super({});
    this.loadSaveRequest = new LSAPI();
    if (this.loadSaveRequest.hasSave()) {
      const request = this.loadSaveRequest.loadRequest();
      this.state.inputValue = request;
      this.state.searchRequest = request;
    }
  }

  onChange = (value: string) => {
    this.setState({ inputValue: value });
  };

  onClick = () => {
    this.setState({ searchRequest: this.state.inputValue });
    this.loadSaveRequest.saveRequest(this.state.inputValue);
  };

  render() {
    return (
      <>
        <Search
          inputValue={this.state.inputValue}
          onChange={this.onChange}
          onClick={this.onClick}
        />
      </>
    );
  }
}
