import { MemoryRouter } from 'react-router';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  it('should render', () => {
    render(
      <MemoryRouter>
        <Pagination pageNumber={1} pageTotal={1} request="test" />
      </MemoryRouter>
    );
    const renderText = screen.getByText('next');
    expect(renderText).toBeInTheDocument();
  });
});
