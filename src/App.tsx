import { useState } from 'react';
import { SearchForm } from './components/SearchForm/SearchForm';
import { SearchResult } from './components/SearchResult/SearchResult';
import './App.css';

export function App() {
  const [searchRequest, setSearchRequest] = useState<null | string>(null);

  const onClick = (value: string) => {
    setSearchRequest(value);
  };

  return (
    <>
      <h1 className="header-title">Star Trek Animals</h1>
      <SearchForm onClick={onClick} />
      {searchRequest !== null ? <SearchResult request={searchRequest} /> : ''}
    </>
  );
}
