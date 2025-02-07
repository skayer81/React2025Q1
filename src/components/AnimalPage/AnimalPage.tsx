import { useParams } from 'react-router';
import { getAnimalByID } from '../API/StAPI.ts';
import { DetailedCard } from './DetailedCard/DetailedCard';
import { useEffect, useState } from 'react';
import { Animal } from '../interfaces/interfaces';
import { DetailedErrorCard } from './DetailedErrorCard/DetailedErrorCard';

export function AnimalPage(): JSX.Element {
  const { uid } = useParams();
  const { request, pageNumber } = useParams();
  const [data, setData] = useState<{ animal: Animal } | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);

  console.log('AnimalPage');

  useEffect(() => {
    async function getData() {
      const data = await getAnimalByID(uid ?? '');
      setData(data);
      setIsPending(false);
    }
    getData();
  }, [request, pageNumber, uid]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data === null ? (
        <DetailedErrorCard />
      ) : (
        <DetailedCard data={data.animal} />
      )}
    </>
  );
}
