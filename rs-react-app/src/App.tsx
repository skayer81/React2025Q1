import { PureComponent } from 'react';
import './App.css';
import { SearchForm } from './components/search/searchForm';
//import { LSAPI } from './components/API/LSAPI';
import { SearchResult } from './components/searchResult/searchResult';

export class App extends PureComponent {
  state = {
    // inputValue: '',
    searchRequest: '',
  };

  //loadSaveRequest = new LSAPI();

  // componentDidMount() {
  //   if (this.loadSaveRequest.hasSave()) {
  //     const request = this.loadSaveRequest.loadRequest();
  //     this.setState({ inputValue: request, searchRequest: request });
  //   }
  // }

  // onChange = (value: string) => {
  //   this.setState({ inputValue: value });
  // };

  onClick = (value: string) => {
    console.log(value);
    this.setState({ searchRequest: value });
    // this.loadSaveRequest.saveRequest(this.state.inputValue);
  };

  render() {
    return (
      <>
        <SearchForm
          //  inputValue={this.state.inputValue}
          //   onChange={this.onChange}
          onClick={this.onClick}
        />
        <SearchResult request={this.state.searchRequest} />
      </>
    );
  }
}
