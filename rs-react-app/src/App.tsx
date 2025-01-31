import { PureComponent } from 'react';
import { SearchForm } from './components/SearchForm/SearchForm';
import { SearchResult } from './components/SearchResult/SearchResult';
import './App.css';

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
        <h1 className="header-title">Star Trek Animals</h1>
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
