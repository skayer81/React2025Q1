import { useState } from 'react';
import { Link } from 'react-router';

interface Props {
  pageNumber: number;
  pageTotal: number;
  request: string;
}

export function Pagination(props: Props) {
  const [pageNumber, setPageNumber] = useState(props.pageNumber);
  return (
    <div>
      <Link
        to={`/page${props.request ? '/' + props.request : ''}/${pageNumber - 1}`}
      >
        <button
          className="card"
          onClick={() => {
            setPageNumber(pageNumber - 1);
          }}
          disabled={pageNumber === 0}
        >
          prev
        </button>
      </Link>
      <span>
        page {pageNumber + 1} from {props.pageTotal}
      </span>
      <Link
        to={`/page${props.request ? '/' + props.request : ''}/${pageNumber + 1}`}
      >
        <button
          className="card"
          onClick={() => {
            setPageNumber(pageNumber + 1);
          }}
          disabled={pageNumber === props.pageTotal - 1}
        >
          next
        </button>
      </Link>
    </div>
  );
}
