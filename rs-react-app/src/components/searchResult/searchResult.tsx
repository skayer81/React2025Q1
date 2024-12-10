import { PureComponent } from 'react';
import { Card } from './card/card';
import { getAnimal } from '../API/StAPI';
import { Animal } from '../interfaces/interfaces';

interface Props {
  request: string;
}

interface State {
  searchResult: Array<Animal> | null;
}

export class SearchResult extends PureComponent<Props> {
  state: State = {
    searchResult: null,
  };

  constructor(props: Props) {
    super(props);
    this.loader();
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.request !== prevProps.request) {
      this.loader();
    }
  }

  loader = async () => {
    const res = await getAnimal(this.props.request);
    this.setState({ searchResult: res.animals });
  };

  render() {
    return (
      <>
        <h1>результат поиска </h1>
        <section className="search-result">
          {' '}
          {this.state.searchResult === null ? (
            <p>ждём</p>
          ) : (
            this.state.searchResult.map((elem, index) => {
              return <Card index={index + 1} name={elem.name} key={index} />;
            })
          )}
        </section>
      </>
    );
  }
}
