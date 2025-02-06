import { PureComponent } from 'react';
import { Card } from './Card/Card';
import { getAnimal, getAnimals } from '../API/StAPI';
import { Animal } from '../interfaces/interfaces';
import { LoadingOverlay } from '../LoadingOverlay/LoadingOverlay';
import style from './SearchResult.module.css';

interface Props {
  request?: string;
}

interface State {
  searchResult: Array<Animal> | null;
  isLoading: boolean;
  error: string | null;
}

export class SearchResult extends PureComponent<Props, State> {
  state: State = {
    searchResult: null,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.request !== prevProps.request) {
      this.load();
    }
  }

  load = async () => {
    this.setState({ isLoading: true, error: null });
    try {
      const res = this.props.request
        ? await getAnimal(this.props.request)
        : await getAnimals();

      this.setState({ searchResult: res.animals });
    } catch (err) {
      this.setState({ error: 'Error loading data' });
      console.log(err);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { request } = this.props;
    const { searchResult, isLoading, error } = this.state;

    return (
      <>
        <section className={style.searchResult}>
          <h2>{request ? 'Search result' : 'Full catalog'}</h2>

          {error && <p>{error}</p>}
          {!isLoading && searchResult && searchResult.length === 0 && (
            <p>nothing found</p>
          )}
          {searchResult && searchResult.length > 0 && (
            <ul className={style.listItems}>
              {searchResult.map((animal, index) => (
                <li key={animal.uid}>
                  <Card
                    index={index + 1}
                    name={animal.name}
                    earthAnimal={animal.earthAnimal}
                  />
                </li>
              ))}
            </ul>
          )}
        </section>
        <LoadingOverlay isLoading={this.state.isLoading} message="Loading..." />
      </>
    );
  }
}
