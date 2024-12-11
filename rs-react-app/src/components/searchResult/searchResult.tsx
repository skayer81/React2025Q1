import { PureComponent } from 'react';
import { Card } from './card/card';
import { getAnimal, getAnimals } from '../API/StAPI';
import { Animal } from '../interfaces/interfaces';

interface Props {
  request?: string;
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
    this.setState({ searchResult: null });
    const res = this.props.request
      ? await getAnimal(this.props.request)
      : await getAnimals();
    this.setState({ searchResult: res.animals });
  };

  render() {
    return (
      <>
        <h1>{this.props.request ? 'результат поиска' : 'Каталог'} </h1>
        <section className="search-result">
          {this.state.searchResult === null ? (
            <p>ждём</p>
          ) : (
            <ul>
              {this.state.searchResult.map((elem, index) => {
                return (
                  <li key={index}>
                    <Card index={index + 1} name={elem.name} />
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </>
    );
  }
}
