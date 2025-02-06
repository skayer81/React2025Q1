import { useParams } from 'react-router';
//import { useQuery } from '@tanstack/react-query';
import { getAnimalByID } from '../API/StAPI'; // { getA } from '../API';
import { DetailedCard } from './DetailedCard/DetailedCard';
import { useEffect, useState } from 'react';
import { Animal } from '../interfaces/interfaces';
import { DetailedErrorCard } from './DetailedErrorCard/DetailedErrorCard';

export function AnimalPage(): JSX.Element {
  const { uid } = useParams();
  // const { data, error, isPending } = useQuery({
  //   queryKey: [uid],
  //   queryFn: () => getAnimalByID(uid??''),
  // });
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

  // if (error) {
  //   return <div> `An error has occurred: ${error.message}`</div>;
  // }

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
