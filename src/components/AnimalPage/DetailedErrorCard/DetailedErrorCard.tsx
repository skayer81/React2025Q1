import { Link, useParams } from 'react-router';

export function DetailedErrorCard() {
  const { request, pageNumber } = useParams();
  return (
    <article className="detailedCard">
      <h2> Detailed Card</h2>
      <h3>there is no animal with this id</h3>
      <Link to={`/page${request ? '/' + request : ''}/${pageNumber}`}>
        close
      </Link>
    </article>
  );
}
