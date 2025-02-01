import { useEffect, useState } from 'react';
import { Card } from './Card/Card';
import { getAnimal, getAnimals } from '../API/StAPI';
import { Animal } from '../interfaces/interfaces';
import { LoadingOverlay } from '../LoadingOverlay/LoadingOverlay';
import style from './searchResult.module.css';

interface Props {
  request?: string;
}

// interface State {
//   searchResult: Array<Animal> | null;
//   isLoading: boolean;
//   error: string | null;
// }

export function SearchResult(props: Props) {
  const [searchResult, setSearchResult] = useState<Array<Animal> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { request } = props;
  // state: State = {
  //   searchResult: null,
  //   isLoading: false,
  //   error: null,
  // };

  // const load = async () => {
  //   //this.setState({ isLoading: true, error: null });
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const res = request ? await getAnimal(request) : await getAnimals();

  //     // this.setState({ searchResult: res.animals });
  //     setSearchResult(res.animals);
  //   } catch (err) {
  //     // this.setState({ error: 'Error loading data' });
  //     setError('Error loading data');
  //     console.log(err);
  //   } finally {
  //     setIsLoading(false);
  //     //  this.setState({ isLoading: false });
  //   }
  // };

  // componentDidMount() {
  //   this.load();
  // }

  // useEffect(() => {
  //   load()
  // });

  // componentDidUpdate(prevProps: Props) {
  //   if (this.props.request !== prevProps.request) {
  //     this.load();
  //   }
  // }
  useEffect(() => {
    // if (this.props.request !== prevProps.request) {
    // load();
    //    }
    const load = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = request ? await getAnimal(request) : await getAnimals();

        // this.setState({ searchResult: res.animals });
        setSearchResult(res.animals);
      } catch (err) {
        // this.setState({ error: 'Error loading data' });
        setError('Error loading data');
        console.log(err);
      } finally {
        setIsLoading(false);
        //  this.setState({ isLoading: false });
      }
    };
    load();
  }, [request]);

  // render() {
  //const { searchResult, isLoading, error } = this.state;

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
      <LoadingOverlay isLoading={isLoading} message="Loading..." />
    </>
  );
  // }
}
