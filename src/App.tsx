import { useState } from 'react';
import { SearchForm } from './components/SearchForm/SearchForm';
import { SearchResult } from './components/SearchResult/SearchResult';
import './App.css';

export function App() {
  const [searchRequest, setSearchRequest] = useState<null | string>(null);
  // state = {
  //   searchRequest: null,
  // };

  const onClick = (value: string) => {
    //this.setState({ searchRequest: value });
    setSearchRequest(value);
  };

  // render() {
  return (
    <>
      <h1 className="header-title">Star Trek Animals</h1>
      <SearchForm onClick={onClick} />
      {searchRequest !== null ? <SearchResult request={searchRequest} /> : ''}
    </>
  );
  // }
}
