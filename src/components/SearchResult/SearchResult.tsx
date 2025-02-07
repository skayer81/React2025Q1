import { useEffect, useState } from 'react';
import { Card } from './Card/Card';
import { getSearchAnimals } from '../API/StAPI.ts';
import { Animal, Data } from '../interfaces/interfaces';
import { LoadingOverlay } from '../LoadingOverlay/LoadingOverlay';
import style from './searchResult.module.css';
import { Pagination } from '../Pagination/Pagination';
import { useParams } from 'react-router';
import { Outlet } from 'react-router';

interface Props {
  request?: string;
}

export function SearchResult(props: Props) {
  //const [searchResult, setSearchResult] = useState<Array<Animal> | null>(null);
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { pageNumber } = useParams(); // useParams useParams();

  const { request } = props;

  // useEffect( () => {
  //   async function getData() {
  //     const data = await getSearchAnimals(request??'', pageNumber??'');
  //     setIsPending(false)
  //     setData(data);
  //   }
  //   getData()
  //   },
  // [request, pageNumber]);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await getSearchAnimals(request ?? '', pageNumber ?? ''); //getAnimal(request) : await getAnimals();
        setData(res);
      } catch (err) {
        setError('Error loading data');
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [request, pageNumber]);

  return (
    <>
      <section className={style.searchResult}>
        <h2>{request ? 'Search result' : 'Full catalog'}</h2>

        {error && <p>{error}</p>}
        {/* {!isLoading && data && searchResult.length === 0 && (
          <p>nothing found</p>
        )} */}
        {data?.animals && data.animals.length > 0 && (
          <div className={style.contentContainer}>
            <ul className={style.listItems}>
              {/* {searchResult.map((animal, index) => (
              <li key={animal.uid}>
                <Card
                  index={index + 1}
                  name={animal.name}
                  earthAnimal={animal.earthAnimal}
                />
              </li>
            ))} */}
              {data === null || data.animals.length === 0
                ? 'Nothing found'
                : data.animals.map((animal: Animal, index: number) => (
                    <li key={animal.uid}>
                      <Card
                        index={index + 1}
                        name={animal.name}
                        uid={animal.uid}
                        earthAnimal={animal.earthAnimal}
                      />
                      ;
                    </li>
                  ))}
            </ul>
            <Outlet />
          </div>
        )}

        <Pagination
          pageNumber={Number(pageNumber)}
          pageTotal={
            data === null || data.animals.length === 0
              ? 0
              : data.page.totalPages
          }
          request={request ?? ''}
        />
      </section>
      <LoadingOverlay isLoading={isLoading} message="Loading..." />
    </>
  );
}
