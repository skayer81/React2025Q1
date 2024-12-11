import { PureComponent } from 'react';
import { Card } from './card/card';
import { getAnimal, getAnimals } from '../API/StAPI';
import { Animal } from '../interfaces/interfaces';

interface Props {
  request?: string;
}

interface State {
  searchResult: Array<Animal> | null;
  loading: boolean;
  error: string | null;
}

export class SearchResult extends PureComponent<Props, State> {
  state: State = {
    searchResult: null,
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.loader();
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.request !== prevProps.request) {
      this.loader();
    }
  }

  loader = async () => {
    this.setState({ loading: true, error: null });
    try {
      const res = this.props.request
        ? await getAnimal(this.props.request)
        : await getAnimals();

      this.setState({ searchResult: res.animals });
    } catch (err) {
      this.setState({ error: 'Ошибка при загрузке данных' });
      console.log(err);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { request } = this.props;
    const { searchResult, loading, error } = this.state;

    return (
      <>
        <h1>{request ? 'Результат поиска' : 'Каталог'}</h1>
        <section className="search-result">
          {loading && <p>Загрузка...</p>}
          {error && <p>{error}</p>}
          {!loading && searchResult && searchResult.length === 0 && (
            <p>Нет результатов</p>
          )}
          {searchResult && searchResult.length > 0 && (
            <ul>
              {searchResult.map((elem, index) => (
                <li key={index}>
                  <Card index={index + 1} name={elem.name} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </>
    );
  }
}
