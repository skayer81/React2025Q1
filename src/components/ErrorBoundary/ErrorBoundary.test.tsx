import { MemoryRouter } from 'react-router';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ErrorBoundary } from './ErrorBoundary';

function Test() {
  const errorTest = true;
  if (errorTest) {
    throw new Error('test');
  }
  return <div></div>;
}

describe('Card', () => {
  it('should render', () => {
    render(
      <MemoryRouter>
        <ErrorBoundary>
          <Test />
        </ErrorBoundary>
      </MemoryRouter>
    );
    const renderText = screen.getByText('Something went wrong');
    expect(renderText).toBeInTheDocument();
  });
});
