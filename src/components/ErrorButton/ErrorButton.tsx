import { useState } from 'react';

export function ErrorButton() {
  const [isError, setIsError] = useState(false);
  // state = {
  //   isError: false,
  // };

  const onClick = () => {
    //this.setState({ isError: true });
    setIsError(true);
  };

  if (isError) {
    throw new Error('Something went wrong');
  }
  return (
    <button onClick={onClick} type="button">
      {'Create rendering error'}
    </button>
  );
}
