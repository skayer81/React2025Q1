import { PureComponent } from 'react';
import { Card } from './card/card';
import { getAnimal, getAnimals } from '../API/StAPI';
import { Animal } from '../interfaces/interfaces';
import './searchResult.css';
import { LoadingOverlay } from '../loadingOverlay/loadingOverlay';

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
    this.load();
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.request !== prevProps.request) {
      this.load();
    }
  }

  load = async () => {
    this.setState({ loading: true, error: null });
    try {
      const res = this.props.request
        ? await getAnimal(this.props.request)
        : await getAnimals();

      this.setState({ searchResult: res.animals });
    } catch (err) {
      this.setState({ error: 'Error loading data' });
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
        <section className="search-result">
          <h2>{request ? 'Search result' : 'Full catalog'}</h2>

          {error && <p>{error}</p>}
          {!loading && searchResult && searchResult.length === 0 && (
            <p>nothing found</p>
          )}
          {searchResult && searchResult.length > 0 && (
            <ul className="list-items">
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
        <LoadingOverlay isLoading={this.state.loading} message="Loading..." />
      </>
    );
  }
}
