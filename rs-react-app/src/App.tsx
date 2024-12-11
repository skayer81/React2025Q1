import { PureComponent } from 'react';
import './App.css';
import { SearchForm } from './components/search/searchForm';
import { SearchResult } from './components/searchResult/searchResult';

export class App extends PureComponent {
  state = {
    searchRequest: null,
  };

  onClick = (value: string) => {
    this.setState({ searchRequest: value });
  };

  render() {
    return (
      <>
        <SearchForm onClick={this.onClick} />
        {this.state.searchRequest !== null ? (
          <SearchResult request={this.state.searchRequest} />
        ) : (
          ''
        )}
      </>
    );
  }
}
