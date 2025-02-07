import { Link, useParams } from 'react-router';
import style from './card.module.css';

interface Props {
  name: string;
  earthAnimal: boolean;
  index: number;
  uid: string;
}

export function Card(props: Props) {
  const isEarthAnimalDescription = 'lives on Earth';
  const isNotEarthAnimalDescription = 'lives in a galaxy far, far away';

  const { request, pageNumber } = useParams();

  return (
    <Link
      to={`/page${request ? '/' + request : ''}/${pageNumber}/animal/${props.uid}`}
    >
      <article className={style.card}>
        <p className={style.number}>Card № {props.index} </p>
        <h3 className={style.title}>Name: {props.name}</h3>
        <p>
          Description:{' '}
          {props.earthAnimal
            ? isEarthAnimalDescription
            : isNotEarthAnimalDescription}
        </p>
      </article>
    </Link>
  );
}
