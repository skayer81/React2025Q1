import { PureComponent } from 'react';
import './App.css';

import { Search } from './components/search/search';
import { LSAPI } from './components/API/LSAPI';
import { SearchResult } from './components/searchResult/searchResult';
import { Catalog } from './components/catalog/catalog';

export class App extends PureComponent {
  state = {
    inputValue: '',
    searchRequest: '',
  };

  loadSaveRequest: LSAPI;

  constructor() {
    super({});
    this.loadSaveRequest = new LSAPI();
  }

  componentDidMount() {
    if (this.loadSaveRequest.hasSave()) {
      const request = this.loadSaveRequest.loadRequest();
      this.setState({ inputValue: request, searchRequest: request });
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
        {!this.state.searchRequest ? (
          <Catalog />
        ) : (
          <SearchResult request={this.state.searchRequest} />
        )}
      </>
    );
  }
}
