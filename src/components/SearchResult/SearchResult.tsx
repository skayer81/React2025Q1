import { useEffect, useState } from 'react';
import { Card } from './Card/Card';
import { getAnimal, getAnimals } from '../API/StAPI';
import { Animal } from '../interfaces/interfaces';
import { LoadingOverlay } from '../LoadingOverlay/LoadingOverlay';
import style from './searchResult.module.css';

interface Props {
  request?: string;
}

export function SearchResult(props: Props) {
  const [searchResult, setSearchResult] = useState<Array<Animal> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { request } = props;

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = request ? await getAnimal(request) : await getAnimals();
        setSearchResult(res.animals);
      } catch (err) {
        setError('Error loading data');
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [request]);

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
}
