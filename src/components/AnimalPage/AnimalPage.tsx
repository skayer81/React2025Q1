//  import { Link, useParams } from 'react-router/dom';
import { Link, useParams } from 'react-router';
import { Animal } from '../interfaces/interfaces';
import './DetailedCard.css';

interface Props {
  data: Animal;
}

export function AnimalPage(props: Props) {
  const { request, pageNumber } = useParams();
  return (
    <article className="detailedCard">
      <h2> Detailed Card</h2>
      <p>name: {props.data.name}</p>
      <p>avian: {props.data.avian ? 'yes' : 'no'}</p>
      <p>canine: {props.data.canine ? 'yes' : 'no'}</p>
      <p>earthAnimal: {props.data.earthAnimal ? 'yes' : 'no'}</p>
      <p>earthInsect: {props.data.earthInsect ? 'yes' : 'no'}</p>
      <p>feline: {props.data.feline ? 'yes' : 'no'}</p>
      <p>id: {props.data.uid}</p>
      <Link to={`/page${request ? '/' + request : ''}/${pageNumber}`}>
        close
      </Link>
    </article>
  );
}
